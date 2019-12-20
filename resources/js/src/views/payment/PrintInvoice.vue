<template>
    <modal width="60%" height="auto" :scrollable="true" :pivotY="0.07" :adaptive="true" :clickToClose="false" name="print-invoice">
        <div class="flex justify-end">
            <i @click="$modal.hide('print-invoice')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
                <div class="vx-row">
                    <div class="vx-col md:w-3/4 flex mt-10 mb-10">
                        <h4>ឈ្មោះអ្នកបង់ប្រាក់: {{master_item.name}} {{master_item.latin}}</h4>
                    </div>
                    <div class="vx-col md:w-1/4 flex mt-10">
                        <h4>ភេទ: {{master_item.gender}}</h4>
                    </div>
                </div>

                <vs-table max-items="5" :data="list_item">

                    <template slot="thead">
                        <vs-th >ល.រ</vs-th>
                        <vs-th >រាយមុខសេវាកម្ម</vs-th>
                        <vs-th >រយៈពេលបង់</vs-th>
                        <vs-th >ចំនួនទឹកប្រាក់</vs-th>
                        <vs-th >អ្នកទទូលបន្ទុក</vs-th>
                        <vs-th >ថ្ងៃទីបង់ប្រាក់</vs-th>
                        <vs-th >ថ្ងៃទីបង់បន្ទាប់</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                            <vs-td>
                                {{ indextr + 1 }}
                            </vs-td>

                            <vs-td >
                                {{ data[indextr].item }}
                            </vs-td>

                            <vs-td >
                                {{ data[indextr].term }} ខែ
                            </vs-td>

                            <vs-td >
                                $ {{ data[indextr].balance }}
                            </vs-td>

                            <vs-td>
                                {{ data[indextr].emp_name }}
                            </vs-td>

                            <vs-td >
                                {{ data[indextr].date_pay }}
                            </vs-td>

                            <vs-td >
                                {{ data[indextr].next_date_pay }}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>

                <h6 class="mt-4 mb-2">ទឹកប្រាក់សរុប: <b>${{master_item.total}}</b></h6>
                <h6 class="mb-2">បញ្ចុះតម្លៃ: <b>{{master_item.discount}} %</b></h6>
                <h6>ទឹកប្រាក់ត្រូវបង់: <b>${{master_item.after}}</b></h6>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button icon="icon-printer" @click="handlePrintInvoice" icon-pack="feather" type="relief">បោះពុម្ភ</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
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
            handlePrintInvoice(){
            },
        }
    }
</script>

<style scoped>

</style>