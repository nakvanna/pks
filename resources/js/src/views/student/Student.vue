<template>
    <vx-card no-shadow>
        <div class="vx-row">
            <div class="vx-col md:w-2/3 w-full">
                <div class="flex btn-group">
                    <vs-button @click="$refs.addStudent.show()" type="relief" icon-pack="feather" icon="icon-plus-square">
                        បន្ថែម
                    </vs-button>
                    <vs-button color="success" :disabled="selected.length<=0" @click="gridApi.deselectAll()" type="relief"
                               icon-pack="feather" icon="icon-check-square">Clear
                    </vs-button>
                    <vs-button v-if="selected.length===1"
                               @click="$refs.editStudent.show(); $refs.editStudent.editStudent(selected[0])" color="warning"
                               type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ
                    </vs-button>
                    <vs-button v-if="selected.length" @click="confirmToggle" color="danger" type="relief" icon-pack="feather"
                               icon="icon-circle">Toggle Status
                    </vs-button>
                    <vs-button v-if="selected.length===1" @click="confirmDelete" color="warning" type="relief" icon-pack="feather"
                               icon="icon-trash">លុប
                    </vs-button>

                    <vs-button v-if="selected.length" @click="$refs.addStudyInfo.show(selected)" type="relief"
                               icon-pack="feather" icon="icon-upload">ការសិក្សា
                    </vs-button>
                    <vs-button v-if="selected.length" @click="$refs.addServiceInfo.show(selected, true)" color="dark"
                               type="relief" icon-pack="feather" icon="icon-upload">សេវាកម្ម
                    </vs-button>
                </div>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <div class="flex btn-group justify-end">
                    <vs-button @click="$refs.printStdInfo.show(selected)" type="relief" icon-pack="feather" icon="icon-printer">
                        បោះពុម្ភ
                    </vs-button>
                    <vs-button color="success" @click="$refs.addStudent.show()" type="relief" icon-pack="feather" icon="icon-info">
                        បង្ហាញ
                    </vs-button>
                </div>
            </div>
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
        <ag-grid-vue style="height: 900px;" class="ag-theme-material w-100 my-4 ag-grid-table"
                     :columnDefs="columnDefs"
                     :defaultColDef="defaultColDef"
                     rowSelection="multiple"
                     @grid-ready="onGridReady"
                     @selection-changed="onSelectionChanged"
                     :pagination="true"
                     :paginationPageSize="150"
                     :animateRows="true"
                     :rowData="filter_all_students">
        </ag-grid-vue>
        <add-student ref="addStudent"></add-student>
        <edit-student @finished="selected = []" ref="editStudent"></edit-student>
        <add-study-info @finished="selected = [];gridApi.deselectAll()" ref="addStudyInfo"></add-study-info>
        <add-service-info ref="addServiceInfo"></add-service-info>
        <print-student-info ref="printStdInfo"/>
    </vx-card>
</template>

<script>
    //ag-grid
    import {AgGridVue} from "ag-grid-vue";
    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'
    import AddStudent from "./addStudent";
    import EditStudent from "./editStudent";
    import AddStudyInfo from "./addStudyInfo";
    import AddServiceInfo from "./addServiceInfo";
    import PrintStudentInfo from "./PrintStudentInfo";

    export default {
        name: "Student",
        components: {PrintStudentInfo, AddServiceInfo, AddStudyInfo, EditStudent, AddStudent, AgGridVue},
        data(){
            return{
                data:{
                    collection_id:null,
                    service_id:null,
                    year: null,
                },
                selected:[],
                gridApi: null,
                columnDefs: [
                    {headerName: 'ល.រ', field: 'id', pinned:true, checkboxSelection: true},
                    {headerName: 'ឈ្មោះ', field: 'name',},
                    {headerName: 'ឈ្មោះឡាតាំង', field: 'latin'},
                    {headerName: 'ថ្ងៃខែឆ្នាំកំណើត', field: 'dob'},
                    {headerName: 'ទំនាក់ទំនង', field: 'std_contact'},
                    {headerName: 'ទំនាក់ទំនងឪពុក', field: 'father_contact'},
                    {headerName: 'ទំនាក់ទំនងម្តាយ', field: 'mother_contact'},
                    {headerName: 'អាស័យដ្ឋានបច្ចុប្បន្ន', field: 'address'},
                    {headerName: 'ស្ថានភាព', field: 'status'},
                    {headerName: 'ថ្នាក់បណ្តុះអាសន្ន', field: 'temp_grade'},
                    {headerName: 'កាលបរិច្ឆេទ', field: 'created_at'},
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                }
            }
        },
        computed: {
            all_students() {
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
                    let filter_year_service = x.report_service_info.some(function (c) {
                        return self.data.year ? String(c.year) === String(self.data.year.name) : true
                    });
                    let filter_year_std_info = x.report_study_info.some(function (c) {
                        return self.data.year ? String(c.year) === String(self.data.year.name) : true
                    });
                    return (self.data.collection_id?filter_std_info:self.data.service_id?filter_service_info:self.data.year?filter_year_service || filter_year_std_info:true)
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
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            },
            //toggle
            confirmToggle(){
                this.$vs.dialog({
                    color:'warning',
                    title: 'Make active/inactive\'s status?',
                    text: 'ចុចពាក្យ Accept ដើម្បីយល់ព្រម!',
                    accept:this.deleteStudent
                })
            },
            async toggleStudent() {
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('toggleStudent', data.id);
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        time: 4000,
                        title: 'ប្រតិបត្តិការជោគជ័យ',
                        text: 'ទិន្នន័យបានលុប',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-center'
                    });
                    self.selected = [];
                    self.$vs.loading.close();
                })
            },
            //destroy
            confirmDelete(){
                this.$vs.dialog({
                    color:'danger',
                    title: 'លុបទិន្នន័យ?',
                    text: 'ចុចពាក្យ Accept ដើម្បីយល់ព្រម!',
                    accept:this.deleteStudent
                })
            },
            async deleteStudent() {
                let self = this;
                self.$vs.loading({
                    type:'material'
                });
                self.$store.dispatch('deleteStudent',self.selected[0].id).then(async function (data) {
                    if (data){
                        self.$vs.notify({
                            time: 4000,
                            title: 'ប្រតិបត្តិការជោគជ័យ',
                            text: 'ទិន្នន័យបានកែប្រែ',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            position: 'top-center'
                        });
                        await Promise.all([
                            self.$store.dispatch('fetchStudyInfos'),
                            self.$store.dispatch('fetchServiceInfos'),
                            self.$store.dispatch('fetchInvoices')
                        ]).then(function () {
                            self.$vs.loading.close();
                            self.selected = [];
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>