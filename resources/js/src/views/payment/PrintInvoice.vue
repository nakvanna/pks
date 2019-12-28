<template>
    <sweet-modal ref="print_invoice" title="Print Invoice" :blocking="true" :width="!mobilecheck()?'60%':''">
        <vx-card no-shadow>
            <div id="section-to-print" class="pb-4">
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <table class="w-full text-primary">
                            <tr>
                                <td class="w-1/3 print:w-1/3">

                                </td>
                                <td class="w-1/3 print:w-1/3">

                                </td>
                                <td class="w-1/3 print:w-1/3 text-right">
                                    <barcode class="d-inline" style="display: inline;" tag="img" text-aling="right" :value="123" :height="100">
                                        Show this if the rendering fails.
                                    </barcode>
                                </td>
                            </tr>
                        </table>
                    </div>
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
                                <td class="custom">{{item.emp_name}}</td>
                                <td class="custom">{{moment(item.date_pay).format('YYYY-MM-DD')}}</td>
                                <td class="custom">{{moment(item.next_date_pay).subtract(1, 'day').format('YYYY-MM-DD')}}</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td class="pt-3" colspan="7">
                                    <b>ទឹកប្រាក់សរុប:</b> {{$formatter.format(master_item.total)}}
                                    <b>បញ្ចុះតម្លៃ:</b> {{master_item.discount}} %
                                    <b>ទឹកប្រាក់ត្រូវបង់:</b> {{$formatter.format(master_item.after)}}
                                    <b>ទឹកប្រាក់ជំពាក់:</b>
                                </td>
                            </tr>
                            </tfoot>
                            <!--<tfoot>
                            <tr>
                                <td class="custom text-right" colspan="3"> <b>ទឹកប្រាក់សរុប:</b></td>
                                <td class="custom">
                                    <b>{{$formatter.format(master_item.total)}}</b>
                                </td>
                                <td colspan="3" class="text-center">
                                    ម៉ោង <b>{{moment().format('h:mm:ss A')}}</b> ថ្ងៃទីៈ <b>{{moment().format('D')}}</b> ខែ <b>{{moment().format('MMM')}}</b> ឆ្នាំ <b>{{moment().format('Y')}}</b>
                                </td>
                            </tr>
                            <tr>
                                <td class="custom text-right" colspan="3"> <b>បញ្ចុះតម្លៃ:</b></td>
                                <td class="custom">
                                    <b>{{master_item.discount}} %</b>
                                </td>
                                <td></td>
                                <td class="text-center">
                                    <h5>បេឡា</h5>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="custom text-right" colspan="3"> <b>ទឹកប្រាក់ត្រូវបង់:</b></td>
                                <td class="custom">
                                    <b>{{$formatter.format(master_item.after)}}</b>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tfoot>-->
                        </table>
                    </div>
                </div>
                <div class="vx-row mt-3">
                    <div class="vx-col w-full">
                        <table>
                            <tr>
                                <td class="text-danger">
                                    1: ទឹកប្រាក់បង់ហើយមិនអាចដកវិញបានទេ 2: សូមរក្សាបង្កាន់ដៃបង់ប្រាក់ដើម្បីផ្ទៀងផ្ទាត់
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
                                <td><b>អ៊ីម៉ែល:</b></td>
                                <td>ponlorkkhmerschool@gmail.com</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>096 799 9999 / 068 598 999</td>
                                <td></td>
                                <td></td>
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

            //print
            async _print() {
                const el = document.querySelector('#print-invoice');
                const options = {
                    type: 'dataURL'
                };
                return await this.$html2canvas(el, options);
            },
            async printHtml() {
                /*let image = await this._print();
                printJS(image, 'image')*/
                printJS({printable: 'section-to-print', type: 'html',css:[
                    'https://fonts.googleapis.com/css?family=Battambang&display=swap',
                        'http://localhost:3000/css/main.css',
                        'http://localhost:3000/css/vuesax.css',
                        'http://localhost:3000/css/app.css'
                    ]})
            },
        },
    }
</script>

<style scoped>

</style>