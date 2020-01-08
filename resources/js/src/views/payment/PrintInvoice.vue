<template>
    <sweet-modal ref="print_invoice" title="Print Invoice" :blocking="true" :width="!mobilecheck()?'60%':''">
        <vx-card no-shadow>
            <div id="section-to-print" class="pb-4">
                <div class="w-full">
                    <table class="w-full text-primary">
                        <tr >
                            <td>
                                <img style="height: 100px; width: 250px;" src="images/ponlok-khmer-header.jpg" alt="header">
                            </td>
                            <td class="text-center pt-10">
                                <h4 class="text-primary"><u>វិក័យបត្របង់ប្រាក់</u></h4>
                                <h4 class="text-primary"><u>Invoice</u></h4>
                            </td>
                            <td class="text-right text-dark">
                                <barcode style="display: inline;" class="d-inline" v-if="master_item.id" tag="img"
                                         :value="master_item.id"
                                         :height="70" :options="{ displayValue: false }">
                                    Show this if the rendering fails.
                                </barcode>
                                <div>លេខវិក័យបត្រ: {{master_item.id}}</div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="vx-row mb-3 mt-3">
                    <div class="vx-col w-full">
                        <table class="w-full text-primary">
                            <tr>
                                <td class="w-1/3 print:w-1/3"><b>ឈ្មោះ​​ ៖​ {{master_item.name}}</b></td>
                                <td class="w-1/3 print:w-1/3"><b>ឡាតាំង ៖ {{master_item.latin}}</b></td>
                                <td class="w-1/3 print:w-1/3"><b>ភេទ: {{master_item.gender}}</b></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <table class="custom">
                            <tbody>
                            <tr>
                                <th class="custom">ល.រ</th>
                                <th class="custom">រាយមុខសេវាកម្ម</th>
                                <th class="custom">រយៈពេលបង់</th>
                                <th class="custom">ចំនួនទឹកប្រាក់</th>
                                <th class="custom">អ្នកទទូលបន្ទុក</th>
                                <th class="custom">ចាប់ផ្ដើមពីថ្ងៃទី</th>
                                <th class="custom">រហូតដល់ថ្ងៃទី</th>
                            </tr>
                            <tr v-for="(item, i) in list_item" :key="i">
                                <td class="custom">{{i + 1}}</td>
                                <td class="custom">{{item.item}}</td>
                                <td class="custom">{{item.term}} ខែ</td>
                                <td class="custom">$ {{item.balance}}</td>
                                <td class="custom">{{item.emp_name ==='គ្មានអ្នកទទួលបន្ទុក'?'--':item.emp_name}}</td>
                                <td class="custom">{{moment(item.date_pay).format('DD/MM/YYYY')}}</td>
                                <td class="custom">{{moment(item.next_date_pay).subtract(1, 'day').format('DD/MM/YYYY')}}</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td class="text-right pt-3" colspan="7">
                                    ម៉ោង {{moment().format('h:mm:ss A')}} ថ្ងៃទី {{moment().format('D')}} ខែ {{moment().format('M')}} ឆ្នាំ {{moment().format('Y')}}
                                </td>
                            </tr>
                            <tr>
                                <td class="text-right pt-3" colspan="7">
                                    បេឡា
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                        <table class="top-minus" style="margin-top: -51px;">
                            <tr>
                                <td class="pr-3"><b>ទឹកប្រាក់សរុប:</b></td>
                                <td>{{$formatter.format(master_item.total)}}</td>
                                <td class="pr-3"><b>បញ្ចុះតម្លៃ:</b></td>
                                <td>{{master_item.discount}} %</td>
                                <td class="pr-3"><b>ទឹកប្រាក់ត្រូវបង់:</b></td>
                                <td>{{$formatter.format(master_item.after)}}</td>
                            </tr>
                            <tr>
                                <td class="pr-3"><b>ទឹកប្រាក់ទទួល:</b></td>
                                <td>{{$formatter.format(master_item.receive_balance)}}</td>
                                <td class="pr-3"><b>ទឹកប្រាក់ជំពាក់:</b></td>
                                <td>{{$formatter.format(master_item.due_balance)}}</td>

                            </tr>
                        </table>
                    </div>
                </div>
                <div class="vx-row mt-3">
                    <div class="vx-col w-full">
                        <table>
                            <tr>
                                <td class="text-danger">
                                    1: ទឹកប្រាក់បង់ហើយមិនអាចដកវិញបានទេ
                                </td>
                            </tr>
                            <tr>
                                <td class="text-danger">
                                    2: សូមរក្សាបង្កាន់ដៃបង់ប្រាក់ដើម្បីផ្ទៀងផ្ទាត់
                                </td>
                            </tr>
                            <tr>
                                <td class="text-danger">
                                    3: តម្លៃខាងលើ គឺសម្រាប់តែសេវាកម្មអប់រំប៉ុណ្ណោះ ចំពោះការគ្រោះថ្នាក់ជាយថាហេតុជាបន្ទុករបស់ មាតាបិតា ឬអាណាព្យាបាលសិស្ស
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="vx-col w-full mt-3">
                        <table class="text-primary">
                            <tr>
                                <td><b>អាស័យដ្ឋាន:</b></td>
                                <td>
                                    ភូមិ ក្បាលស្ពាន ២ សង្កាត់ ប៉ោយប៉ែត ក្រុង ប៉ោយប៉ែត ខេត្ត បន្ទាយមានជ័យ
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>លេខទូរស័ព្ទ:</b></td>
                                <td>012 383 838 / 012 382 957 / 085 598 999</td>
                                <td><b>អ៊ីម៉ែល:</b> ponlokkhmerschool@gmail.com</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button icon="icon-printer" @click="printHtml" icon-pack="feather" type="relief">បោះពុម្ភ</vs-button>
            </div>
        </vx-card>
    </sweet-modal>
</template>

<script>
    import printJS from 'print-js';
    export default {
        name: "PrintInvoice",
        data() {
            return {
                master_item : [],
                list_item : [],
            }
        },
        methods: {
            show(master_item, items){
                this.moment.locale('en');
                this.$refs.print_invoice.open();
                this.master_item = master_item;
                this.list_item = items;
            },
            async printHtml() {
                printJS({printable: 'section-to-print', type: 'html',css:[
                    'https://fonts.googleapis.com/css?family=Battambang&display=swap',
                        'https://pks.siqware.com/css/main.css',
                        'https://pks.siqware.com/css/vuesax.css',
                        'https://pks.siqware.com/css/app.css'
                    ]})
            },
        },
    }
</script>

<style scoped>

</style>