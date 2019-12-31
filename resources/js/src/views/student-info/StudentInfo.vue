<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button type="relief" icon-pack="feather" icon="icon-plus-square">Add</vs-button>
            <vs-button :disabled="selected.length!==1" color="warning" type="relief" icon-pack="feather" icon="icon-edit">Edit</vs-button>
            <vs-button :disabled="selected.length<=0" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">Delete</vs-button>
            <vs-button :disabled="selected.length<=0" @click="gridApi.deselectAll()" type="relief" icon-pack="feather" icon="icon-check-square">Clear</vs-button>
            <vs-button :disabled="selected.length<=0" color="success" @click="gridApi.exportDataAsCsv({onlySelected: true})" type="relief" icon-pack="feather" icon="icon-download-cloud">Export</vs-button>
        </div>
        <div class="vx-row mt-base">
            <div class="vx-col md:w-1/3 w-full">
                <v-select v-model="data.year"
                          placeholder="ជ្រើសរើស" label="name" class="w-full" :options="getYears"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <v-select v-model="data.collection_id"
                          placeholder="ជ្រើសរើស" label="item_data"
                          :options="filteredCollection"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <v-select v-model="data.service_id"
                          placeholder="ជ្រើសរើស" label="item_data"
                          :options="filteredServices"/>
            </div>
        </div>
        <ag-grid-vue class="ag-theme-material w-100 my-4 ag-grid-table"
                     :columnDefs="columnDefs"
                     :defaultColDef="defaultColDef"
                     rowSelection="multiple"
                     @grid-ready="onGridReady"
                     @selection-changed="onSelectionChanged"
                     :pagination="true"
                     :paginationPageSize="100"
                     :animateRows="true"
                     :rowData="filter_all_students">
        </ag-grid-vue>
    </vx-card>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'

    export default {
        name: "StudentInfo",
        components:{
            AgGridVue
        },
        data(){
            return{
                data:{
                    collection_id:null,
                    service_id:null,
                    year: null,
                },
                selected: [],
                gridApi: null,
                columnDefs: [
                    {headerName: 'ល.រ', field: 'id', pinned:true, checkboxSelection: true},
                    {headerName: 'ឈ្មោះ', field: 'name',},
                    {headerName: 'ឈ្មោះឡាតាំង', field: 'latin'},
                    {headerName: 'ថ្ងៃខែឆ្នាំកំណើត', field: 'dob'},
                    {headerName: 'ទំនាក់ទំនង', field: 'std_contact'},
                    {headerName: 'អាស័យដ្ឋានបច្ចុប្បន្ន', field: 'address'},
                    {headerName: 'ស្ថានភាព', field: 'status'},
                    {headerName: 'កាលបរិច្ឆេទ', field: 'created_at'},
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                },
            }
        },
        methods:{
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            }
        },
        computed:{
            all_students(){
                return this.$store.getters.all_students
            },
            filter_all_students(){
                let self = this;
                return self.all_students.filter(function (x) {
                    let filter_std_info = x.report_study_info.some(function (c) {
                        return self.data.collection_id ? c.collection_id === self.data.collection_id.id : true
                    });
                    let filter_service_info = x.report_service_info.some(function (c) {
                        return self.data.service_id ? c.service_id === self.data.service_id.id : true
                    });
                    return self.data.collection_id?filter_std_info:self.data.service_id?filter_service_info:true
                });
            },
            getYears() {
                return this.$store.getters.get_years;
            },
            getServices(){
                return this.$store.getters.get_services
            },
            getCollection() {
                return this.$store.getters.get_collections
            },
            filteredServices: function () {
                let self = this;
                let data = self.getServices.filter(function (x) {
                    return self.data.year ? x.year === self.data.year.name : x.year === ''
                });
                return data.map(function (x) {
                    return {
                        id: x.id,
                        item_data: `(${x.year})-${x.type}-${x.service}`
                    };
                });
            },
            filteredCollection: function () {
                let self = this;
                let data = self.getCollection.filter(function (x) {
                    return self.data.year ? x.year === self.data.year.name : x.year === ''
                });
                return data.map(function (x) {
                    return {
                        id: x.id,
                        item_data: `(${x.year})-${x.group_section}-${x.section}-${x.level}${x.class_name}`
                    };
                });
            }
        },
    }
</script>

<style scoped>

</style>