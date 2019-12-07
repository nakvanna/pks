<template>
    <modal width="700" height="auto" :scrollable="true" :pivotY="0.2" :adaptive="true" :clickToClose="false" name="addStudyInfo">
        <div class="flex justify-end">
            <i @click="$modal.hide('addStudyInfo')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <h4 class="ml-2"><u> ការសិក្សា</u></h4>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col lg:w-1/3 w-full">
                    <vs-select
                            autocomplete
                            class="w-full"
                            placeholder="ឆ្នាំសិក្សា"
                            type="primary"
                            v-model="data.year"
                    >
                        <vs-select-item :key="index" v-for="(item, index) in getYears"  :value="item.name" :text="item.name" />
                    </vs-select>

                </div>
                <div class="vx-col md:w-1/3 flex">
                    <vs-checkbox color="#720ea8" v-model="checked"></vs-checkbox>
                    <flat-pickr class="w-full" v-model="data.date_pay" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង" name="date-pay" v-validate="'required'" :disabled="!checked"/>
                </div>
                <div class="vx-col md:w-1/3 flex">
                    <flat-pickr class="w-full" v-model="data.last_date_pay" placeholder="ថ្ងៃត្រូវបង់ចុងក្រោយ" name="date-pay" v-validate="'required'"/>
                </div>
            </div>
            <vs-divider />
            <div class="vx-row">
                <div v-for="(study_info,index) in data.study_infos" :key="index" class="vx-col w-full">
                    <vx-input-group class="mb-base ">
                        <div class="flex">
                            <vs-select
                                    class="w-5/6"
                                    v-model="study_info.collection_id"
                                    autocomplete
                                    placeholder="ជ្រើសរើសពត៍មានការសិក្សា"
                            >
                                <vs-select-item
                                        :key="index" v-for="(item, index) in getCollection" :value="item.id"
                                        :text="item.group_section+' -> '+item.section+' -> '+item.level+item.class_name+' -> '+item.shift"/>
                            </vs-select>
                            <!--<template slot="append">-->
                            <div class="append-text flex w-1/6 btn-addon">
                                <vs-button @click="minus(index)" color="danger" type="relief" icon-pack="feather" icon="icon-minus"></vs-button>
                                <vs-button type="relief" v-if="data.study_infos.length === index+1" @click="plus" icon-pack="feather" icon="icon-plus" ></vs-button>
                            </div>
                            <!--</template>-->
                        </div>
                    </vx-input-group>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="storeStudyInfo" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
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
                checked: false,
                data:{
                    year: '',
                    date_pay: null,
                    last_date_pay: null,
                    study_infos:[{collection_id:null}],
                },
                student_ids: [],
                study_infos: [],
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
        computed: {
            getYears(){
                return this.$store.getters.get_years;
            },
            getCollection(){
                return this.$store.getters.get_collections
            }
        },
        async created () {
            await this.$store.dispatch('fetchYears'); /*Fetch year*/
            await this.$store.dispatch('fetchCollections'); /*Fetch collection (study info)*/
        },
        methods:{
            show (selected, is_student) {
                this.$modal.show('addStudyInfo');
                if (is_student === true){
                    for(var i = 0; i < selected.length; i ++){
                        this.student_ids.push(
                            selected[i]['id'],
                        )
                    }
                } else {
                    for(var i = 0; i < selected.length; i ++){
                        this.student_ids.push(
                            selected[i].student_id,
                        )
                    }
                }
            },
            plus(){
                this.data.study_infos.push({collection_id:null})
            },
            minus(index){
                this.data.study_infos.splice(index,1)
            },
            //image upload
            successUpload(file,res){
                this.data.photo = res.path
            },
            clearForm(){
                this.checked = false;
                this.data = {
                        year: '',
                        date_pay: null,
                        last_date_pay: null,
                        study_infos:[{collection_id:null}],
                };
            },
            async storeStudyInfo(){
                let self = this;
                let year = this.data.year;
                let date_pay = this.data.date_pay;
                let last_date_pay = this.data.last_date_pay;
                let sinfo = this.data.study_infos;
                let stuid = this.student_ids;
                for(var i = 0; i < stuid.length; i ++){
                    for(var j = 0; j < sinfo.length; j ++){
                        self.study_infos.push({
                            year          : year,
                            date_pay      : date_pay,
                            last_date_pay : last_date_pay,
                            student_id    : stuid[i],
                            collection_id : sinfo[j].collection_id,
                        })
                    }
                }
                this.$vs.loading({
                    type:'material',
                });
                const promises = self.study_infos.map(async function (data) {
                    await self.$store.dispatch('storeStudyInfo', data);
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                        text:'ទិន្នន័យសិស្សត្រូវបានបញ្ចូលក្នុងឆ្នាំសិក្សា!',
                        color:'success',
                        iconPack: 'feather',
                        icon:'icon-check',
                        position:'top-center'
                    });
                    self.study_infos = [];
                    self.clearForm();
                    self.$vs.loading.close()
                });
            },
        },
    }
</script>

<style scoped>

</style>