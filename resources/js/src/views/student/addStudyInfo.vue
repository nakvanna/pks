<template>
    <modal width="700" height="auto" :scrollable="true" :pivotY="0.2" :adaptive="true" :clickToClose="false" name="addStudyInfo">
        <div class="flex justify-end">
            <i @click="$modal.hide('addStudyInfo')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col lg:w-1/2 w-full">
                    <vs-select
                            class="w-full"
                            label="ឆ្នាំសិក្សា"
                            v-model="data.gender"
                    >
                        <vs-select-item value="ប្រុស" text="ប្រុស"/>
                        <vs-select-item value="ស្រី" text="ស្រី"/>
                    </vs-select>
                </div>
            </div>
            <vs-divider />
            <div class="vx-row">
                <div v-for="(study_info,index) in data.study_infos" :key="index" class="vx-col w-full">
                    <vx-input-group class="mb-base">
                        <vs-select
                                class="w-full"
                                v-model="study_info.study_info"
                                autocomplete
                        >
                            <vs-select-item value="ប្រុស" text="ថ្នាក់ខ្មែរពេញម៉ោង-ម.ទុតិយភូមិ-7A-ព្រឹក"/>
                            <vs-select-item value="ស្រី" text="ថ្នាក់ខ្មែរពេញម៉ោង-ម.ទុតិយភូមិ-7A-រសៀល"/>
                            <vs-select-item value="ប្រុស" text="ថ្នាក់ខ្មែរពេញម៉ោង-ម.ទុតិយភូមិ-8A-ព្រឹក"/>
                            <vs-select-item value="ស្រី" text="ថ្នាក់ខ្មែរពេញម៉ោង-ម.ទុតិយភូមិ-8A-រសៀល"/>
                        </vs-select>
                        <template slot="append">
                            <div class="append-text btn-addon">
                                <vs-button @click="minus(index)" icon-pack="feather" icon="icon-minus" type="flat"></vs-button>
                                <vs-button v-if="data.study_infos.length === index+1" @click="plus" icon-pack="feather" icon="icon-plus" type="flat"></vs-button>
                            </div>
                        </template>
                    </vx-input-group>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="storeStudent" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    export default {
        name: "addStudyInfo",
        components: {
            flatPickr,vueDropzone: vue2Dropzone
        },
        data(){
            return{
                data:{
                    study_year:'2019-2020',
                    study_infos:[{study_info:null}],
                },
                dropzoneOptions: {
                    url: route('file.upload'),
                    maxFiles:1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាពសិស្ស",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150
                }
            }
        },
        methods:{
            show () {
                this.$modal.show('addStudyInfo');
            },
            plus(){
                this.data.study_infos.push({study_info:null})
            },
            minus(index){
                this.data.study_infos.splice(index,1)
            },
            //store
            storeStudent(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result && self.data.gender && self.data.photo) {
                        self.$vs.loading();
                        self.$store.dispatch('storeStudent',self.data).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យបានបន្ថែម',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                                self.resetField();
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនបានបន្ថែម',
                                    color: 'danger',
                                    iconPack: 'feather',
                                    icon: 'icon-message-square',
                                    position: 'top-center'
                                });
                            }
                            self.$vs.loading.close();
                        });
                    }else {
                        self.$vs.notify({
                            title: 'ប្រតិបត្តិការបរាជ័យ',
                            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                            color: 'danger',
                            iconPack: 'feather',
                            icon: 'icon-message-square',
                            position: 'top-center'
                        })
                    }
                });
            },
            resetField(){
                this.data = {
                    name:'',
                    latin:'',
                    gender:'ប្រុស',
                    photo:'placeholder/placeholder.png',
                    dob:'',
                    std_contact:'',
                    pob:'',
                    address:'',
                    father_name:'',
                    father_job:'',
                    father_contact:'',
                    mother_name:'',
                    mother_job:'',
                    mother_contact:'',
                }
            },
            //image upload
            successUpload(file,res){
                this.data.photo = res.path
            }
        },
    }
</script>

<style scoped>

</style>