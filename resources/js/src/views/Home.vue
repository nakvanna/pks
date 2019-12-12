<template>
	<div>
		<demo></demo>
		<vs-button @click="$modal.show('add')" type="relief">Show modal</vs-button>
		<vue-dropzone class="max-content p-1" duplicateCheck ref="myVueDropzone" @vdropzone-success="successUpload" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
		<tinymce id="d2" v-model="data" :other_options="options"></tinymce>
		<div class="flex btn-group">
			<vs-button @click="is_popup=true" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
			<vs-button @click="is_popup_edit=true" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
			<vs-button type="relief" icon-pack="feather" icon="icon-package">អាប់គ្រេដ</vs-button>
			<vs-button color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
		</div>
	</div>
</template>
<script>
	import vue2Dropzone from 'vue2-dropzone'
	import 'vue2-dropzone/dist/vue2Dropzone.min.css'
	import AddHome from "./addHome";
	import EditHome from "./editHome";
	import Demo from "./demo/Demo";
	export default {
		components: {Demo, EditHome, AddHome,vueDropzone: vue2Dropzone},
		data() {
			return {
				images:[],
				is_popup:false,
				is_popup_edit:false,
				data: 'Working on the mixxxx',
				options: {},
				dropzoneOptions: {
					url: route('file.upload'),
					maxFiles:1,
					addRemoveLinks: true,
					// dictDefaultMessage: "ដាក់រូបភាព",
					thumbnailWidth: 150,
					thumbnailHeight: 150,
					// maxFilesize: 0.5,
					// headers: { "My-Awesome-Header": "header value" }
				}
			}
		},
		mounted(){
			var file = { size: 123, name: "Icon", type: "image/png" };
			var url = "/storage/5dde6b8752393-1574857607.jpg";
			this.$refs.myVueDropzone.manuallyAddFile(file, url);
		},
		methods: {
			//image upload
			successUpload(file,res){
				this.images.unshift(res)
			}
		}
	}
</script>