<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button
                    @click="$modal.show('add-payment')"
                    type="relief"
                    icon-pack="feather"
                    icon="icon-plus-square"
            >
                បង់លុយ
            </vs-button>
        </div>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="getInvoices">

            <template slot="thead">
                <vs-th sort-key="name">ឈ្មោះសិស្ស</vs-th>
                <vs-th sort-key="latin">ឈ្មោះឡាតាំង</vs-th>
                <vs-th sort-key="class_name">តម្លៃដើម</vs-th>
                <vs-th sort-key="date_pay">បញ្ចុះតម្លៃ</vs-th>
                <vs-th sort-key="is_used">តម្លៃក្រោយបញ្ចុះតម្លៃ</vs-th>
                <vs-th sort-key="is_used">ថ្ងៃបង់លុយ</vs-th>
                <vs-th sort-key="is_used">បានទទូល</vs-th>
                <vs-th sort-key="is_used">បង្ហាញ</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

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
                        <vs-button @click="showInvoiceDetail(data[indextr].id)" size="small" radius color="primary" type="relief" icon-pack="feather" > លម្អិត</vs-button>
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
        <modal width="95%" height="auto" :scrollable="true" :pivotY="0.07" :adaptive="true" :clickToClose="false" name="add-payment">
            <div class="flex justify-end">
                <i @click="$modal.hide('add-payment')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="vx-row">
                    <div class="vx-col md:w-3/4 flex mt-20">
                        <vs-select
                                class="w-1/4"
                                autocomplete
                                placeholder="ជ្រើសរើសឈ្មោះសិស្ស"
                                v-model="students"
                                @change="passStudentInfo(students)"
                        >
                            <vs-select-item :key="i"
                                            v-for="(item, i) in all_students" :value="item.id+','+item.gender+','+item.dob+','+item.photo"
                                            :text="item.name +' '+ item.latin"
                            />
                        </vs-select>
                        <vs-input class="w-1/4 ml-2 mr-2" placeholder="ភេទ" v-model="gender" disabled />
                        <div class="w-1/4">
                            <flat-pickr class="w-full" v-model="dob" placeholder="ថ្ងៃខែឆ្នាំកំណើត" disabled/>
                        </div>
                        <div class="w-1/4">
                            <flat-pickr class="w-full ml-2"  v-model="today_date" placeholder="ថ្ងៃបង់លុយ" />
                        </div>
                    </div>
                    <div class="vx-col lg:w-1/4 justify-end">
                        <img style="height: 150px" :src="photo"/>
                    </div>
                </div>
                <vs-table v-model="selected" pagination max-items="5" search :data="all_infos">

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
                                {{getCostThree(data[indextr].cost_one, data[indextr].cost_three, data[indextr].date_pay, indextr)}}
                            </vs-td>
                            <vs-td v-if="data[indextr].last_term === 6 || data[indextr].last_term === '6' ">
                                {{getCostSix(data[indextr].cost_one, data[indextr].cost_six, data[indextr].date_pay, indextr)}}
                            </vs-td>
                            <vs-td v-if="data[indextr].last_term === 12 || data[indextr].last_term === '12' ">
                                {{getCostTwelve(data[indextr].cost_one, data[indextr].cost_twelve, data[indextr].date_pay, indextr)}}
                            </vs-td>
                            <vs-td v-if="data[indextr].last_term === 0">
                                0
                            </vs-td>
                            <!--Cost term-->

                            <vs-td v-if="data[indextr].date_pay !== null">
                                <flat-pickr class="w-full" :value="data[indextr].date_pay.substr(0, 10)" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង" disabled/>
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
                <div class="centerx">
                   <h3><span>សរុបតម្លៃត្រូវបង់: <b>{{totalPayment}}$</b></span></h3>
                    <div class="flex mt-5">
                        <vs-input-number v-model="discount" label="បញ្ចុះតម្លៃ %:" min="0" max="100" icon-inc="expand_less" icon-dec="expand_more"/>
                    </div>
                </div>
                <vs-divider/>
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button @click="storeInvoice" icon="icon-save" icon-pack="feather" type="relief" v-if="all_infos.length">រក្សាទុក</vs-button>
                </div>
            </vx-card>
        </modal>
    </vx-card>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    export default {
        name: "Payment",
        components: {
            flatPickr
        },
        computed: {
            all_students(){
                return this.$store.getters.all_students
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
                users: [],
                selected: [],
                students:'', //all info
                student_id: '',
                gender: '',
                dob: null,
                photo: 'https://data.whicdn.com/images/300580381/original.jpg',
                all_infos: [],
                total_payment: 0,
                today_date: this.moment().format('YYYY-MM-DD'),
            }
        },
        methods: {
            getCostOne(one, date_pay, i){
                var price = one;
                var temp_next_date = this.moment(date_pay).add('month', 1).format('YYYY-MM-DD');
                if(temp_next_date > this.all_infos[i].last_date_pay){
                    this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
                    var a = this.moment(date_pay, 'YYYY-MM-DD');
                    var b = this.moment(this.all_infos[i].last_date_pay);
                    var over_days = b.diff(a, 'days');
                    console.log(over_days);
                    price = parseFloat(one) / 30 * over_days;
                } else {
                    this.all_infos[i].next_date_pay = temp_next_date;
                }
                this.all_infos[i].term_selected = price;
                return price;
            },
            getCostThree(one, three, date_pay, i){
                var price = three;
                var temp_next_date = this.moment(date_pay).add('month', 3).format('YYYY-MM-DD');
                if(temp_next_date > this.all_infos[i].last_date_pay){
                    this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
                    var a = this.moment(date_pay, 'YYYY-MM-DD');
                    var b = this.moment(this.all_infos[i].last_date_pay);
                    var over_days = b.diff(a, 'days');
                    console.log(over_days);
                    price = parseFloat(one) / 30 * over_days;
                } else {
                    this.all_infos[i].next_date_pay = temp_next_date;
                }
                this.all_infos[i].term_selected = price;
                return price;
            },
            getCostSix(one, six, date_pay, i){
                var price = six;
                var temp_next_date = this.moment(date_pay).add('month', 6).format('YYYY-MM-DD');
                if(temp_next_date > this.all_infos[i].last_date_pay){
                    this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
                    var a = this.moment(date_pay, 'YYYY-MM-DD');
                    var b = this.moment(this.all_infos[i].last_date_pay);
                    var over_days = b.diff(a, 'days');
                    console.log(over_days);
                    price = parseFloat(one) / 30 * over_days;
                } else {
                    this.all_infos[i].next_date_pay = temp_next_date;
                }
                this.all_infos[i].term_selected = price;
                return price;
            },
            getCostTwelve(one, twelve, date_pay, i){
                var price = twelve;
                var temp_next_date = this.moment(date_pay).add('month', 12).format('YYYY-MM-DD');
                if(temp_next_date > this.all_infos[i].last_date_pay){
                    this.all_infos[i].next_date_pay = this.all_infos[i].last_date_pay;
                    var a = this.moment(date_pay, 'YYYY-MM-DD');
                    var b = this.moment(this.all_infos[i].last_date_pay);
                    var over_days = b.diff(a, 'days');
                    console.log(over_days);
                    price = parseFloat(one) / 30 * over_days;
                } else {
                    this.all_infos[i].next_date_pay = temp_next_date;
                }
                this.all_infos[i].term_selected = price;
                return price;
            },
            async getServiceStudy(payment){
                let vm = this;
                vm.all_infos = [];
                await this.$store.dispatch('fetchPayments', payment);
                this.getPayments.services.map(async function (data) {
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
                        }
                    )
                });
                this.getPayments.studies.map(async function (data) {
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
                        }
                    )
                });
            },
            passStudentInfo(students){
                this.selected = [];
                this.all_infos = [];
                var student_arr = students.split(',');
                this.student_id = student_arr[0];
                this.gender = student_arr[1];
                this.dob = student_arr[2];
                this.photo = student_arr[3];
                this.getServiceStudy({'id':student_arr[0], 'cur_year': this.getCurYear})
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
                let vm = this.all_infos;
                var update_study_items = [];
                var update_service_items = [];
                for(var i = 0; i < vm.length; i ++){
                    if(vm[i].study_id === undefined){
                        update_service_items.push({
                            id: vm[i].service_id,
                            date_pay: vm[i].next_date_pay,
                            last_term: vm[i].last_term
                        })
                    } else {
                        update_study_items.push({
                            id: vm[i].study_id,
                            date_pay: vm[i].next_date_pay,
                            last_term: vm[i].last_term
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
                    student_id: this.student_id, invoice_date : this.today_date, balance : this.total_payment, after_discount : this.total_payment,
                    discount : this.discount, payment_status : false
                }).then(function (data_res) {
                    if (data_res){
                        self.all_infos.map(async function (data) {
                            await self.$store.dispatch('storeInvoiceDetail', {
                                invoice_id : data_res.id,
                                item : data.name,
                                term : data.last_term,
                                balance : data.term_selected,
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
                    }
                });
            },
            removeItem(i){
                this.all_infos.splice(i, 1);
            },
            async showInvoiceDetail(id){
                this.$modal.show('show-invoice-detail');
                await this.$store.dispatch('showInvoiceDetail', id);
            }
        }
    }
</script>

<style scoped>

</style>