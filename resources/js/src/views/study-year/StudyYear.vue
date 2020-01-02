<template>
    <vx-card no-shadow>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col class="1/2" vs-type="flex" vs-justify="flex-start">
                <h5>ចំនួនដែលបានជ្រើសរើស: {{selected.length}}</h5>
            </vs-col>
            <vs-col class="1/2" vs-type="flex" vs-justify="flex-end">
                <div v-if="selected.length" class="flex btn-group">
                    <vs-button
                            @click="$refs.addStudyInfo.show(selected)"
                            type="relief"
                            icon-pack="feather"
                            icon="icon-plus-square"
                    >
                        ឡើងថ្នាក់
                    </vs-button>
                    <vs-button
                            @click="$refs.changeStudyInfo.show(selected)"
                            color="warning" type="relief"
                            icon-pack="feather" icon="icon-edit"
                    >
                        ប្តូរថ្នាក់
                    </vs-button>
                    <vs-button
                            color="danger"
                            type="relief"
                            icon-pack="feather" icon="icon-trash"
                            @click="confirmDelete"
                    >
                        លុប
                    </vs-button>
                    <!--<vs-button
                            color="danger"
                            type="relief"
                            icon-pack="feather" icon="icon-refresh-ccw"
                    >
                        ឈប់រៀន
                    </vs-button>-->
                    <vs-button
                            @click="$refs.PrintNotification.show(selected)"
                            type="relief"
                            icon-pack="feather"
                            icon="icon-printer"
                    >
                        បោះពុម្ព
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
                     :rowData="study_info_extract">
        </ag-grid-vue>
        <pre>{{selected}}</pre>
        <add-study-info @finished="selected=[]" ref="addStudyInfo"></add-study-info>
        <change-study-info @finished="selected=[]" ref="changeStudyInfo"></change-study-info>
        <print-notification @finished="selected=[]" ref="PrintNotification"></print-notification>
    </vx-card>
</template>

<script>
    import AddStudyInfo from "../student/addStudyInfo";
    import ChangeStudyInfo from "../student/changeStudyInfo";
    import {AgGridVue} from "ag-grid-vue";
    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss';
    import PrintNotification from './PrintNotification'
    export default {
        name: "StudyYear",
        components: {
            ChangeStudyInfo, PrintNotification,
            AddStudyInfo, AgGridVue
        },
        data() {
            return {
                selected: [],
                gridApi: null,
                columnDefs: [
                    {headerName: 'ឆ្នាំសិក្សា', field: 'year', checkboxSelection: true, pinned: true},
                    {headerName: 'ឈ្មោះសិស្ស', field: 'name',},
                    {headerName: 'ឈ្មោះឡាតាំ', field: 'latin',},
                    {headerName: 'ភេទ', field: 'gender',},
                    {headerName: 'ថ្ងៃខែឆ្នាំកំណើត', field: 'dob',},
                    {headerName: 'កំពុងរៀនថ្នាក់ទី', field: 'class_name',},
                    {headerName: 'ពេលសិក្សា', field: 'shift',},
                    {headerName: 'ថ្ងៃត្រូវបង់លុយ', field: 'date_pay',},
                    {
                        headerName: 'ចំនួនថ្ងៃនៅសល់',
                        field: 'day_left',
                        cellRenderer: function (params) {
                            let day_left;
                            if (params.data.day_left < 0) {
                                day_left = `<span class="text-danger"><b>${params.data.day_left}</b></span>`
                            } else if (params.data.day_left <= 5) {
                                day_left = `<span class="text-warning"><b>${params.data.day_left}</b></span>`
                            } else {
                                day_left = `<span class="text-success"><b>${params.data.day_left}</b></span>`
                            }
                            return day_left;
                        }
                    }
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                },
            }
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            },
            //destroy
            confirmDelete(){
                this.$vs.dialog({
                    color:'danger',
                    title: 'លុបទិន្នន័យ?',
                    text: 'ចុចពាក្យ Accept ដើម្បីយល់ព្រម!',
                    accept:this.deleteStudyYear
                })
            },
            async deleteStudyYear() {
                let self = this;
                const promises = self.selected.map(async function (data) {
                    if (parseInt(data.last_term)===0) {
                        await self.$store.dispatch('destroyStudyInfo', data.study_info_id);
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
        },
        computed: {
            getStudyInfos() {
                return this.$store.getters.get_study_infos
            },
            study_info_extract() {
                let self = this;
                return this.getStudyInfos.map(function (data) {
                    console.log(data);
                    var to_day = self.moment();
                    var day_pay = self.moment(data.date_pay);
                    return{
                        study_info_id   : data.id,
                        id         : data.students.id,
                        year       : data.year,
                        student_id : data.students.id,
                        name       : data.students.name,
                        latin      : data.students.latin,
                        gender     : data.students.gender,
                        dob        : data.students.dob,
                        class_name : data.study_infos.level + data.study_infos.class_name,
                        shift      : data.study_infos.shift,
                        date_pay   : data.date_pay,
                        last_date_pay   : data.last_date_pay,
                        last_term       : data.last_term,
                        to_class        : data.to_class,
                        employees       : data.study_infos.employees,
                        group_section   : data.study_infos.group_section,
                        cost_one        : data.study_infos.cost_one,
                        cost_three      : data.study_infos.cost_three,
                        cost_six        : data.study_infos.cost_six,
                        cost_twelve     : data.study_infos.cost_twelve,
                        service_infos   : [],
                        day_left        : day_pay.diff(to_day, 'days'),
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>