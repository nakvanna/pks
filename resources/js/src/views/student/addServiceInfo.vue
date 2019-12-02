<template>
    <modal width="700" height="auto" :scrollable="true" :pivotY="0.2" :adaptive="true" :clickToClose="false" name="addServiceService">
        <div class="flex justify-end">
            <i @click="$modal.hide('addServiceService')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <h4 class="ml-2"><u> សេវាកម្ម</u></h4>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col lg:w-1/2 w-full">
                    <vs-select
                            autocomplete
                            class="w-full"
                            placeholder="ឆ្នាំសិក្សា"
                            type="primary"
                            v-validate="'required'"
                            v-model="data.year"
                            name="កម្រិតសម្គាល់"
                    >
                        <vs-select-item :key="index" v-for="(item, index) in getYears"  :value="item.name" :text="item.name" />
                    </vs-select>
                </div>
                <div class="vx-col md:w-1/2 flex">
                    <vs-checkbox color="#720ea8" v-model="checked"></vs-checkbox>
                    <flat-pickr class="w-full" v-model="data.date_pay" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង" name="date-pay" v-validate="'required'" :disabled="!checked"/>
                </div>
            </div>
            <vs-divider />
            <div class="vx-row">
                <div v-for="(service_info,index) in data.service_infos" :key="index" class="vx-col w-full">
                    <vx-input-group class="mb-base ">
                        <div class="flex">
                            <vs-select
                                    class="w-5/6"
                                    v-model="service_info.service_id"
                                    autocomplete
                                    placeholder="ជ្រើសរើសសេវាកម្ម"
                            >
                                <vs-select-item
                                        :key="index" v-for="(item, index) in getServices" :value="item.id"
                                        :text="item.type+' -> '+item.service"/>
                            </vs-select>
                            <!--<template slot="append">-->
                            <div class="append-text flex w-1/6 btn-addon">
                                <vs-button @click="minus(index)" color="danger" type="relief" icon-pack="feather" icon="icon-minus"></vs-button>
                                <vs-button type="relief" v-if="data.service_infos.length === index+1" @click="plus" icon-pack="feather" icon="icon-plus" ></vs-button>
                            </div>
                            <!--</template>-->
                        </div>
                    </vx-input-group>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="storeServiceInfo" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
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
        name: "addServiceService",
        components: {
            flatPickr,vueDropzone: vue2Dropzone
        },
        data(){
            return{
                checked: false,
                data:{
                    year: '',
                    date_pay: null,
                    service_infos:[{service_id:null}],
                },
                student_ids: [],
                service_infos: [],
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
            getServices(){
                return this.$store.getters.get_services
            }
        },
        async created () {
            await this.$store.dispatch('fetchYears'); /*Fetch year*/
            await this.$store.dispatch('fetchServices'); /*Fetch services*/
        },
        methods:{
            show (selected, is_student) {
                this.$modal.show('addServiceService');
                if (is_student === true){
                    for(var j = 0; j < selected.length; j ++){
                        this.student_ids.push(
                            selected[j]['id'],
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
                this.data.service_infos.push({service_id:null})
            },
            minus(index){
                this.data.service_infos.splice(index,1)
            },
            //image upload
            successUpload(file,res){
                this.data.photo = res.path
            },
            async storeServiceInfo(){
                let self = this;
                let year = this.data.year;
                let date_pay = this.data.date_pay;
                let sinfo = this.data.service_infos;
                let stuid = this.student_ids;
                for(var i = 0; i < stuid.length; i ++){
                    for(var j = 0; j < sinfo.length; j ++){
                        self.service_infos.push({
                            year       : year,
                            date_pay   : date_pay,
                            student_id : stuid[i],
                            service_id : sinfo[j].service_id,
                        })
                    }
                }
                this.$vs.loading({
                    type:'material',
                });
                const promises = self.service_infos.map(async function (data) {
                    await self.$store.dispatch('storeServiceInfo', data);
                });

                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                        text:'ទិន្នន័យសិស្សត្រូវបានបញ្ចូលក្នុងសេវាកម្ម!',
                        color:'success',
                        iconPack: 'feather',
                        icon:'icon-check',
                        position:'top-center'
                    });
                    self.service_infos = [];
                    self.$vs.loading.close()
                })
            },
        },
    }
</script>

<style scoped>

</style>