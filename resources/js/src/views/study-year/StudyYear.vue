<template>
    <vx-card no-shadow>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col class="1/2" vs-type="flex" vs-justify="flex-start">
                <h5>ចំនួនដែលបានជ្រើសរើស: {{selected.length}}</h5>
            </vs-col>
            <vs-col class="1/2 btn-group" vs-type="flex"  vs-justify="flex-end">
                    <vs-button
                            v-if="selected.length"
                            @click="$refs.addStudyInfo.show(selected)"
                            type="relief"
                            icon-pack="feather"
                            icon="icon-plus-square"
                    >
                        ឡើងថ្នាក់
                    </vs-button>
                    <vs-button
                            v-if="selected.length"
                            @click="$refs.changeStudyInfo.show(selected)"
                            color="warning" type="relief"
                            icon-pack="feather" icon="icon-edit"
                    >
                        ប្តូរថ្នាក់
                    </vs-button>
                    <vs-button
                            v-if="selected.length"
                            color="danger"
                            type="relief"
                            icon-pack="feather" icon="icon-trash"
                            @click="confirmDelete"
                    >
                        លុប
                    </vs-button>
                    <vs-button
                            v-if="selected.length"
                            @click="$refs.PrintNotification.show(selected)"
                            type="relief"
                            icon-pack="feather"
                            icon="icon-printer"
                    >
                        បោះពុម្ព
                    </vs-button>
                <vs-button
                        v-if="selected.length === 1"
                        @click="activePrompt = true"
                        color="danger"
                        type="relief"
                        icon-pack="feather" icon="icon-refresh-ccw"
                >
                    ឈប់រៀន
                </vs-button>
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
        <add-study-info @finished="selected=[]" ref="addStudyInfo"></add-study-info>
        <change-study-info @finished="selected=[]" ref="changeStudyInfo"></change-study-info>
        <print-notification @finished="selected=[]" ref="PrintNotification"></print-notification>
        <vs-prompt
                @cancel="note_unused=''"
                @accept="acceptAlert"
                @close="close"
                :active.sync="activePrompt">
            <div class="con-exemple-prompt">
                <span>មូលហេតុនៃការឈប់រៀន</span>
                <vs-input placeholder="មូលហេតុ" vs-placeholder="Code" v-model="note_unused" class="mt-3 w-full" />
            </div>
        </vs-prompt>

        <sweet-modal ref="add_payment" title="ការបង់លុយ" :blocking="true" :width="!mobilecheck()?'100%':''">
            <div class="vx-row">
                <!--<div class="vx-col md:w-5/6">
                    <v-select
                            class="w-full"
                            :clearable="false"
                            v-model="students"
                            placeholder="ជ្រើសរើសឈ្មោះសិស្ស"
                            :options="student_options"
                            label="label_data"
                            @input="passStudentInfo"
                    ></v-select>
                </div>-->
                <div class="vx-col md:w-1/6">
                    <flat-pickr class="w-full"  v-model="today_date" placeholder="ថ្ងៃបង់លុយ" />
                </div>
            </div>
            <div class="vx-row mt-base mb-base">
                <div class="vx-col md:w-1/5 w-full">
                    <!--<img alt="" class="shadow-md" height="150" :src="students.photo"/>-->
                </div>
                <!--<div class="vx-col md:w-2/5 w-full" v-show="false">
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" placeholder="ភេទ" v-model="students.gender" disabled />
                        </div>
                        <div class="vx-col w-full mt-base">
                            <vs-input class="w-full" placeholder="ថ្ងៃខែឆ្នាំកំណើត" v-model="students.dob" disabled />
                        </div>
                    </div>
                </div>-->
            </div>
            <h3 class="mb-10">បញ្ចុះតម្លៃ {{default_discount}}%</h3>
            <vs-table :data="new_selected">

                <template slot="thead">
                    <vs-th sort-key="year">ឆ្នាំសិក្សា</vs-th>
                    <vs-th sort-key="name">ប្រភេទត្រូវបង់</vs-th>
                    <vs-th>រយៈពេលបង់</vs-th>
                    <vs-th>តម្លៃ</vs-th>
                    <vs-th sort-key="date_pay">ថ្ងៃខែឆ្នាំត្រូវបង់</vs-th>
                    <vs-th>ថ្ងៃខែឆ្នាំត្រូវបង់បន្ទាប់</vs-th>
                    <vs-th>គ្រប់ឬនៅ</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :data="tr" :key="index" v-for="(tr, index) in data">

                        <vs-td :data="tr.year">
                            {{ tr.year }}
                        </vs-td>

                        <vs-td :data="tr.name">
                            <span><b>{{ tr.name }}</b></span>
                        </vs-td>

                        <!--Term selected-->
                        <vs-td>
                            {{tr.last_term}} ថ្ងៃ
                        </vs-td>
                        <!--<vs-td>
                            <vs-select
                                    class="w-full"
                                    autocomplete
                                    placeholder="ជ្រើសរើសរយៈពេល"
                                    v-model="tr.last_term"
                            >
                                <vs-select-item value="1" text="1"/>
                                <vs-select-item value="3" text="3"/>
                                <vs-select-item value="6" text="6"/>
                                <vs-select-item value="12" text="12"/>
                            </vs-select>
                        </vs-td>-->
                        <!--Term selected-->

                        <!--Cost term-->
                        <vs-td>
                            {{$formatter.format(calculate_cost(tr.cost_one, tr.cost_three, tr.cost_six, tr.cost_twelve, tr.last_term, index))}}
                        </vs-td>
                        <!--Cost term-->
                        <vs-td v-if="tr.date_pay !== null">
                            <flat-pickr class="w-full" :value="tr.date_pay" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង"/>
                        </vs-td>
                        <vs-td v-else >
                            <flat-pickr class="w-full" v-model="tr.date_pay"  placeholder="ថ្ងៃត្រូវបង់លុយដំបូង"/>
                        </vs-td>

                        <vs-td>
                            <flat-pickr class="w-full" v-model="tr.finish_date" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង" disabled/>
                        </vs-td>

                        <vs-td>
                            <vs-button @click="removeItem(index)" radius color="danger" type="relief" icon-pack="feather" icon="icon-trash"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <div class="centerx vx-row mt-10">
                <div class="vx-col md:w-1/2">
                    <h3><span>តម្លៃសរុប: <b>{{$formatter.format(this.total_price)}} <b v-if="after_true === true">=> {{$formatter.format(parseFloat(after_discount))}}</b v-if="after_true === true"></b></span></h3>
                    <div class="flex">
                        <div class="flex mt-5">
                            <vs-input-number @input="percentDiscount" v-model="discount" label="បញ្ចុះភាគរយ %:" min="0" max="100" icon-inc="expand_less" icon-dec="expand_more"/>
                        </div>
                        <div class="flex mt-5">
                            <vs-input-number @input="cashDiscount" v-model="cash_discount" label="បញ្ចុះជាសាច់ប្រាក់ $:" min="0" :max="total_price" icon-inc="expand_less" icon-dec="expand_more"/>
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/2">
                    <vs-divider position="left-center">ទូទាត់សាច់ប្រាក់</vs-divider>
                    <div class="flex">
                        <vs-input-number label="សាច់ប្រាក់ទទូល $:" v-model="rec_balance" icon-inc="expand_less" icon-dec="expand_more"/>
                    </div>
                    <div class="flex">
                        <div class="flex ">
                            <vs-input-number label="សាច់ប្រាក់ជំពាក់ $:" v-model="dueBalance" disabled icon-inc="expand_less" icon-dec="expand_more"/>
                        </div>
                        <div class="flex ">
                            <vs-input-number label="សាច់ប្រាក់អាប់ $:" v-model="returnBalance" disabled icon-inc="expand_less" icon-dec="expand_more"/>
                        </div>
                    </div>
                </div>
            </div>
            <vs-button @click="storeInvoice" slot="button" v-if="selected.length">បង់លុយ</vs-button>
        </sweet-modal>
        <print-invoice ref="PrintInvoice"></print-invoice>
    </vx-card>
</template>

<script>
    import AddStudyInfo from "../student/addStudyInfo";
    import ChangeStudyInfo from "../student/changeStudyInfo";
    import {AgGridVue} from "ag-grid-vue";
    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss';
    import PrintNotification from './PrintNotification'
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.min.css';
    import PrintInvoice from '.././payment/PrintInvoice';
    export default {
        name: "StudyYear",
        components: {
            ChangeStudyInfo, PrintNotification,
            AddStudyInfo, AgGridVue, flatPickr, PrintInvoice
        },
        data() {
            return {
                after_true: false,
                total_price: 0,
                new_selected: [],
                today_date: this.moment().format('YYYY-MM-DD'),
                discount: 0,
                after_discount: 0,
                cash_discount: 0,
                rec_balance: 0,
                due_balance: 0,
                ret_balance: 0,
                default_discount: 0,
                note_unused: '',
                date_unused: this.moment().format('YYYY-MM-DD'),
                activePrompt:false,
                selected: [],
                gridApi: null,
                columnDefs: [
                    {headerName: 'ឆ្នាំសិក្សា', field: 'year', checkboxSelection: true, pinned: true},
                    {headerName: 'ឈ្មោះសិស្ស', field: 'name',},
                    {headerName: 'ឈ្មោះឡាតាំង', field: 'latin',},
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
                        },
                        filter: "agNumberColumnFilter"
                    },
                    {headerName: 'ស្ថានភាព', field: 'is_used',},
                    {headerName: 'ស្ថានភាពប្តូរថ្នាក់', field: 'to_class',},
                    {headerName: 'មូលហេតុឈប់រៀន', field: 'note_unused',},
                    {headerName: 'ថ្ងៃឈប់រៀន', field: 'date_unused',},
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                },
            }
        },
        methods: {
            calculate_cost(c1, c3, c6, c12, duration){
                let price = 0;
                let p1 = c1 / 30;
                let p3 = c3 / 90;
                let p6 = c6 / 182;
                let p12 = c12 / 365;
                let num = parseInt(duration) / 30;
                if (num < 0){
                    price = 0;
                } else {
                    if (num < 3){
                        price = p1 * duration;
                    } else if (num < 6) {
                        price = p3 * duration;
                    } else if (num < 12) {
                        price = p6 * duration
                    } else {
                        price = p12 * duration
                    }
                }
                this.total_price = price;
                return price.toFixed(2);
            },
            preFixZero(number, length){
                var str = '' + number;
                while (str.length < length) {
                    str = '0' + str;
                }
                return str;
            },
            // storeInvoice(){},
            async storeInvoice(){
                let self = this;
                let vm = this.selected[0];
                console.log(vm);
                var after_discount = this.total_price;
                if(self.after_true === true){
                    after_discount = self.after_discount;
                }
                self.$vs.loading({
                    type:'material',
                });
                await self.$store.dispatch('updateIncrementDue', {id: vm.student_id, due: self.due_balance});
                await self.$store.dispatch('storeInvoice', {
                    student_id: vm.student_id, invoice_date : self.date_unused, balance : self.total_price, after_discount : after_discount,
                    discount : self.discount, payment_status : false, due_balance: self.due_balance,
                    receive_balance: self.rec_balance, return_balance: self.ret_balance
                }).then(function (data_res) {
                    if (data_res){
                        var id = data_res.id;
                        var new_all_infos = []; //បង្កើតសម្រាប់បោះតម្លៃទៅ Print
                        // self.selected.map(async function (data) {
                            new_all_infos.push({
                                invoice_id : id,
                                item : vm.class_name,
                                term : parseInt(vm.day_left) * (-1),
                                balance : self.after_true === true ? self.after_discount : self.total_price,
                                date_pay : vm.date_pay,
                                next_date_pay : self.date_unused,
                                emp_name: vm.employee_name === null ? '---' : vm.employee_name,
                            });
                        self.$store.dispatch('storeInvoiceDetail', {
                                invoice_id : id,
                                item : vm.class_name,
                                term : parseInt(vm.day_left) * (-1),
                                balance : self.after_true === true ? self.after_discount : self.total_price,
                                date_pay : vm.date_pay,
                                next_date_pay : self.date_unused,
                                emp_name: vm.employees === null ? 'គ្មានអ្នកទទួលបន្ទុក' : vm.study_infos.employees.kh_name
                            }).then();
                        // });
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.$vs.loading.close();
                        self.$refs.PrintInvoice.show({
                                id: self.preFixZero(new_all_infos[0].invoice_id, 7),
                                name: vm.name,
                                latin: vm.latin,
                                gender: vm.gender,
                                total: self.total_price,
                                after: self.after_true === true ? self.after_discount : self.total_price,
                                discount: self.discount,
                                due_balance: self.due_balance,
                                receive_balance: self.rec_balance
                            },
                            new_all_infos
                        );
                    }
                });
                this.discount = 0;
                this.cash_discount = 0;
                this.selected = [];

            },
            cashDiscount(){
                this.after_true = true;
                this.discount = parseFloat(this.cash_discount * 100 / this.total_price).toFixed(2);
                this.after_discount = this.total_price - this.cash_discount;
                console.log(this.after_discount)
            },
            percentDiscount(){
                this.after_true = true;
                this.cash_discount = parseFloat(this.total_price * this.discount / 100).toFixed(2);
                this.after_discount = this.total_price - this.cash_discount;
                console.log(this.after_discount)
            },

            acceptAlert(){
                if (this.note_unused === ''){
                    this.$vs.notify({
                        color:'danger',
                        title:'ប្រតិបត្តិការណ៍មិនដំណើរការ',
                        position:'top-center',
                        text:'សូមបញ្ចាក់មូលហេតុ!'
                    })
                } else {
                    console.log(this.selected);
                    var vm = this.selected[0];
                    var date_now = this.moment();
                    var date_pay = this.moment(vm.date_pay);
                    var drt = null;
                    drt = date_now.diff(date_pay, 'days');
                    this.new_selected = [];
                    this.after_discount = 0;
                    this.total_price = 0;
                    this.after_true = false;
                    if (vm.date_pay > this.date_unused){
                        this.new_selected.push({
                            year: vm.year,
                            name: vm.class_name,
                            student_id: vm.student_id,
                            collection_id: vm.collection_id,
                            date_pay: vm.date_unused,
                            last_date_pay: vm.last_date_pay,
                            last_term: drt,
                            is_used: vm.is_used,
                            finish_date: this.date_unused,
                            cost_one: vm.cost_one,
                            cost_three: vm.cost_three,
                            cost_six: vm.cost_six,
                            cost_twelve: vm.cost_twelve,
                            balance: vm.balance,
                            next_date_pay: vm.next_date_pay,
                        });
                    } else {
                        this.new_selected.push({
                            year: vm.year,
                            name: vm.class_name,
                            student_id: vm.student_id,
                            collection_id: vm.collection_id,
                            date_pay: vm.date_pay,
                            last_date_pay: vm.last_date_pay,
                            last_term: drt,
                            is_used: vm.is_used,
                            finish_date: this.date_unused,
                            cost_one: vm.cost_one,
                            cost_three: vm.cost_three,
                            cost_six: vm.cost_six,
                            cost_twelve: vm.cost_twelve,
                            balance: vm.balance,
                            next_date_pay: vm.next_date_pay,
                        });
                    }
                    this.update_unused();
                }
            },
            close(){
                this.$vs.notify({
                    color:'danger',
                    title:'ប្រតិបត្តិការណ៍មិនដំណើរការ',
                    text:'You close a dialog!',
                    position:'top-center'
                })
            },
            async update_unused(){
                let self = this;
                self.$vs.notify({
                    title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                    text:'ទិន្នន័យត្រូវបានកែប្រែ!',
                    color:'success',
                    iconPack: 'feather',
                    icon:'icon-check',
                    position:'top-center'
                });
                await this.$store.dispatch('updateStudyInfoUnused', {
                    id: this.selected[0].study_info_id,
                    note_unused: this.note_unused,
                    date_unused: this.date_unused,
                    is_used: false
                }).then((res) => {
                    if (res === true){
                        this.note_unused = '';
                        this.$refs.add_payment.open();
                    }
                })
            },
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
            returnBalance(){
                var return_bal = 0;
                if(this.after_discount <= this.rec_balance){
                    return_bal = this.rec_balance - this.after_discount;
                }
                this.ret_balance = return_bal;
                return return_bal.toFixed(2);
            },
            dueBalance(){
                var return_bal = 0;
                if(this.after_discount >= this.rec_balance){
                    if ( this.after_true === true) {
                        return_bal = this.rec_balance - this.after_discount;
                    } else {
                        return_bal = this.total_price;
                    }
                }
                this.due_balance = return_bal;
                return return_bal.toFixed(2);
            },
            getStudyInfos() {
                return this.$store.getters.get_study_infos
            },
            study_info_extract() {
                let self = this;
                return this.getStudyInfos.map(function (data) {
                    var to_day = self.moment();
                    var day_pay = self.moment(data.date_pay);
                    var last_date = self.moment(data.last_date_pay);
                    return {
                        study_info_id : data.id,
                        id            : data.students.id,
                        year          : data.year,
                        student_id    : data.students.id,
                        name          : data.students.name,
                        latin         : data.students.latin,
                        gender        : data.students.gender,
                        dob           : data.students.dob,
                        class_name    : data.study_infos.level + data.study_infos.class_name,
                        shift         : data.study_infos.shift,
                        is_used       : data.is_used === true ? 'នៅរៀន' : 'ឈប់រៀន',
                        note_unused   : data.note_unused === null ? '------': data.note_unused,
                        date_unused   : data.date_unused  === null ? '--/--/--': data.date_unused,
                        date_pay      : data.date_pay,
                        last_date_pay : data.last_date_pay,
                        last_term     : data.last_term,
                        to_class      : data.to_class === null ? 'ថ្នាក់ដដែល' : 'បានប្តូរ',
                        employees     : data.study_infos.employees,
                        group_section : data.study_infos.group_section,
                        cost_one      : data.study_infos.cost_one,
                        cost_three    : data.study_infos.cost_three,
                        cost_six      : data.study_infos.cost_six,
                        cost_twelve   : data.study_infos.cost_twelve,
                        service_infos : [],
                        day_left      : last_date <= to_day ?  'គ្រប់' : day_pay.diff(to_day, 'days'),
                        balance       : data.students.balance,
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>