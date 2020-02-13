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
            <vs-table :data="selected">

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
                            <span v-if="moment(tr.date_pay).format('DD') === '01'" style="color: #01579B"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '02'" style="color: #E91E63"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '03'" style="color: #880E4F"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '04'" style="color: #AA00FF"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '05'" style="color: #3F51B5"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '06'" style="color: #26C6DA"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '07'" style="color: #80D8FF"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '08'" style="color: #C0CA33"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '09'" style="color: #689F38"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '10'" style="color: #2E7D32"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '11'" style="color: #FF9800"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '12'" style="color: #FFEE58"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '13'" style="color: #4E342E"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '14'" style="color: #FFFF00"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '15'" style="color: #64DD17"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '16'" style="color: #1B5E20"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '17'" style="color: #66BB6A"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '18'" style="color: #00E5FF"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '19'" style="color: #006064"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '20'" style="color: #81D4FA"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '21'" style="color: #26A69A"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '22'" style="color: #B388FF"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '23'" style="color: #FF4081"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '24'" style="color: #B71C1C"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '25'" style="color: #009688"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '26'" style="color: #00BCD4"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '27'" style="color: #1DE9B6"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '28'" style="color: #2E7D32"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '29'" style="color: #C6FF00"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '30'" style="color: #64DD17"><b>{{ tr.name }}</b></span>
                            <span v-else-if="moment(tr.date_pay).format('DD') === '31'" style="color: #795548"><b>{{ tr.name }}</b></span>
                            <span v-else style="color: #6A1B9A"><b>{{ tr.name }}</b></span>
                        </vs-td>

                        <!--Term selected-->
                        <vs-td>
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
                        </vs-td>
                        <!--Term selected-->

                        <!--Cost term-->
                        <vs-td v-if="tr.last_term === 1 || tr.last_term === '1' ">
                            {{getCostOne(tr.cost_one, tr.date_pay, index)}}
                        </vs-td>
                        <vs-td v-if="tr.last_term === 3 || tr.last_term === '3' ">
                            {{getCostThree(tr.cost_three, tr.date_pay, index)}}
                        </vs-td>
                        <vs-td v-if="tr.last_term === 6 || tr.last_term === '6' ">
                            {{getCostSix(tr.cost_six, tr.date_pay, index)}}
                        </vs-td>
                        <vs-td v-if="tr.last_term === 12 || tr.last_term === '12' ">
                            {{getCostTwelve(tr.cost_twelve, tr.date_pay, index)}}
                        </vs-td>
                        <vs-td v-if="tr.last_term === 0">
                            0
                        </vs-td>
                        <!--Cost term-->

                        <vs-td v-if="tr.date_pay !== null">
                            <flat-pickr class="w-full" :value="tr.date_pay" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង"/>
                        </vs-td>
                        <vs-td v-else >
                            <flat-pickr class="w-full" v-model="tr.date_pay"  placeholder="ថ្ងៃត្រូវបង់លុយដំបូង"/>
                        </vs-td>

                        <vs-td>
                            <flat-pickr class="w-full" v-model="tr.next_date_pay" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង" disabled/>
                        </vs-td>

                        <vs-td>
                            <vs-button @click="removeItem(index)" radius color="danger" type="relief" icon-pack="feather" icon="icon-trash"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <div class="centerx vx-row mt-10">
                <div class="vx-col md:w-1/2">
                    <h3><span>តម្លៃសរុប: <b>{{$formatter.format(totalPayment)}}​ => {{$formatter.format(parseFloat(after_discount))}}</b></span></h3>
                    <div class="flex">
                        <div class="flex mt-5">
                            <vs-input-number @input="percentDiscount" v-model="discount" label="បញ្ចុះភាគរយ %:" min="0" max="100" icon-inc="expand_less" icon-dec="expand_more"/>
                        </div>
                        <div class="flex mt-5">
                            <vs-input-number @input="cashDiscount" v-model="cash_discount" label="បញ្ចុះជាសាច់ប្រាក់ $:" min="0" :max="total_payment" icon-inc="expand_less" icon-dec="expand_more"/>
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
    export default {
        name: "StudyYear",
        components: {
            ChangeStudyInfo, PrintNotification,
            AddStudyInfo, AgGridVue, flatPickr
        },
        data() {
            return {
                today_date: this.moment().format('YYYY-MM-DD'),
                discount: 0,
                after_discount: 0,
                cash_discount: 0,
                rec_balance: 0,
                due_balance: 0,
                ret_balance: 0,
                default_discount: 0,
                note_unused: '',
                date_unused: this.moment().format('MM/DD/YYYY'),
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
            preFixZero(number, length){
                var str = '' + number;
                while (str.length < length) {
                    str = '0' + str;
                }
                return str;
            },
            getCostOne(one, date_pay, i){
                var price = one;
                var temp_next_date = this.moment(date_pay).add('month', 1).format('YYYY-MM-DD');
                if(temp_next_date > this.date_unused){
                    this.selected[i].next_date_pay = this.date_unused;
                    var a = this.moment(date_pay);
                    var b = this.moment(this.date_unused);
                    var over_days = b.diff(a, 'days');
                    price = (parseFloat(one) / 30 * over_days).toFixed();
                } else {
                    this.selected[i].next_date_pay = temp_next_date;
                }
                this.selected[i].term_selected = price;
                return price;
            },
            getCostThree(three, date_pay, i){
                var price = three;
                var temp_next_date = this.moment(date_pay).add('month', 3).format('YYYY-MM-DD');
                if(temp_next_date > this.date_unused){
                    this.selected[i].next_date_pay = this.date_unused;
                    var a = this.moment(date_pay);
                    var b = this.moment(this.date_unused);
                    var over_days = b.diff(a, 'days');
                    price = (parseFloat(three) / 91.25 * over_days).toFixed(2);
                } else {
                    this.selected[i].next_date_pay = temp_next_date;
                }
                this.selected[i].term_selected = price;
                return price;
            },
            getCostSix(six, date_pay, i){
                var price = six;
                var temp_next_date = this.moment(date_pay).add('months', 6).format('YYYY-MM-DD');
                if(temp_next_date > this.date_unused){
                    this.selected[i].next_date_pay = this.date_unused;
                    var a = this.moment(date_pay);
                    var b = this.moment(this.date_unused);
                    var over_days = b.diff(a, 'days');
                    price = (parseFloat(six) / 182.5 * over_days).toFixed(2);
                } else {
                    this.selected[i].next_date_pay = temp_next_date;
                }
                this.selected[i].term_selected = price;
                return price;
            },
            getCostTwelve(twelve, date_pay, i){
                var price = twelve;
                var temp_next_date = this.moment(date_pay).add('months', 12).subtract().format('YYYY-MM-DD');
                if(temp_next_date > this.date_unused){
                    this.selected[i].next_date_pay = this.date_unused;
                    var a = this.moment(date_pay);
                    var b = this.moment(this.date_unused);
                    var over_days = b.diff(a, 'days');
                    price = (parseFloat(twelve) / 365 * over_days).toFixed(2);
                } else {
                    this.selected[i].next_date_pay = temp_next_date;
                }
                this.selected[i].term_selected = price;
                return price;
            },
            async storeInvoice(){
                /*this.$vs.loading({
                    type:'material',
                });
                let self = this;
                let vm = this.selected; //ឈ្មោះ ខុសគ្នារវាង Service and Study with Invoice detail
                var update_study_items = [];
                var update_service_items = [];
                for(var i = 0; i < vm.length; i ++){
                    if(vm[i].study_id === undefined){
                        update_service_items.push({
                            id: vm[i].service_id,
                            date_pay: vm[i].next_date_pay,
                            last_term: vm[i].last_term,
                            last_date_pay: vm[i].last_date_pay,
                            is_used: vm[i].is_used
                        })
                    } else {
                        update_study_items.push({
                            id: vm[i].study_id,
                            date_pay: vm[i].next_date_pay,
                            last_term: vm[i].last_term,
                            year : vm[i].year,
                            last_date_pay : vm[i].last_date_pay,
                            from_class : null,
                            to_class : null,
                            date_change : null,
                            is_used : true,
                        })
                    }
                }

                if (update_study_items.length){
                    this.updateStudyInfo(update_study_items);
                }
                if (update_service_items.length){
                    this.updateServiceInfo(update_service_items);
                }

                await this.$store.dispatch('updateIncrementDue', {id: this.student_id, due: this.due_balance});
                await self.$store.dispatch('storeInvoice', {
                    student_id: this.student_id, invoice_date : this.today_date, balance : this.total_payment, after_discount : this.after_discount,
                    discount : this.discount, payment_status : false, due_balance: this.due_balance,
                    receive_balance: this.rec_balance, return_balance: this.ret_balance
                }).then(function (data_res) {
                    if (data_res){
                        var new_all_infos = []; //បង្កើតសម្រាប់បោះតម្លៃទៅ Print
                        self.all_infos.map(async function (data) {
                            new_all_infos.push({
                                invoice_id : data_res.id,
                                item : data.name,
                                term : data.last_term,
                                balance : data.term_selected,
                                date_pay : data.date_pay,
                                next_date_pay : data.next_date_pay,
                                emp_name: data.employee_name,
                            });
                            await self.$store.dispatch('storeInvoiceDetail', {
                                invoice_id : data_res.id,
                                item : data.name,
                                term : data.last_term,
                                balance : data.term_selected,
                                date_pay : data.date_pay,
                                next_date_pay : data.next_date_pay,
                                emp_name: data.employee_name,
                            })
                        });
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
                                name: self.name,
                                latin: self.latin,
                                gender: self.gender,
                                total: self.total_payment,
                                after: self.after_discount,
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
                this.all_infos = [];*/
            },
            cashDiscount(){
                this.discount = parseFloat(this.cash_discount * 100 / this.total_payment).toFixed(2);
                this.after_discount = this.total_payment - this.cash_discount;
            },
            percentDiscount(){
                this.cash_discount = parseFloat(this.total_payment * this.discount / 100).toFixed(2);
                this.after_discount = this.total_payment - this.cash_discount;
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
                    this.update_unused()
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
                console.log(this.selected)
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
            totalPayment(){
                let self = this;
                let payments = 0;
                let vm = this.selected;
                for (var i = 0; i < vm.length; i ++) {
                    payments += parseFloat(vm[i].term_selected);
                }
                self.total_payment = payments;
                self.after_discount = payments;
                console.log(payments);
                return 0;
            },
            returnBalance(){
                var return_bal = 0;
                if(this.after_discount <= this.rec_balance){
                    return_bal = this.rec_balance - this.after_discount;
                }
                this.ret_balance = return_bal;
                return return_bal;
            },
            dueBalance(){
                var return_bal = 0;
                if(this.after_discount >= this.rec_balance){
                    return_bal = this.rec_balance - this.after_discount;
                }
                this.due_balance = return_bal;
                return return_bal;
            },
            getStudyInfos() {
                return this.$store.getters.get_study_infos
            },
            study_info_extract() {
                let self = this;
                return this.getStudyInfos.map(function (data) {
                    var to_day = self.moment();
                    var day_pay = self.moment(data.date_pay);
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
                        to_class      : data.to_class,
                        employees     : data.study_infos.employees,
                        group_section : data.study_infos.group_section,
                        cost_one      : data.study_infos.cost_one,
                        cost_three    : data.study_infos.cost_three,
                        cost_six      : data.study_infos.cost_six,
                        cost_twelve   : data.study_infos.cost_twelve,
                        service_infos : [],
                        day_left      : day_pay.diff(to_day, 'days'),
                        balance       : data.students.balance,
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>