<template>
    <vx-card no-shadow>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col class="1/2" vs-type="flex" vs-justify="flex-start">
                <h5>ចំនួនដែលបានជ្រើសរើស: {{selected.length}}</h5>
            </vs-col>
            <vs-col class="1/2" vs-type="flex" vs-justify="flex-end">
                <div v-if="selected.length" class="flex btn-group">
                    <vs-button
                            @click="$refs.addServiceInfo.show(selected, false)"
                            type="relief"
                            icon-pack="feather"
                            icon="icon-plus-square"
                    >
                        បន្ថែមសេវាកម្ម
                    </vs-button>
                    <vs-button
                            @click="$modal.show('stopService')"
                            color="warning" type="relief"
                            icon-pack="feather" icon="icon-refresh-ccw"
                    >
                        ផ្ដាច់សេវាកម្ម
                    </vs-button>
                    <vs-button
                            color="danger"
                            type="relief"
                            icon-pack="feather" icon="icon-trash"
                            @click="confirmDelete"
                    >
                        លុប
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
                     :rowData="service_info_extract">
        </ag-grid-vue>

        <add-service-info ref="addServiceInfo"></add-service-info>

        <modal width="500" height="auto" :scrollable="true" :pivotY="0.2" :adaptive="true" :clickToClose="false" name="stopService">
            <div class="flex justify-end">
                <i @click="$modal.hide('stopService')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
            </div>
            <h4 class="ml-2"><u> ផ្ដាច់សេវាកម្ម</u></h4>
            <vx-card no-shadow>
                    <div class="vx-col flex">
                        <flat-pickr class="w-full" v-model="new_last_date_pay" placeholder="ថ្ងៃត្រូវបង់ផ្ដាច់" name="date-pay" v-validate="'required'"/>
                    </div>
                <vs-divider />
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button icon="icon-save" @click="updateServiceInfo" icon-pack="feather" type="relief">ផ្ដាច់សេវាកម្ម</vs-button>
                </div>
            </vx-card>
        </modal>
    </vx-card>
</template>

<script>
    import AddServiceInfo from "../student/addServiceInfo";
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    import {AgGridVue} from "ag-grid-vue";
    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'
    export default {
        name: "ServiceInfo",
        components: {
            AddServiceInfo, flatPickr, AgGridVue
        },
        data() {
            return {
                users: [],
                selected: [],
                gridApi: null,
                columnDefs: [
                    { headerName: 'ឆ្នាំសិក្សា', field: 'year', checkboxSelection: true, pinned: true },
                    { headerName: 'ឈ្មោះសិស្ស', field: 'name', },
                    { headerName: 'ឈ្មោះឡាតាំ', field: 'latin', },
                    { headerName: 'ភេទ', field: 'gender', },
                    { headerName: 'ថ្ងៃខែឆ្នាំកំណើត', field: 'dob', },
                    { headerName: 'កំពុងប្រើប្រាស់សេវាកម្ម', field: 'service', },
                    { headerName: 'ថ្ងៃត្រូវបង់លុយ', field: 'date_pay', },
                    {
                        headerName: 'ស្ថានភាព',
                        field: 'is_used',
                        cellRenderer:function (params) {
                            var is_used;
                            if(params.data.is_used === 'នៅប្រើ'){
                                is_used = `<span class="text-success">${params.data.is_used }</span>`
                            } else {
                                is_used = `<span class="text-danger">${params.data.is_used }</span>`
                            }
                            return is_used;
                        }
                    }
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                },
                new_last_date_pay: null,
            }
        },
        computed: {
            getServiceInfos(){
                return this.$store.getters.get_service_infos
            },
            service_info_extract() {
                let self = this;
                return this.getServiceInfos.map(function (x) {
                    if (self.getServiceInfos.length) {
                        return {
                            id         : x.id,
                            year       : x.year,
                            student_id : x.students.id,
                            name       : x.students.name,
                            latin      : x.students.latin,
                            gender     : x.students.gender,
                            dob        : x.students.dob,
                            service    : x.services.type+'-'+ x.services.service,
                            date_pay   : x.date_pay,
                            last_term  : x.last_term,
                            last_date_pay  : x.last_date_pay,
                            is_used    : x.is_used === true? 'នៅប្រើ' : 'បានផ្អាក' ,
                        }
                    } else {
                        return true
                    }
                });
            }
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            },
            async updateServiceInfo(){
                if(this.new_last_date_pay !== null){
                    let self = this;
                    self.$vs.loading();
                    const promises = self.selected.map(async function (data) {
                        data.last_date_pay = self.new_last_date_pay;
                        data.is_used = false;
                        await self.$store.dispatch('updateServiceInfo', data);
                    });
                    await Promise.all(promises).then(function () {
                        self.$vs.notify({
                            time: 4000,
                            title: 'ប្រតិបត្តិការជោគជ័យ',
                            text: 'ទិន្នន័យបានកែប្រែ',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            position: 'top-center'
                        });
                        self.selected = [];
                        self.$vs.loading.close();
                    })
                }
            },
            //destroy
            confirmDelete(){
                this.$vs.dialog({
                    color:'danger',
                    title: 'លុបទិន្នន័យ?',
                    text: 'ចុចពាក្យ Accept ដើម្បីយល់ព្រម!',
                    accept:this.destroyServiceInfo
                })
            },
            async destroyServiceInfo() {
                let self = this;
                const promises = self.selected.map(async function (data) {
                    if (parseInt(data.last_term)===0) {
                        await self.$store.dispatch('destroyServiceInfo', data.id);
                    }
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                        text:'ទិន្នន័យត្រូវបានលុប!',
                        color:'success',
                        iconPack: 'feather',
                        icon:'icon-check',
                        position:'top-center'
                    });
                    self.selected = [];
                    self.$vs.loading.close()
                });
            }
        }
    }
</script>

<style scoped>

</style>