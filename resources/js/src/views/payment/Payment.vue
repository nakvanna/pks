<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button
                    @click="$refs.add_payment.open()"
                    type="relief"
                    icon-pack="feather"
                    icon="icon-plus-square"
            >
                បង់លុយ
            </vs-button>
        </div>
        <vs-table pagination max-items="5" search :data="getInvoices">

            <template slot="thead">
                <vs-th sort-key="id">លេខវិក័យបត្រ</vs-th>
                <vs-th sort-key="name">ឈ្មោះសិស្ស</vs-th>
                <vs-th sort-key="latin">ឈ្មោះឡាតាំង</vs-th>
                <vs-th sort-key="balance">តម្លៃដើម</vs-th>
                <vs-th sort-key="discount">បញ្ចុះតម្លៃ</vs-th>
                <vs-th sort-key="after_discount">តម្លៃត្រូវបង់</vs-th>
                <vs-th sort-key="due_balance">ជំពាក់</vs-th>
                <vs-th sort-key="invoice_date">ថ្ងៃបង់លុយ</vs-th>
                <vs-th sort-key="payment_status">បានទទូល</vs-th>
                <vs-th >ប្រតិបត្តិការណ៌</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].id">
                        {{ preFixZero(data[indextr].id, 7) }}
                    </vs-td>

                    <vs-td :data="data[indextr].name">
                        {{ data[indextr].name }}
                    </vs-td>

                    <vs-td :data="data[indextr].latin">
                        {{ data[indextr].latin }}
                    </vs-td>

                    <vs-td :data="data[indextr].balance">
                        $ {{ data[indextr].balance }}
                    </vs-td>

                    <vs-td :data="data[indextr].discount">
                        {{ data[indextr].discount }} %
                    </vs-td>

                    <vs-td :data="data[indextr].after_discount">
                        $ {{ data[indextr].after_discount}}
                    </vs-td>

                    <vs-td :data="data[indextr].due_balance">
                        $ {{ data[indextr].due_balance}}
                    </vs-td>

                    <vs-td :data="data[indextr].invoice_date">
                        {{ data[indextr].invoice_date }}
                    </vs-td>

                    <vs-td v-if="data[indextr].payment_status === true">
                        <vs-chip color="success">
                            <span>បានទទូល</span>
                        </vs-chip>
                    </vs-td>
                    <vs-td v-else>
                        <vs-chip color="danger">
                            <span>មិនទាន់ទទូល</span>
                        </vs-chip>
                    </vs-td>

                    <vs-td>
                        <div class="btn-group">
                            <vs-button
                                    @click="showInvoiceDetail(data[indextr].id)"
                                    size="small" color="success" type="line" icon-pack="feather" icon="icon-eye"
                            > លម្អិត
                            </vs-button>
                            <vs-button
                                    @click="printInvoice(data[indextr].id, data[indextr].name, data[indextr].latin, data[indextr].gender, data[indextr].balance, data[indextr].after_discount, data[indextr].discount)"
                                    size="small" color="primary" type="line" icon-pack="feather" icon="icon-printer"
                            > បោះពុម្ភ
                            </vs-button>
                            <vs-button
                                    @click="dueHistory(data[indextr].id, data[indextr].due_balance)"
                                    size="small" color="success" type="line" icon-pack="feather" icon="icon-money"
                            > ទូទាត់ប្រាក់
                            </vs-button>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <!--Modal invoice detail-->
        <modal width="60%" height="auto" :scrollable="true" :pivotY="0.07" :adaptive="true" :clickToClose="false" name="show-invoice-detail">
            <div class="flex justify-end">
                <i @click="$modal.hide('show-invoice-detail')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <vs-table pagination max-items="10" :data="getInvoicesDetail">
                    <template slot="thead">
                        <vs-th sort-key="indextr">ល.រ</vs-th>
                        <vs-th sort-key="item">ប្រភេទត្រូវបង់</vs-th>
                        <vs-th sort-key="term">រយៈពេលបង់</vs-th>
                        <vs-th sort-key="balance">តម្លៃ</vs-th>
                        <vs-th sort-key="created_at">កាលបរិច្ឆេទ</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                            <vs-td :data="indextr">
                                {{ indextr + 1}}
                            </vs-td>

                            <vs-td :data="data[indextr].item">
                                {{ data[indextr].item }}
                            </vs-td>

                            <vs-td :data="data[indextr].term">
                                {{ data[indextr].term }} ខែ
                            </vs-td>

                            <vs-td :data="data[indextr].balance">
                                $ {{ data[indextr].balance }}
                            </vs-td>

                            <vs-td :data="data[indextr].created_at">
                                {{ data[indextr].created_at }}
                            </vs-td>

                        </vs-tr>
                    </template>
                </vs-table>
                <vs-divider/>
            </vx-card>
        </modal>

        <!--Modal payment-->
        <sweet-modal ref="add_payment" title="បង់លុយ" :blocking="true" :width="!mobilecheck()?'100%':''">
            <div class="vx-row">
                <div class="vx-col w-full">
                    <v-select
                            class="w-full"
                            :clearable="false"
                            v-model="students"
                            placeholder="ជ្រើសរើសឈ្មោះសិស្ស"
                            :options="student_options"
                            label="label_data"
                            @input="passStudentInfo"
                    ></v-select>
                </div>
            </div>
            <div class="vx-row mt-base mb-base">
                <div class="vx-col md:w-1/5 w-full">
                    <img alt="" class="shadow-md" height="150" :src="students.photo"/>
                </div>
                <div class="vx-col md:w-2/5 w-full">
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" placeholder="ភេទ" v-model="students.gender" disabled />
                        </div>
                        <div class="vx-col w-full mt-base">
                            <flat-pickr class="w-full" v-model="students.dob" placeholder="ថ្ងៃខែឆ្នាំកំណើត" disabled/>
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/5 w-full">
                    <flat-pickr class="w-full"  v-model="today_date" placeholder="ថ្ងៃបង់លុយ" />
                </div>
            </div>
            <h3 class="mb-10">បញ្ចុះតម្លៃ {{default_discount}}%</h3>
            <vs-table :data="all_infos">

                <template slot="thead">
                    <vs-th sort-key="year">ឆ្នាំសិក្សា</vs-th>
                    <vs-th sort-key="name">ប្រភេទត្រូវបង់</vs-th>
                    <vs-th>រយៈពេលបង់</vs-th>
                    <vs-th>តម្លៃ</vs-th>
                    <vs-th>ថ្ងៃខែឆ្នាំត្រូវបង់</vs-th>
                    <vs-th>ថ្ងៃខែឆ្នាំត្រូវបង់បន្ទាប់</vs-th>
                    <vs-th>គ្រប់ឬនៅ</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                        <vs-td :data="data[indextr].year">
                            {{ data[indextr].year }}
                        </vs-td>

                        <vs-td :data="data[indextr].name">
                            {{ data[indextr].name }}
                        </vs-td>

                        <!--Term selected-->
                        <vs-td>
                            <vs-select
                                    class="w-full"
                                    autocomplete
                                    placeholder="ជ្រើសរើសរយៈពេល"
                                    v-model="data[indextr].last_term"
                            >
                                <vs-select-item value="1" text="1"/>
                                <vs-select-item value="3" text="3"/>
                                <vs-select-item value="6" text="6"/>
                                <vs-select-item value="12" text="12"/>
                            </vs-select>
                        </vs-td>
                        <!--Term selected-->

                        <!--Cost term-->
                        <vs-td v-if="data[indextr].last_term === 1 || data[indextr].last_term === '1' ">
                            {{getCostOne(data[indextr].cost_one, data[indextr].date_pay, indextr)}}
                        </vs-td>
                        <vs-td v-if="data[indextr].last_term === 3 || data[indextr].last_term === '3' ">
                            {{getCostThree(data[indextr].cost_three, data[indextr].date_pay, indextr)}}
                        </vs-td>
                        <vs-td v-if="data[indextr].last_term === 6 || data[indextr].last_term === '6' ">
                            {{getCostSix(data[indextr].cost_six, data[indextr].date_pay, indextr)}}
                        </vs-td>
                        <vs-td v-if="data[indextr].last_term === 12 || data[indextr].last_term === '12' ">
                            {{getCostTwelve(data[indextr].cost_twelve, data[indextr].date_pay, indextr)}}
                        </vs-td>
                        <vs-td v-if="data[indextr].last_term === 0">
                            0
                        </vs-td>
                        <!--Cost term-->

                        <vs-td v-if="data[indextr].date_pay !== null">
                            <flat-pickr class="w-full" :value="data[indextr].date_pay" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង" disabled/>
                        </vs-td>
                        <vs-td v-else >
                            <flat-pickr class="w-full" v-model="data[indextr].date_pay"  placeholder="ថ្ងៃត្រូវបង់លុយដំបូង"/>
                        </vs-td>

                        <vs-td>
                            <flat-pickr class="w-full" v-model="data[indextr].next_date_pay" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង" disabled/>
                        </vs-td>

                        <vs-td>
                            <vs-button @click="removeItem(indextr)" radius color="danger" type="relief" icon-pack="feather" icon="icon-trash"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <div class="centerx vx-row mt-10">
                <div class="vx-col md:w-1/2">
                    <h3><span>តម្លៃសរុប: <b>{{$formatter.format(totalPayment)}}​ -> {{$formatter.format(parseFloat(after_discount))}}</b></span></h3>
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
            <vs-button @click="storeInvoice" slot="button" v-if="all_infos.length">បង់លុយ</vs-button>
        </sweet-modal>
        <print-invoice ref="PrintInvoice"></print-invoice>
        <due-history ref="DueHistory"></due-history>
    </vx-card>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.min.css';
    import PrintInvoice from './PrintInvoice';
    import DueHistory from '../due-history/DueHistory'
    export default {
        name: "Payment",
        components: {
            flatPickr, PrintInvoice, DueHistory
        },
        computed: {
            all_students(){
                return this.$store.getters.all_students
            },
            student_options(){
                return this.all_students.map(function (x){
                    return {
                        id:x.id,
                        name:x.name,
                        latin:x.latin,
                        label_data:`${x.name}-${x.latin}-${x.gender}-${x.dob}`,
                        gender: x.gender,
                        dob: x.dob,
                        photo: x.photo,
                        balance: x.balance,
                        discount: x.discount,
                    }
                });
            },
            getPayments() {
                return this.$store.getters.get_payments;
            },
            totalPayment(){
                let self = this;
                let payments = 0;
                let vm = this.all_infos;
                for (var i = 0; i < vm.length; i ++) {
                    payments += parseFloat(vm[i].term_selected);
                }
                self.total_payment = payments;
                self.after_discount = payments;
                return payments;
            },
            getCurYear(){
                return this.$store.getters.get_cur_year
            },
            getInvoices(){
                return this.$store.getters.get_invoices
            },
            getInvoicesDetail(){
                return this.$store.getters.get_invoice_details
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
            }
        },
        async created (){
            await this.$store.dispatch('fetchStudent');
            await this.$store.dispatch('fetchCurYear');
            await this.$store.dispatch('fetchInvoices');
        },
        data() {
            return {
                discount: 0,
                after_discount: 0,
                cash_discount: 0,
                rec_balance: 0,
                due_balance: 0,
                ret_balance: 0,
                default_discount: 0,
                users: [],
                selected: [],
                students:{label_data:'ជ្រើសរើសសិស្ស',gender:'ភេទ',dob:'ថ្ងៃខែឆ្នាំកំណើត',photo:'images/placeholder/placeholder.png'}, //all info
                student_id: '',
                gender: '',
                dob: null,
                balance: 0,
                photo: 'https://data.whicdn.com/images/300580381/original.jpg',
                name: '',
                latin: '',
                all_infos: [],
                total_payment: 0,
                today_date: this.moment().format('YYYY-MM-DD'),
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
            cashDiscount(){
                this.discount = parseFloat(this.cash_discount * 100 / this.total_payment).toFixed(2);
                this.after_discount = this.total_payment - this.cash_discount;
            },
            percentDiscount(){
                this.cash_discount = parseFloat(this.total_payment * this.discount / 100).toFixed(2);
                this.after_discount = this.total_payment - this.cash_discount;
            },
            getCostOne(one, date_pay, i){
                var price = one;
                var temp_next_date = this.moment(date_pay).add('month', 1).format('YYYY-MM-DD');
                if(temp_next_date > this.all_infos[i].last_date_pay){
                    this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
                    var a = this.moment(date_pay);
                    var b = this.moment(this.all_infos[i].last_date_pay);
                    var over_days = b.diff(a, 'days');
                    price = (parseFloat(one) / 30 * over_days).toFixed();
                } else {
                    this.all_infos[i].next_date_pay = temp_next_date;
                }
                this.all_infos[i].term_selected = price;
                return price;
            },
            getCostThree(three, date_pay, i){
                var price = three;
                var temp_next_date = this.moment(date_pay).add('month', 3).format('YYYY-MM-DD');
                console.log(this.moment().add('months', 2).format('YYYY-MM-DD'));
                if(temp_next_date > this.all_infos[i].last_date_pay){
                    this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
                    var a = this.moment(date_pay);
                    var b = this.moment(this.all_infos[i].last_date_pay);
                    var over_days = b.diff(a, 'days');
                    price = (parseFloat(three) / 91.25 * over_days).toFixed(2);
                } else {
                    this.all_infos[i].next_date_pay = temp_next_date;
                }
                this.all_infos[i].term_selected = price;
                return price;
            },
            getCostSix(six, date_pay, i){
                var price = six;
                var temp_next_date = this.moment(date_pay).add('months', 6).format('YYYY-MM-DD');
                if(temp_next_date > this.all_infos[i].last_date_pay){
                    this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
                    var a = this.moment(date_pay);
                    var b = this.moment(this.all_infos[i].last_date_pay);
                    var over_days = b.diff(a, 'days');
                    price = (parseFloat(six) / 182.5 * over_days).toFixed(2);
                } else {
                    this.all_infos[i].next_date_pay = temp_next_date;
                }
                this.all_infos[i].term_selected = price;
                return price;
            },
            getCostTwelve(twelve, date_pay, i){
                var price = twelve;
                var temp_next_date = this.moment(date_pay).add('months', 12).subtract().format('YYYY-MM-DD');
                if(temp_next_date > this.all_infos[i].last_date_pay){
                    this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
                    var a = this.moment(date_pay);
                    var b = this.moment(this.all_infos[i].last_date_pay);
                    var over_days = b.diff(a, 'days');
                    price = (parseFloat(twelve) / 365 * over_days).toFixed(2);
                } else {
                    this.all_infos[i].next_date_pay = temp_next_date;
                }
                this.all_infos[i].term_selected = price;
                return price;
            },

            //convert Service and Study to one object
            async getServiceStudy(payment){
                let vm = this;
                vm.all_infos = [];
                await this.$store.dispatch('fetchPayments', payment);
                this.getPayments.services.map(async function (data) {
                    if(data.services.employee_id === 0) {
                        vm.all_infos.push(
                            {
                                year       : data.year,
                                // service_id : data.service_id,
                                service_id : data.id,
                                name       : data.services.service,
                                date_pay   : data.date_pay,
                                next_date_pay: null,
                                last_date_pay: data.last_date_pay,
                                last_term  : data.last_term,
                                cost_one   : data.services.cost_one,
                                cost_three : data.services.cost_three,
                                cost_six   : data.services.cost_six,
                                cost_twelve: data.services.cost_twelve,
                                is_used    : data.is_used,
                                term_selected: 0,
                                employee_name: "គ្មានអ្នកទទួលបន្ទុក"
                            }
                        )
                    } else {
                        vm.all_infos.push(
                            {
                                year       : data.year,
                                // service_id : data.service_id,
                                service_id : data.id,
                                name       : data.services.service,
                                date_pay   : data.date_pay,
                                next_date_pay: null,
                                last_date_pay: data.last_date_pay,
                                last_term  : data.last_term,
                                cost_one   : data.services.cost_one,
                                cost_three : data.services.cost_three,
                                cost_six   : data.services.cost_six,
                                cost_twelve: data.services.cost_twelve,
                                is_used    : data.is_used,
                                term_selected: 0,
                                employee_name: data.services.employees.kh_name
                            }
                        )
                    }
                });
                this.getPayments.studies.map(async function (data) {
                    if (data.study_infos.employee_id === 0) {
                        vm.all_infos.push(
                            {
                                year       : data.year,
                                // study_id   : data.collection_id,
                                study_id   : data.id,
                                name       : data.study_infos.level +''+data.study_infos.class_name,
                                date_pay   : data.date_pay,
                                next_date_pay: null,
                                last_date_pay: data.last_date_pay,
                                last_term  : data.last_term,
                                cost_one   : data.study_infos.cost_one,
                                cost_three : data.study_infos.cost_three,
                                cost_six   : data.study_infos.cost_six,
                                cost_twelve: data.study_infos.cost_twelve,
                                is_used    : data.is_used,
                                term_selected: 0,
                                employee_name: "គ្មានអ្នកទទួលបន្ទុក"
                            }
                        )
                    } else {
                        vm.all_infos.push(
                            {
                                year       : data.year,
                                // study_id   : data.collection_id,
                                study_id   : data.id,
                                name       : data.study_infos.level +''+data.study_infos.class_name,
                                date_pay   : data.date_pay,
                                next_date_pay: null,
                                last_date_pay: data.last_date_pay,
                                last_term  : data.last_term,
                                cost_one   : data.study_infos.cost_one,
                                cost_three : data.study_infos.cost_three,
                                cost_six   : data.study_infos.cost_six,
                                cost_twelve: data.study_infos.cost_twelve,
                                is_used    : data.is_used,
                                term_selected: 0,
                                employee_name: data.study_infos.employees.kh_name
                            }
                        )
                    }
                });
            },
            //Pass student info when student select change
            passStudentInfo(){
                this.selected = [];
                this.all_infos = [];
                this.student_id = this.students.id;
                this.gender = this.students.gender;
                this.dob = this.students.dob;
                this.photo = this.students.photo;
                this.name = this.students.name;
                this.latin = this.students.latin;
                this.balance = this.students.balance;
                this.default_discount = this.students.discount;
                this.getServiceStudy({'id':this.students.id, 'cur_year': this.getCurYear})
            },
            async updateStudyInfo(update_study_items){
                let self = this;
                this.$vs.loading({
                    type:'material',
                });
                const promises = update_study_items.map(async function (data) {
                    await self.$store.dispatch('updateStudyInfo', data);
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                        text:'ទិន្នន័យឆ្នាំសិក្សាត្រូវកែប្រែ!',
                        color:'success',
                        iconPack: 'feather',
                        icon:'icon-check',
                        position:'top-center'
                    });
                    self.$vs.loading.close()
                });
            },
            async updateServiceInfo(update_service_items){
                let self = this;
                this.$vs.loading({
                    type:'material',
                });
                const promises = update_service_items.map(async function (data) {
                    await self.$store.dispatch('updateServiceInfo', data);
                    console.log(data)
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                        text:'ទិន្នន័យសេវាកម្ម​​ត្រូវកែប្រែ!',
                        color:'success',
                        iconPack: 'feather',
                        icon:'icon-check',
                        position:'top-center'
                    });
                    self.$vs.loading.close()
                });
            },
            async storeInvoice(){
                this.$vs.loading({
                    type:'material',
                });
                let self = this;
                let vm = this.all_infos; //ឈ្មោះ ខុសគ្នារវាង Service and Study with Invoice detail
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
                                name: self.name,
                                latin: self.latin,
                                gender: self.gender,
                                total: self.total_payment,
                                after: self.after_discount,
                                discount: self.discount
                            },
                            new_all_infos
                        );
                    }
                });
                this.discount = 0;
                this.cash_discount = 0;
                this.all_infos = [];
            },
            removeItem(i){
                this.all_infos.splice(i, 1);
            },
            async showInvoiceDetail(id){
                this.$modal.show('show-invoice-detail');
                await this.$store.dispatch('showInvoiceDetail', id);
            },
            async printInvoice(id, name, latin, gender, total, after, discount,){
                await this.$store.dispatch('showInvoiceDetail', id);
                this.$refs.PrintInvoice.show({name: name, latin: latin, gender: gender, total: total, after: after, discount: discount}, this.getInvoicesDetail);
            },
            dueHistory(inv_id, due_bal){
                this.$refs.DueHistory.show(inv_id, due_bal)
            },
        },
        mounted() {
            this.moment.locale('en');
        }
    }
</script>

<style scoped>

</style>