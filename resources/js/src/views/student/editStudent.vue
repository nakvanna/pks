<template>
    <modal width="1500" height="auto" :scrollable="true" :pivotY="0.2" :adaptive="true" :clickToClose="false" name="edit">
        <div class="flex justify-end">
            <i @click="$modal.hide('edit')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <vs-divider position="left">ពត៌មានសិស្ស</vs-divider>
            <div class="vx-row">
                <div class="vx-col lg:w-3/4 w-full">
                    <div class="vx-row">
                        <div class="vx-col lg:w-1/3 w-full">
                            <vs-input class="w-full mt-6" label-placeholder="គោតនាម នាម" name="name" v-model="data.name"
                                      v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('name')">{{ errors.first('name') }}</span>
                        </div>
                        <div class="vx-col lg:w-1/3 w-full">
                            <vs-input class="w-full mt-6" label-placeholder="គោតនាម នាមឡាតាំង" name="latin" v-model="data.latin"
                                      v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('latin')">{{ errors.first('latin') }}</span>
                        </div>
                        <div class="vx-col lg:w-1/3 w-full">
                            <vs-select
                                    class="w-full"
                                    label="ភេទ"
                                    v-model="data.gender"
                            >
                                <vs-select-item value="ប្រុស" text="ប្រុស"/>
                                <vs-select-item value="ស្រី" text="ស្រី"/>
                            </vs-select>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col lg:w-1/3 w-full mt-6">
                            <label>ថ្ងៃខែឆ្មាំកំណើត</label>
                            <flat-pickr class="w-full" v-model="data.dob" placeholder="ថ្ងៃខែឆ្មាំកំណើត" name="dob" v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('dob')">{{ errors.first('dob') }}</span>
                        </div>
                        <div class="vx-col lg:w-2/3 w-full mt-6">
                            <label>ទំនាក់ទំនង</label>
                            <vs-textarea class="w-full" label="ទំនាក់ទំនង" v-model="data.std_contact" name="std_contact" v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('std_contact')">{{ errors.first('std_contact') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col lg:w-1/2 w-full">
                            <label>ទីកន្លែងកំណើត</label>
                            <vs-textarea class="w-full" label="ទីកន្លែងកំណើត" v-model="data.pob" name="pob" v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('pob')">{{ errors.first('pob') }}</span>
                        </div>
                        <div class="vx-col lg:w-1/2 w-full">
                            <label>អាស័យដ្ឋានបច្ចុប្បន្ន</label>
                            <vs-textarea class="w-full" label="អាស័យដ្ឋានបច្ចុប្បន្ន" v-model="data.address" name="address" v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('address')">{{ errors.first('address') }}</span>
                        </div>
                    </div>
                </div>
                <div class="vx-col lg:w-1/4 w-full">
                    <vue-dropzone class="max-content p-1" @vdropzone-mounted="loadPhoto" duplicateCheck ref="myVueDropzone" @vdropzone-success="successUpload" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                </div>
            </div>
            <vs-divider position="left">ពត៌មានអាណាព្យាបាល</vs-divider>
            <vs-divider position="left-center">ឪពុក</vs-divider>
            <div class="vx-row">
                <div class="vx-col lg:w-1/4 w-full">
                    <vs-input class="w-full mt-6" label-placeholder="គោតនាម នាម" name="father_name" v-model="data.father_name"
                              v-validate="'required'"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('father_name')">{{ errors.first('father_name') }}</span>
                </div>
                <div class="vx-col lg:w-1/4 w-full">
                    <vs-input class="w-full mt-6" label-placeholder="មុខរបរ" name="father_job" v-model="data.father_job"
                              v-validate="'required'"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('father_job')">{{ errors.first('father_job') }}</span>
                </div>
                <div class="vx-col lg:w-1/4 w-full">
                    <label>ទំនាក់ទំនង</label>
                    <vs-textarea class="w-full" label="ទំនាក់ទំនង" v-model="data.father_contact" name="father_contact" v-validate="'required'"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('father_contact')">{{ errors.first('father_contact') }}</span>
                </div>
            </div>
            <vs-divider position="left-center">ម្តាយ</vs-divider>
            <div class="vx-row">
                <div class="vx-col lg:w-1/4 w-full">
                    <vs-input class="w-full mt-6" label-placeholder="គោតនាម នាម" name="mother_name" v-model="data.mother_name"
                              v-validate="'required'"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('mother_name')">{{ errors.first('mother_name') }}</span>
                </div>
                <div class="vx-col lg:w-1/4 w-full">
                    <vs-input class="w-full mt-6" label-placeholder="មុខរបរ" name="mother_job" v-model="data.mother_job"
                              v-validate="'required'"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('mother_job')">{{ errors.first('mother_job') }}</span>
                </div>
                <div class="vx-col lg:w-1/4 w-full">
                    <label>ទំនាក់ទំនង</label>
                    <vs-textarea class="w-full" label="ទំនាក់ទំនង" v-model="data.mother_contact" name="mother_contact" v-validate="'required'"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('mother_contact')">{{ errors.first('mother_contact') }}</span>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="updateStudent" icon="icon-edit" icon-pack="feather" type="relief">កែប្រែ</vs-button>
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
        name: "editStudent",
        components: {
            flatPickr,vueDropzone: vue2Dropzone
        },
        data(){
            return{
                data:{
                    name:'',
                    latin:'',
                    gender:'ប្រុស',
                    photo:'images/placeholder/placeholder.png',
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
                this.$modal.show('edit');
            },
            //store
            updateStudent(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result && self.data.gender && self.data.photo) {
                        self.$vs.loading();
                        self.$store.dispatch('updateStudent',self.data).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យបានកែប្រែ',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនបានកែប្រែ',
                                    color: 'danger',
                                    iconPack: 'feather',
                                    icon: 'icon-message-square',
                                    position: 'top-center'
                                });
                            }
                            self.$vs.loading.close();
                            self.$emit('finished');
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
            //edit student
            editStudent(data){
                this.data = data;
            },
            //image upload
            successUpload(file,res){
                this.data.photo = res.path
            },
            loadPhoto() {
                this.$refs.myVueDropzone.manuallyAddFile({ size: 123}, this.data.photo);
            }
        },
    }
</script>

<style scoped>

</style>