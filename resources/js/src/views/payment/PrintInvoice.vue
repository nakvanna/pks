<template>
    <modal width="1000" height="auto" :scrollable="true" :pivotY="0.07" :adaptive="true" :clickToClose="false" name="print-invoice">
        <div class="flex justify-end">
            <i @click="$modal.hide('print-invoice')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div id="print-invoice">
                <div class="vx-row">
                    <img class="pl-4" style="width: 100%" src="images/placeholder/pks.png" alt="">
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-2/5 flex mt-10 mb-10">
                        <h4>ឈ្មោះ​​ ៖​ {{master_item.name}}</h4>
                    </div>
                    <div class="vx-col md:w-2/5 flex mt-10 mb-10">
                        <h4>ឡាតាំង ៖ {{master_item.latin}}</h4>
                    </div>
                    <div class="vx-col md:w-1/5 flex mt-10">
                        <h4>ភេទ: {{master_item.gender}}</h4>
                    </div>
                </div>

                <table>
                    <tr>
                        <th>ល.រ</th>
                        <th>រាយមុខសេវាកម្ម</th>
                        <th>រយៈពេលបង់</th>
                        <th>ចំនួនទឹកប្រាក់</th>
                        <th>អ្នកទទូលបន្ទុក</th>
                        <th>ចាប់ផ្ដើមពីថ្ងៃទី</th>
                        <th>រហូតដល់ថ្ងៃទី</th>
                    </tr>
                    <tr v-for="(item, i) in list_item" :key="i">
                        <td>{{i + 1}}</td>
                        <td>{{item.item}}</td>
                        <td>{{item.term}}</td>
                        <td>{{item.balance}}</td>
                        <td>{{item.emp_name}}</td>
                        <td>{{item.date_pay}}</td>
                        <td>{{item.next_date_pay}}</td>
                    </tr>
                </table>

                <div class="vx-row">
                    <div class="vx-col md:w-1/3">
                        <h4 class="mt-4 mb-2"><b>ទឹកប្រាក់សរុប:</b> {{$formatter.format(master_item.total)}}</h4>
                        <h4 class="mb-2"><b>បញ្ចុះតម្លៃ:</b> {{master_item.discount}} %</h4>
                        <h4><b>ទឹកប្រាក់ត្រូវបង់:</b> {{$formatter.format(master_item.after)}}</h4>
                    </div>
                    <div class="vx-col md:w-2/3 text-right mt-4">
                        <h5>ម៉ោង​__________ថ្ងៃទីៈ______ខែ________ឆ្នាំ__________</h5>
                        <h2 class="mt-4" style="text-align: center; padding-left: 40%">បេឡា</h2>
                    </div>
                </div>
                <div class="vx-row mt-4">
                    <div class="vx-col md:w-2/3">
                        <h6 class="text-danger">1: ទឹកប្រាក់បង់ហើយមិនអាចដកវិញបានទេ 2: សូមរក្សាបង្កាន់ដៃបង់ប្រាក់ដើម្បីផ្ទៀងផ្ទាត់​</h6>
                        <h6 class="text-danger mt-2">3: តម្លៃខាងលើ គឺសម្រាប់តែសេវាកម្មអប់រំប៉ុណ្ណោះ ចំពោះការគ្រោះថ្នាក់ជាយថាហេតុជាបន្ទុករបស់ មាតាបិតា ឬអាណាព្យាបាលសិស្ស</h6>
                    </div>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button icon="icon-printer" @click="printHtml" icon-pack="feather" type="relief">បោះពុម្ភ</vs-button>
            </div>
        </vx-card>
    </modal>
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
                this.$modal.show('print-invoice');
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
                let image = await this._print();
                printJS(image, 'image')
            },
        }
    }
</script>

<style scoped>
    table, td, th {
        border: 1px solid #ddd;
        text-align: left;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        padding: 10px;
    }
</style>