<template>
    <div>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col vs-type="flex" vs-justify="flex-end">
                <div class="flex btn-group">
                    <vs-button
                            @click="showCreatePopup('inner')"
                            type="relief"
                            icon-pack="feather"
                            icon="icon-plus-square"
                    >
                        បន្ថែម
                    </vs-button>
                </div>
            </vs-col>
        </vs-row>
        <div class="demo-alignment">
            <vs-popup class="holamundo" title="បន្ថែមមុខដំណែង" :active.sync="positionPopup">
                <vx-input-group class="mb-base">
                    <vs-input @keyup.enter="storePosition" v-model="position" class="inputx" placeholder="មុខដំណែង" />
                    <template slot="append">
                        <div class="append-text btn-addon">
                            <vs-button @click="storePosition" v-if="position !== ''" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
                        </div>
                    </template>
                </vx-input-group>
            </vs-popup>
        </div>
        <div class="demo-alignment">
            <vs-popup class="holamundo" title="បន្ថែមកម្រិតសម្គាល់" :active.sync="degreeNotePopup">
                <vx-input-group class="mb-base">
                    <vs-input @keyup.enter="storeDegreeNote" v-model="degree_note" class="inputx" placeholder="កម្រិតសម្គាល់" />
                    <template slot="append">
                        <div class="append-text btn-addon">
                            <vs-button @click="storeDegreeNote" v-if="degree_note !== ''" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
                        </div>
                    </template>
                </vx-input-group>
            </vs-popup>
        </div>
        <div class="demo-alignment">
            <vs-popup fullscreen title="ចុះឈ្មោះបុគ្គលិក" :active.sync="createPopup">
                <form>
                    <vs-row>
                        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="3">
                            <vue-dropzone
                                    class="max-content p-1"
                                    duplicateCheck ref="myVueDropzone"
                                    @vdropzone-success="successUpload"
                                    id="dropzone" :options="dropzoneOptions"
                            >

                            </vue-dropzone>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="9">
                            <div class="w-1/3 mr-2">
                                <vs-input class="w-full"  v-validate="'required'" name="ឈ្មោះខ្មែរ" label-placeholder="ឈ្មោះខ្មែរ" v-model="employees.kh_name" />
                                <span class="text-danger text-sm" v-show="errors.has('ឈ្មោះខ្មែរ')">{{ errors.first('ឈ្មោះខ្មែរ') }}</span>
                            </div>

                            <div class="w-1/3 mr-1">
                                <vs-input class="w-full" v-validate="'required'" label-placeholder="ឈ្មោះឡាតាំង" name="ឈ្មោះឡាតាំង" v-model="employees.en_name" />
                                <span class="text-danger text-sm" v-show="errors.has('ឈ្មោះឡាតាំង')">{{ errors.first('ឈ្មោះឡាតាំង') }}</span>
                            </div>
                            <div class="w-1/3 ml-1 mt-5">
                                <vs-select
                                        autocomplete
                                        class="w-full"
                                        placeholder="ជ្រើសរើសភេទ"
                                        v-model="employees.gender"
                                        v-validate="'required'"
                                        name="ភេទ"
                                >
                                    <vs-select-item  value="Female" text="Female" />
                                    <vs-select-item  value="Male" text="Male" />
                                </vs-select>
                                <span class="text-danger text-sm" v-show="errors.has('ភេទ')">{{ errors.first('ភេទ') }}</span>
                            </div>
                        </vs-col>
                    </vs-row>
                    <div class="flex mb-5">
                        <div class="w-1/4 mt-5 mr-2">
                            <datepicker class="w-full" v-validate="'required'" name="ថ្ងៃខែឆ្នាំកំណើត" placeholder="ថ្ងៃខែឆ្នាំកំណើត" v-model="employees.dob"></datepicker>
                            <span class="text-danger text-sm" v-show="errors.has('ថ្ងៃខែឆ្នាំកំណើត')">{{ errors.first('ថ្ងៃខែឆ្នាំកំណើត') }}</span>
                        </div>
                        <div class="w-1/3 ml-1 mt-5">
                            <vs-select
                                    autocomplete
                                    class="w-full"
                                    placeholder="តួនាទី"
                                    v-model="employees.position"
                                    v-validate="'required'"
                                    name="តួនាទី"
                            >
                                <vs-select-item :key="index" v-for="(item, index) in getPositions"  :value="item.position" :text="item.position" />
                            </vs-select>
                            <span class="text-danger text-sm" v-show="errors.has('តួនាទី')">{{ errors.first('តួនាទី') }}</span>
                        </div>

                        <vs-button @click="positionPopup=true" class="mt-5 mr-1" color="primary" type="border" icon-pack="feather" icon="icon-plus"></vs-button>

                        <div class="w-1/3 ml-1 mt-5">
                            <vs-select
                                    autocomplete
                                    class="w-full"
                                    placeholder="កម្រិតសម្គាល់"
                                    type="primary"
                                    v-model="employees.degree_note"
                                    v-validate="'required'"
                                    name="កម្រិតសម្គាល់"
                            >
                                <vs-select-item :key="index" v-for="(item, index) in getDegreeNotes"  :value="item.degree_note" :text="item.degree_note" />
                            </vs-select>
                            <span class="text-danger text-sm" v-show="errors.has('កម្រិតសម្គាល់')">{{ errors.first('កម្រិតសម្គាល់') }}</span>
                        </div>

                        <vs-button @click="degreeNotePopup=true" class="mt-5 mr-1" color="primary" type="border" icon-pack="feather" icon="icon-plus"></vs-button>
                        <div class="w-1/4 ml-2 mt-5">
                            <datepicker class="w-full" v-validate="'required'" name="ថ្ងៃចូលធ្វើការ" placeholder="ថ្ងៃចូលធ្វើការ" v-model="employees.start_work"></datepicker>
                            <span class="text-danger text-sm" v-show="errors.has('ថ្ងៃចូលធ្វើការ')">{{ errors.first('ថ្ងៃចូលធ្វើការ') }}</span>
                        </div>
                    </div>
                    <vs-divider></vs-divider>

                    <div class="w-full mr-2 mb-5">
                        <vs-textarea class="w-full" v-validate="'required'" name="ទំនាក់ទំនង" label="ទំនាក់ទំនង" v-model="employees.contact" />
                        <span class="text-danger text-sm" v-show="errors.has('ទំនាក់ទំនង')">{{ errors.first('ទំនាក់ទំនង') }}</span>
                    </div>

                    <div class="flex mb-2">
                        <div class="w-1/2 mr-2">
                            <vs-textarea class="w-full" v-validate="'required'" name="ទីកន្លែងកំណើត" label="ទីកន្លែងកំណើត" v-model="employees.pob" />
                            <span class="text-danger text-sm" v-show="errors.has('ទីកន្លែងកំណើត')">{{ errors.first('ទីកន្លែងកំណើត') }}</span>
                        </div>
                        <div class="w-1/2 ml-2">
                            <vs-textarea class="w-full" v-validate="'required'" name="អាស័យដ្ឋានបច្ចុប្បន្ន" label="អាស័យដ្ឋានបច្ចុប្បន្ន" v-model="employees.addr" />
                            <span class="text-danger text-sm" v-show="errors.has('អាស័យដ្ឋានបច្ចុប្បន្ន')">{{ errors.first('អាស័យដ្ឋានបច្ចុប្បន្ន') }}</span>
                        </div>
                    </div>

                    <vs-row vs-type="flex" vs-justify="flex-end">
                        <vs-col vs-type="flex" vs-justify="flex-end">
                            <div class="flex btn-group">
                                <vs-button
                                        @click.prevent="storeEmployee"
                                        type="relief"
                                        icon-pack="feather"
                                        icon="icon-plus-square"
                                        v-if="is_update === false"
                                >
                                    រក្សាទុក
                                </vs-button>
                                <vs-button
                                        @click.prevent="updateEmployee"
                                        type="relief"
                                        icon-pack="feather"
                                        icon="icon-plus-square"
                                        v-if="is_update === true"
                                >
                                    កែប្រែ
                                </vs-button>
                            </div>
                        </vs-col>
                    </vs-row>
                </form>
            </vs-popup>
        </div>

    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "Create",
        components: {
            Datepicker,
            vueDropzone: vue2Dropzone,
        },
        data() {
            return {
                is_update: false,
                images:[],
                date: null,
                createPopup: false,
                positionPopup: false,
                degreeNotePopup: false,
                dropzoneOptions: {
                    url: route('file.upload'),
                    maxFiles:1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ជ្រើសរើសរូបភាព​ Profile",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                    // maxFilesize: 0.5,
                    // headers: { "My-Awesome-Header": "header value" }
                },
                position: '',
                degree_note: '',
                employees: {
                    id: '',
                    profile: '',
                    kh_name: '',
                    en_name: '',
                    gender: null,
                    dob: null,
                    position: '',
                    degree_note: '',
                    start_work: null,
                    contact: '',
                    pob: '',
                    addr: '',
                }
            }
        },
        computed: {
            getPositions(){
                return this.$store.getters.get_positions
            },
            getDegreeNotes(){
                return this.$store.getters.get_degree_notes
            }
        },
        async created() {
            await this.$store.dispatch('fetchPosition');
            await this.$store.dispatch('fetchDegreeNote');
        },
        methods: {
            showCreatePopup(selected){
                this.is_update = true;
                this.createPopup = true;
                var em = this.employees;
                var sl = selected[0];
                if (selected !== 'inner'){
                    em.id          = sl.id;
                    em.profile     = sl.profile;
                    em.kh_name     = sl.kh_name;
                    em.en_name     = sl.en_name;
                    em.gender      = sl.gender;
                    em.dob         = sl.dob;
                    em.position    = sl.position;
                    em.degree_note = sl.degree_note;
                    em.start_work  = sl.start_work;
                    em.contact     = sl.contact;
                    em.pob         = sl.pob;
                    em.addr        = sl.addr;
                } else {
                    this.clearEmployeeForm();
                }
            },
            successUpload(file,res){
                this.images.unshift(res)
            },
            storePosition(){
                let self = this;
                if (self.position === ''){
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍បរាជ័យ',
                        text:'ទិន្នន័យមិនមាន!',
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-octagon',
                        position:'top-center'
                    });
                } else {
                    this.$vs.loading({
                        type:'material',
                    });
                    self.$store.dispatch('storePosition',{position:self.position}).then(function (data) {
                        if (data){
                            self.$vs.notify({
                                title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                                text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                                color:'primary',
                                iconPack: 'feather',
                                icon:'icon-check',
                                position:'top-center'
                            });
                            self.position = '';
                            self.$vs.loading.close();
                        }
                    })
                }
            },
            storeDegreeNote(){
                let self = this;
                if (self.degree_note === ''){
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍បរាជ័យ',
                        text:'ទិន្នន័យមិនមាន!',
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-octagon',
                        position:'top-center'
                    });
                } else {
                    this.$vs.loading({
                        type:'material',
                    });
                    self.$store.dispatch('storeDegreeNote',{degree_note:self.degree_note}).then(function (data) {
                        if (data){
                            self.$vs.notify({
                                title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                                text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                                color:'primary',
                                iconPack: 'feather',
                                icon:'icon-check',
                                position:'top-center'
                            });
                            self.degree_note = '';
                            self.$vs.loading.close();
                        }
                    })
                }
            },
            storeEmployee(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if(result) {
                        self.employees.profile = self.images[0].path;
                        self.$vs.loading({
                            type:'material',
                        });
                        self.$store.dispatch('storeEmployee', self.employees).then(function (data) {
                            if (data){
                                self.$vs.notify({
                                    title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                                    text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                                    color:'primary',
                                    iconPack: 'feather',
                                    icon:'icon-check',
                                    position:'top-center'
                                });
                                self.clearEmployeeForm();
                                self.$vs.loading.close();
                            }
                        })
                    }else{
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍បរាជ័យ',
                            text:'ទិន្នន័យមិនមានគ្រប់គ្រាន់!',
                            color:'danger',
                            iconPack: 'feather',
                            icon:'icon-alert-octagon',
                            position:'top-center'
                        });
                    }
                });
            },
            clearEmployeeForm(){
                this.is_update = false;
                var vm = this.employees;
                vm.profile = '';
                vm.kh_name = '';
                vm.en_name = '';
                vm.gender = null;
                vm.dob = null;
                vm.position = '';
                vm.degree_note = '';
                vm.start_work = null;
                vm.contact = '';
                vm.pob = '';
                vm.addr = '';
            },
            updateEmployee(){
                let self = this;
                if(self.images.length){
                    self.employees.profile = self.images[0].path;
                }
                this.$validator.validateAll().then(result => {
                    if(result) {
                        self.$vs.loading({
                            type:'material',
                        });
                        self.$store.dispatch('updateEmployee', self.employees).then(function (data) {
                            if (data){
                                self.$vs.notify({
                                    title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                                    text:'ទិន្នន័យត្រូវបានកែប្រែ',
                                    color:'primary',
                                    iconPack: 'feather',
                                    icon:'icon-check',
                                    position:'top-center'
                                });
                                self.clearEmployeeForm();
                                self.$vs.loading.close();
                                self.createPopup = false;
                            }
                        })
                    } else {
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍បរាជ័យ',
                            text:'ទិន្នន័យមិនមានគ្រប់គ្រាន់!',
                            color:'danger',
                            iconPack: 'feather',
                            icon:'icon-alert-octagon',
                            position:'top-center'
                        });
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>