<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button @click="$refs.addStudent.show()" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
            <vs-button color="success" :disabled="selected.length<=0" @click="gridApi.deselectAll()" type="relief" icon-pack="feather" icon="icon-check-square">Clear</vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editStudent.show(); $refs.editStudent.editStudent(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
            <vs-button v-if="selected.length" @click="toggleStudent" color="danger" type="relief" icon-pack="feather" icon="icon-circle">Toggle Status</vs-button>
            <vs-button v-if="selected.length" @click="$refs.addStudyInfo.show(selected)" type="relief" icon-pack="feather" icon="icon-upload">ការសិក្សា</vs-button>
            <vs-button v-if="selected.length" @click="$refs.addServiceInfo.show(selected, true)" color="dark" type="relief" icon-pack="feather" icon="icon-upload">សេវាកម្ម</vs-button>
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
                     :rowData="all_students">
        </ag-grid-vue>
        <add-student ref="addStudent"></add-student>
        <edit-student @finished="selected = []" ref="editStudent"></edit-student>
        <add-study-info @finished="selected = [];gridApi.deselectAll()" ref="addStudyInfo"></add-study-info>
        <add-service-info ref="addServiceInfo"></add-service-info>
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
    export default {
        name: "Student",
        components: {AddServiceInfo, AddStudyInfo, EditStudent, AddStudent,AgGridVue},
        data(){
            return{
                selected:[],
                gridApi: null,
                columnDefs: [
                    {headerName: 'ល.រ', field: 'id', checkboxSelection: true},
                    {headerName: 'ឈ្មោះ', field: 'name',},
                    {headerName: 'ឈ្មោះឡាតាំង', field: 'latin'},
                    {headerName: 'ថ្ងៃខែឆ្នាំកំណើត', field: 'dob'},
                    {headerName: 'ទំនាក់ទំនង', field: 'std_contact'},
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
        computed:{
            all_students(){
                return this.$store.getters.all_students
            }
        },
        async created(){
            if (!this.all_students.length){
                await this.fetchStudent();
            }
        },
        methods:{
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            },
            //fetch
            async fetchStudent(){
              await this.$store.dispatch('fetchStudent')
            },
            //destroy
            async toggleStudent(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('toggleStudent',data.id);
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
        }
    }
</script>

<style scoped>

</style>