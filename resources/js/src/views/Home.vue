<template>
	<div>
		<vs-button @click="$modal.show('add')" type="relief">Show modal</vs-button>
		<modal width="1000" height="auto" :scrollable="true" :pivotY="0.07" :adaptive="true" :clickToClose="false" name="add">
			<span class="close-btn">
					<span @click="$modal.hide('add')">
						❌
					</span>
			</span>
			<div class="pt-10">
				<tinymce id="modal" v-model="data" :other_options="options"></tinymce>
			</div>
		</modal>
		<vue-dropzone class="max-content p-1" duplicateCheck ref="myVueDropzone" @vdropzone-success="successUpload" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
		<tinymce id="d2" v-model="data" :other_options="options"></tinymce>
		<div class="flex btn-group">
			<vs-button @click="is_popup=true" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
			<vs-button @click="is_popup_edit=true" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
			<vs-button type="relief" icon-pack="feather" icon="icon-package">អាប់គ្រេដ</vs-button>
			<vs-button color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
			<add-home :is_popup="is_popup" @update-is_popup="syncPopup"></add-home>
			<edit-home :is_popup="is_popup_edit" @update-is_popup="syncPopupEdit"></edit-home>
		</div>
	</div>
</template>
<script>
	import vue2Dropzone from 'vue2-dropzone'
	import 'vue2-dropzone/dist/vue2Dropzone.min.css'
	import AddHome from "./addHome";
	import EditHome from "./editHome";
	export default {
		components: {EditHome, AddHome,vueDropzone: vue2Dropzone},
		data() {
			return {
				images:[],
				is_popup:false,
				is_popup_edit:false,
				selected: [],
				'tableList': [
					'vs-th: Component',
					'vs-tr: Component',
					'vs-td: Component',
					'thread: Slot',
					'tbody: Slot',
					'header: Slot'
				],
				users: [
					{
						"id": 1,
						"name": "Leanne Graham",
						"username": "Bret",
						"email": "Sincere@april.biz",
						"website": "hildegard.org",
					},
					{
						"id": 2,
						"name": "Ervin Howell",
						"username": "Antonette",
						"email": "Shanna@melissa.tv",
						"website": "anastasia.net",
					},
					{
						"id": 3,
						"name": "Clementine Bauch",
						"username": "Samantha",
						"email": "Nathan@yesenia.net",
						"website": "ramiro.info",
					},
					{
						"id": 4,
						"name": "Patricia Lebsack",
						"username": "Karianne",
						"email": "Julianne.OConner@kory.org",
						"website": "kale.biz",
					},
					{
						"id": 5,
						"name": "Chelsey Dietrich",
						"username": "Kamren",
						"email": "Lucio_Hettinger@annie.ca",
						"website": "demarco.info",
					},
					{
						"id": 6,
						"name": "Mrs. Dennis Schulist",
						"username": "Leopoldo_Corkery",
						"email": "Karley_Dach@jasper.info",
						"website": "ola.org",
					},
					{
						"id": 7,
						"name": "Kurtis Weissnat",
						"username": "Elwyn.Skiles",
						"email": "Telly.Hoeger@billy.biz",
						"website": "elvis.io",
					},
					{
						"id": 8,
						"name": "Nicholas Runolfsdottir V",
						"username": "Maxime_Nienow",
						"email": "Sherwood@rosamond.me",
						"website": "jacynthe.com",
					},
					{
						"id": 9,
						"name": "Glenna Reichert",
						"username": "Delphine",
						"email": "Chaim_McDermott@dana.io",
						"website": "conrad.com",
					},
					{
						"id": 10,
						"name": "Clementina DuBuque",
						"username": "Moriah.Stanton",
						"email": "Rey.Padberg@karina.biz",
						"website": "ambrose.net",
					},
				],
				data: 'Working on the mix',
				options: {},
				dropzoneOptions: {
					url: route('file.upload.original'),
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
		methods: {
			syncPopup(val) {
				this.is_popup = val
			},
			syncPopupEdit(val) {
				this.is_popup_edit = val
			},
			//image upload
			successUpload(file,res){
				this.images.unshift(res)
			}
		}
	}
</script>