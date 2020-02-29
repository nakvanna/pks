<template>
    <div class="no-shadow">
        <div class="vx-row">
            <div class="vx-col md:w-5/6">
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
            <div class="vx-col md:w-1/6">
                <flat-pickr class="w-full"  v-model="today_date" placeholder="ថ្ងៃបង់លុយ" />
            </div>
        </div>
        <h5 class="pt-2">ជំពាក់សរុប៖ {{balance}}</h5>
        <vx-card no-shadow v-if="is_selected">
            <div class="flex">
                <div class="w-1/2 mr-2">
                    <flat-pickr class="w-full mr-2"  v-model="date_reduce_due" placeholder="ថ្ងៃបង់លុយ" />
                </div>
                <div class="w-1/2 mr-2">
                    <vs-input-number label="សាច់ប្រាក់សង $:" v-model="pay_due" mix="0" :max="balance * (-1)" icon-inc="expand_less" icon-dec="expand_more"/>
                </div>
            </div>
            <div class="w-full mt-3">
                <vs-textarea label="Note" v-model="desc" />
            </div>
            <vs-button
                    @click="calculate"
                    v-if="is_selected"
                    type="relief"
                    icon-pack="feather"
                    icon="icon-plus-square"
            >
                ទូទាត់ការជំពាក់
            </vs-button>
            <br>
            <vs-table :data="all_due_reduce">
                <template slot="thead">
                    <vs-th sort-key="indextr">ល.រ</vs-th>
                    <vs-th sort-key="invoice_id">វិក័យបត្រ</vs-th>
                    <vs-th sort-key="pay_due">ចំនូនសង</vs-th>
                    <vs-th sort-key="desc">ពិពណ៌នា</vs-th>
                    <vs-th sort-key="date_reduce_due">ថ្ងៃទីសង</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                        <vs-td :data="indextr">
                            {{ indextr + 1}}
                        </vs-td>

                        <vs-td :data="data[indextr].invoice_id">
                            {{ data[indextr].invoice_id }}
                        </vs-td>

                        <vs-td :data="data[indextr].pay_due">
                            {{ $formatter.format(data[indextr].pay_due) }}
                        </vs-td>

                        <vs-td :data="data[indextr].desc">
                            {{ data[indextr].desc }}
                        </vs-td>

                        <vs-td :data="data[indextr].date_reduce_due">
                            {{ data[indextr].date_reduce_due }}
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.min.css';
    export default {
        name: "PayDue",
        components: {
            flatPickr
        },
        data() {
            return {
                students:{
                    label_data:'ជ្រើសរើសសិស្ស',gender:'ភេទ',dob:'ថ្ងៃខែឆ្នាំកំណើត',photo:'images/placeholder/placeholder.png'
                },
                student_id: null,
                gender: null,
                dob: null,
                photo: null,
                name: null,
                latin: null,
                balance: 0,
                default_discount: null,
                today_date: this.moment().format('YYYY-MM-DD'),

                date_reduce_due: this.moment().format('YYYY-MM-DD'),
                pay_due: 0,
                desc: '',
                invoice_id: null,
                total_due: 0,
                is_selected: false,

                all_invoice_stu: [],
                all_due_reduce: [],
            }
        },
        computed: {
            all_students(){
                return this.$store.getters.all_students;
            },
            get_invoice_stu(){
                return this.$store.getters.get_invoice_stu;
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
            get_all_dueHistory(){
                return this.$store.getters.get_due_histories;
            },
            get_SumRow(){
                var x = 0;
                this.get_all_dueHistory.map(function (data) {
                    x += parseFloat(data.pay_due);
                });
                return x;
            },
        },
        methods: {
            async calculate()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           {
                let self = this;
                var ais = this.all_invoice_stu;
                var adr = this.all_due_reduce;
                var new_all_inv_stu = this.all_invoice_stu;
                var i = 0;
                const promise = ais.map(function (data1) {
                    adr.map(function (data2) {
                        if (data1.id === data2.invoice_id){
                            new_all_inv_stu[i].due_balance = parseFloat(new_all_inv_stu[i].due_balance) + parseFloat(data2.pay_due);
                        }
                    });
                    console.log(new_all_inv_stu[i]);
                    i = i + 1;
                });
                await Promise.all(promise).then(function(){
                    new_all_inv_stu.map(function (data) {
                        if(self.date_reduce_due !== null || self.pay_due > 0) {
                            self.$vs.loading({
                                type:'material',
                            });
                            // console.log( parseFloat(data.due_balance) * (-1) >= parseFloat(self.pay_due))
                            // console.log( parseFloat(data.due_balance) * (-1) +' '+ parseFloat(self.pay_due))
                            if ( parseFloat(data.due_balance) * (-1) <= self.pay_due ){
                                if (parseFloat(data.due_balance) !== 0){
                                    self.$store.dispatch('updateIncrementDue', {id: self.student_id, due: parseFloat(data.due_balance) * (-1)}).then();
                                    self.$store.dispatch('storeDueHistory', {
                                        invoice_id: data.id, date_reduce_due: self.date_reduce_due,
                                        pay_due: parseFloat(data.due_balance) * (-1), desc: self.desc
                                    }).then(function(data_res) {
                                        if(data_res){
                                            self.$vs.loading.close();
                                        }
                                    });
                                    self.pay_due = parseFloat(self.pay_due) + parseFloat( data.due_balance);
                                }
                            } else {
                                if (parseFloat(data.due_balance) !== 0) {
                                    self.$store.dispatch('updateIncrementDue', {id: self.student_id, due: parseFloat(self.pay_due)}).then();
                                    self.$store.dispatch('storeDueHistory', {
                                        invoice_id: data.id, date_reduce_due: self.date_reduce_due,
                                        pay_due: parseFloat(self.pay_due), desc: self.desc
                                    }).then(function(data_res) {
                                        if(data_res){
                                            self.$vs.loading.close();
                                        }
                                    });
                                    self.pay_due = parseFloat(self.pay_due) + parseFloat( data.due_balance);
                                }
                            }
                        }
                    })
                });
            },
            async passStudentInfo(){
                this.all_due_reduce = [];
                this.student_id = this.students.id;
                this.gender = this.students.gender;
                this.dob = this.students.dob;
                this.photo = this.students.photo;
                this.name = this.students.name;
                this.latin = this.students.latin;
                this.balance = this.students.balance;
                this.default_discount = this.students.discount;
                this.is_selected = true;
                await this.$store.dispatch('fetchInvoiceByStuID', this.student_id);
                this.all_invoice_stu = this.get_invoice_stu;
                this.fetchAllDueByInv();
            },

            async fetchAllDueByInv(){
                let self = this;
                var x = [];
                const promise = this.get_invoice_stu.map(async function (data) {
                    await self.$store.dispatch('fetchDueHistoryOnly', data.id);
                    x = self.get_all_dueHistory;
                    x.map(function (dta) {
                        if (dta !== undefined){
                            console.log(dta);
                            self.all_due_reduce.push(dta);
                        }
                    })
                });
                await Promise.all(promise).then(function () {
                    // console.log(self.all_due_reduce);
                })
            },

            preFixZero(number, length){
                var str = '' + number;
                while (str.length < length) {
                    str = '0' + str;
                }
                return str;
            },
            async storeDueHistory(){
                let self = this;
                if(self.date_reduce_due !== null || self.pay_due > 0) {
                    self.$vs.loading({
                        type:'material',
                    });
                    await self.$store.dispatch('updateIncrementDue', {id: self.student_id, due: self.pay_due});
                    await self.$store.dispatch('storeDueHistory', {
                        invoice_id: self.invoice_id, date_reduce_due: self.date_reduce_due,
                        pay_due: self.pay_due, desc: self.desc
                    }).then(function(data_res) {
                        if(data_res){
                            self.$vs.loading.close();
                            self.pay_due = 0;
                        }
                    })
                }
            },
        }
    }
</script>

<style scoped>

</style>