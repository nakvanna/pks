<template>
    <vx-card no-shadow>
        <div class="flex mb-4">
            <vs-select
                    autocomplete
                    class="w-1/3 mr-2 mt-2"
                    label="ឆ្នាំសិក្សា"
                    placeholder="ឆ្នាំសិក្សា"
                    type="primary"
                    v-model="services.year"
            >
                <vs-select-item :key="index" v-for="(item, index) in getYears"  :value="item.name" :text="item.name" />
            </vs-select>
            <vs-input class="w-1/3 mr-2 mt-8" label-placeholder="ប្រភេទ" v-model="services.type"></vs-input>
            <vs-input class="w-1/3 mr-1 mt-8" label-placeholder="សេវាកម្ម" v-model="services.service"></vs-input>
        </div>
        <div class="flex mb-4">
            <vs-input class="w-1/4 mr-1" label-placeholder="តម្លៃ​ ១ខែ" v-model="services.cost_one"></vs-input>
            <vs-input class="w-1/4 mr-1" label-placeholder="តម្លៃ​ ១ត្រីមាស" v-model="services.cost_three"></vs-input>
            <vs-input class="w-1/4 mr-1" label-placeholder="តម្លៃ ១ឆមាស" v-model="services.cost_six"></vs-input>
            <vs-input class="w-1/4 mr-1" label-placeholder="តម្លៃ​ ១ឆ្នាំ" v-model="services.cost_twelve"></vs-input>
        </div>
        <div class="row flex">
            <vs-select
                    autocomplete
                    class="w-1/3 mr-2"
                    label="អ្នកទទួលបន្ទុក"
                    placeholder="ជ្រើសរើស"
                    v-model="services.employee_id"
            >
                <vs-select-item  value="0" text="None"  />
                <vs-select-item :key="index" :value="item.id" :text="item.kh_name + ' ' + item.en_name" v-for="(item,index) in getEmployees" />
            </vs-select>
        </div>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col vs-type="flex" vs-justify="flex-end">
                <div class="flex btn-group">
                    <vs-button
                            @click="storeService"
                            type="relief"
                            icon-pack="feather"
                            icon="icon-plus-square"
                            v-if="is_update === false"
                    >
                        បន្ថែម
                    </vs-button>
                    <vs-button
                            @click="updateService"
                            color="warning" type="relief"
                            icon-pack="feather" icon="icon-edit"
                            v-if="is_update === true"
                    >
                        កែប្រែ
                    </vs-button>
                    <vs-button
                            @click="clearServiceForm"
                            v-if="is_update === true" type="relief"
                            icon-pack="feather" icon="icon-refresh-ccw"
                    >
                        សម្អាត
                    </vs-button>
                </div>
            </vs-col>
        </vs-row>
        <vs-divider/>

        <ag-grid-vue class="ag-theme-material w-100 my-4 ag-grid-table"
                     :columnDefs="columnDefs"
                     :defaultColDef="defaultColDef"
                     rowSelection="multiple"
                     @grid-ready="onGridReady"
                     @selection-changed="onSelectionChanged"
                     :pagination="true"
                     :paginationPageSize="100"
                     :animateRows="true"
                     :rowData="modify_get_service">
        </ag-grid-vue>

        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col vs-type="flex" vs-justify="flex-end">
                <div class="flex btn-group">
                    <vs-button
                            @click="openAlert('danger')" class="mb-2" color="danger"
                            type="relief" icon-pack="feather" icon="icon-trash-2"
                            v-if="selected.length"
                    >
                        លុប
                    </vs-button>
                    <vs-button
                            @click="editService"
                            color="warning" class="mb-2" v-if="selected.length === 1"
                            type="relief" icon-pack="feather" icon="icon-edit"
                    >
                        កែប្រែ
                    </vs-button>
                    <vs-button
                            @click="$refs.UpgradeService.show(selected)"
                            color="primary" class="mb-2" v-if="selected.length"
                            type="relief" icon-pack="feather" icon="icon-edit"
                    >
                        Upgrade
                    </vs-button>
                </div>
            </vs-col>
        </vs-row>
        <upgrade-service ref="UpgradeService"></upgrade-service>
    </vx-card>
</template>
<script>
    import UpgradeService from './UpgradeService'
    import {AgGridVue} from "ag-grid-vue";
    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'
    export default {
        components: {
            UpgradeService, AgGridVue
        },
        name:'Service',
        data() {
            return {
                users: [],
                selected: [],
                gridApi: null,
                columnDefs: [
                    { headerName: 'ឆ្នាំសិក្សា', field: 'year', checkboxSelection: true, pinned: true },
                    { headerName: 'ប្រភេទ', field: 'type', },
                    { headerName: 'Service', field: 'service', },
                    { headerName: 'តម្លៃ​ ១ខែ', field: 'cost_one', },
                    { headerName: 'តម្លៃ​ ១ត្រីមាស', field: 'cost_three', },
                    { headerName: 'តម្លៃ ១ឆមាស', field: 'cost_six', },
                    { headerName: 'តម្លៃ​ ១ឆ្នាំ', field: 'cost_twelve', },
                    { headerName: 'អ្នកទទួលបន្ទុក', field: 'employee', },
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                },
                is_update: false,
                services: {
                    id         : '',
                    type       : '',
                    service    : '',
                    cost_one   : '',
                    cost_three : '',
                    cost_six   : '',
                    cost_twelve: '',
                    employee_id: '',
                }
            }
        },
        computed: {
            getYears(){
                return this.$store.getters.get_years;
            },
            isSmallerScreen() {
                return this.$store.state.windowWidth < 768
            },
            getService(){
                return this.$store.getters.get_services
            },
            modify_get_service(){
                return this.getService.map(function (x) {
                    return{
                        ...x,
                        employee: x.employees===null?'មិនបានដាក់ជូន':`${x.employees.kh_name}-${x.employees.en_name}`
                    }
                })
            },
            getEmployees(){
                return this.$store.getters.get_employees
            },
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            },
            storeService(){
                let self = this;
                let vm = this.services;
                if (vm.type === '' || vm.service === '' || vm.cost_one === '' || vm.cost_three === '' || vm.cost_six === '' || vm.cost_twelve === '' ){
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
                vm.year        = '';
                vm.type        = '';
                vm.service     = '';
                vm.cost_one    = '';
                vm.cost_three  = '';
                vm.cost_six    = '';
                vm.cost_twelve = '';
                vm.employee_id = '';
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
                this.services.id          = this.selected[0].id;
                this.services.year        = this.selected[0].year;
                this.services.type        = this.selected[0].type;
                this.services.service     = this.selected[0].service;
                this.services.cost_one    = this.selected[0].cost_one;
                this.services.cost_three  = this.selected[0].cost_three;
                this.services.cost_six    = this.selected[0].cost_six;
                this.services.cost_twelve = this.selected[0].cost_twelve;
                this.services.employee_id = this.selected[0].employee_id;
                this.is_update            = true;
                this.selected             = [];
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
