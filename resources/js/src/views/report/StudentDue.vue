<template>
    <div>
        <ag-grid-vue class="ag-theme-material w-100 my-4 ag-grid-table"
                     :columnDefs="columnDefs"
                     :defaultColDef="defaultColDef"
                     rowSelection="multiple"
                     @grid-ready="onGridReady"
                     @selection-changed="onSelectionChanged"
                     :pagination="true"
                     :paginationPageSize="100"
                     :animateRows="true"
                     :rowData="all_student_due">
        </ag-grid-vue>
    </div>
</template>

<script>
    import { AgGridVue } from "ag-grid-vue"

    export default {
        components: {
            AgGridVue
        },
        data(){
            return {
                columnDefs: [
                    {headerName: 'លេខសម្គាល់', field: 'id', checkboxSelection: true, pinned: true},
                    {headerName: 'ឈ្មោះសិស្ស', field: 'name',},
                    {headerName: 'ឈ្មោះឡាតាំ', field: 'latin',},
                    {headerName: 'ភេទ', field: 'gender',},
                    {headerName: 'ថ្ងៃខែឆ្នាំកំណើត', field: 'dob',},
                    // {headerName: 'នៅជំពាក់សាលា', field: 'balance',},
                    {
                        headerName: 'នៅជំពាក់សាលា',
                        field: 'balance',
                        cellRenderer: function (params) {
                            return `<span><b>$${(params.data.balance)*(-1)}</b></span>`;
                        },
                        filter: "agNumberColumnFilter"
                    }
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                },
            }
        },
        computed: {
            all_student_due() {
                return this.$store.getters.all_student_dues
            },
        },
        async created() {
            await this.$store.dispatch('fetchStudentDue');
            console.log(this.all_student_due)
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            },
        },
    }

</script>
<style lang="scss">
    @import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'
</style>