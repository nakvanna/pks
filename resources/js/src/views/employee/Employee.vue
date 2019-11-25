<template>
    <div>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col vs-type="flex" vs-justify="flex-end">
                <div class="flex btn-group">
                    <vs-button
                            @click="popupActive = true"
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
            <vs-popup fullscreen title="ចុះឈ្មោះបុគ្គលិក" :active.sync="popupActive">
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="3">
                        <image-upload
                                :upload-url="'file.upload'"
                                @get-image-path="setThumb"
                                :image-src="employee.profile?employee.profile:placeholder"
                                class="mb-2"/>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="9">
                        <vs-input class="w-1/3 mr-2" label-placeholder="ឈ្មោះខ្មែរ"  />
                        <vs-input class="w-1/3 mr-1" label-placeholder="ឈ្មោះឡាតាំង" />
                        <vs-select
                                autocomplete
                                class="w-1/3 ml-1 mt-5"
                                placeholder="ជ្រើសរើស"
                        >
                            <vs-select-item  value="Female" text="Female" />
                            <vs-select-item  value="Male" text="Male" />
                        </vs-select>
                    </vs-col>
                </vs-row>
                <div class="flex mb-5">
                    <datepicker class="w-1/4 mt-5 mr-2" placeholder="ថ្ងៃខែឆ្នាំកំណើត" v-model="date"></datepicker>
                    <vs-select
                            autocomplete
                            class="w-1/3 ml-1 mt-5"
                            placeholder="តួនាទី"
                    >
                        <vs-select-item  value="Female" text="Female" />
                        <vs-select-item  value="Male" text="Male" />
                    </vs-select>
                    <vs-button class="mt-5 mr-1" color="primary" type="border" icon-pack="feather" icon="icon-plus"></vs-button>
                    <vs-select
                            autocomplete
                            class="w-1/3 ml-1 mt-5"
                            placeholder="កម្រិតសម្គាល់"
                            type="primary"
                    >
                        <vs-select-item  value="Female" text="Female" />
                        <vs-select-item  value="Male" text="Male" />
                    </vs-select>
                    <vs-button class="mt-5 mr-1" color="primary" type="border" icon-pack="feather" icon="icon-plus"></vs-button>
                    <datepicker class="w-1/4 ml-2 mt-5" placeholder="ថ្ងៃចូលធ្វើការ" v-model="date"></datepicker>
                </div>
                <vs-divider></vs-divider>
                <vs-input class="w-full mr-2 mb-5" placeholder="ទំនាក់ទំនង"  />
                <div class="flex mb-2">
                    <vs-textarea class="w-1/2 mr-2" label="ទីកន្លែងកំណើត" v-model="textarea" />
                    <vs-textarea class="w-1/2 ml-2" label="អាស័យដ្ឋានបច្ចុប្បន្ន" v-model="textarea" />
                </div>

                <vs-row vs-type="flex" vs-justify="flex-end">
                    <vs-col vs-type="flex" vs-justify="flex-end">
                        <div class="flex btn-group">
                            <vs-button
                                    type="relief"
                                    icon-pack="feather"
                                    icon="icon-plus-square"
                            >
                                រក្សាទុក
                            </vs-button>
                        </div>
                    </vs-col>
                </vs-row>
            </vs-popup>
        </div>
        <vs-divider/>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="users">

            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="type">Type</vs-th>
                <vs-th sort-key="service">Service</vs-th>
                <vs-th sort-key="cost">Cost</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>

                    <vs-td :data="data[indextr].type">
                        {{ data[indextr].type }}
                    </vs-td>

                    <vs-td :data="data[indextr].service">
                        {{ data[indextr].service }}
                    </vs-td>

                    <vs-td :data="data[indextr].cost">
                        {{ data[indextr].cost }}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>
    </div>
</template>
<script>
    import ImageUpload from "../../components/ImageUpload";
    import Datepicker from 'vuejs-datepicker';
    export default {
        components: {
            Datepicker,
            ImageUpload
        },
        name:'Employee',
        data() {
            return {
                date: null,
                popupActive: false,
                users: [],
                selected: [],
                is_update: false,
                employee: {
                    profile: null,
                }
            }
        },
        computed: {
            isSmallerScreen() {
                return this.$store.state.windowWidth < 768
            },
            getService(){
                return this.$store.getters.get_services
            },
            placeholder() {
                return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png'
            }
        },
        async created() {
            await this.$store.dispatch('fetchServices');
        },
        methods: {
            storeService(){
                let self = this;
                let vm = this.services;
                if (vm.type === '' || vm.service === '' || vm.cost === ''){
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍បរាជ័យ',
                        text:'ទិន្នន័យមិនមានគ្រប់គ្រាន់!',
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-octagon',
                        position:'top-center'
                    });
                } else {
                    self.$vs.loading({
                        type:'material',
                    });
                    self.$store.dispatch('storeService', this.services).then(function (data) {
                        if (data){
                            self.$vs.notify({
                                title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                                text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                                color:'primary',
                                iconPack: 'feather',
                                icon:'icon-check',
                                position:'top-center'
                            });
                            self.clearServiceForm();
                            self.$vs.loading.close();
                        }
                    })
                }
            },
            clearServiceForm(){
                var vm = this.services;
                vm.type = '';
                vm.service = '';
                vm.cost = '';
                this.is_update = false;
            },
            async destroyService(){
                let vm = this;
                this.$vs.loading({
                    type:'material',
                });
                const promises = vm.selected.map(async function (data) {
                    await vm.$store.dispatch('destroyService', data.id);
                });
                await Promise.all(promises).then(function () {
                    vm.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                        text:'ទិន្នន័យត្រូវបានលុប!',
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-check',
                        position:'top-center'
                    });
                    vm.selected = [];
                    vm.$vs.loading.close()
                })
            },
            openAlert(color){
                this.colorAlert = color;
                this.$vs.dialog({
                    color:this.colorAlert,
                    title: 'លុបទិន្នន័យ',
                    text: 'តើអ្នកប្រាកដជាចង់លុបឬ?',
                    accept:this.acceptAlert
                })
            },
            acceptAlert(){
                this.destroyService();
            },
            editService(){
                this.services.id      = this.selected[0].id;
                this.services.type    = this.selected[0].type;
                this.services.service = this.selected[0].service;
                this.services.cost    = this.selected[0].cost;
                this.is_update        = true;
                this.selected         = [];
            },
            updateService(){
                let self = this;
                this.$vs.loading({
                    type:'material',
                });
                self.$store.dispatch('updateService', self.services).then(function (data) {
                    if (data){
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបានកែប្រែ',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.clearServiceForm();
                        self.$vs.loading.close();
                    }
                })
            },
            setThumb(thumb) {
                this.employee.profile = thumb
            },
        }
    }
</script>

<style lang="scss">
    #profile-tabs {
        .vs-tabs--content {
            padding: 0;
        }
    }
</style>
