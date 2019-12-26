<template>
    <sweet-modal ref="due_history" title="ទូទាត់ការជំពាក់" :blocking="true" :width="!mobilecheck()?'90%':''">
        <vx-card no-shadow>
            <div class="w-1/2 mb-3">
                <h5>លេខវិក័យបត្រ: <b>{{preFixZero(invoice_id, 7)}}</b>  ប្រាក់នៅជំពាក់:​ <b>{{$formatter.format(total_due)}}</b></h5>
            </div>
            <div class="flex">
                <div class="w-1/2 mr-2">
                    <flat-pickr class="w-full mr-2"  v-model="date_reduce_due" placeholder="ថ្ងៃបង់លុយ" />
                </div>
                <div class="w-1/2 mr-2">
                    <vs-input-number label="សាច់ប្រាក់សង $:" v-model="pay_due" mix="0" :max="total_due" icon-inc="expand_less" icon-dec="expand_more"/>
                </div>
            </div>
            <div class="w-full mt-3">
                <vs-textarea label="Note" v-model="desc" />
            </div>

            <vs-table :data="get_dueHistory">
                <template slot="thead">
                    <vs-th sort-key="indextr">ល.រ</vs-th>
                    <vs-th sort-key="pay_due">ចំនូនសង</vs-th>
                    <vs-th sort-key="desc">ពិពណ៌នា</vs-th>
                    <vs-th sort-key="date_reduce_due">ថ្ងៃទីសង</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                        <vs-td :data="indextr">
                            {{ indextr + 1}}
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

            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button icon="icon-printer" @click="storeDueHistory" icon-pack="feather" type="relief" v-if="total_due > 0">សងលុយ</vs-button>
            </div>
        </vx-card>
    </sweet-modal>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.min.css';
    export default {
        name: "DueHistory",
        components: {
            flatPickr
        },
        data(){
            return {
                date_reduce_due: null,
                pay_due: 0,
                desc: '',
                invoice_id: null,
                total_due: 0,
            }
        },
        computed: {
            get_dueHistory(){
                return this.$store.getters.get_due_histories;
            },
            get_SumRow(){
                var x = 0;
                this.get_dueHistory.map(function (data) {
                    x += parseFloat(data.pay_due);
                });
                return x;
            },
        },
        methods: {
            preFixZero(number, length){
                var str = '' + number;
                while (str.length < length) {
                    str = '0' + str;
                }
                return str;
            },
            async show(inv_id, due_bal){
                this.total_due = (-1) * due_bal;
                this.invoice_id = inv_id;
                this.$refs.due_history.open();
                await this.$store.dispatch('fetchDueHistoryOnly', inv_id);
                this.total_due -= this.get_SumRow;
            },
            async storeDueHistory(){
                let self = this;
                if(self.date_reduce_due !== null || self.pay_due > 0) {
                    self.$vs.loading({
                        type:'material',
                    });
                    await self.$store.dispatch('storeDueHistory', {
                        invoice_id: self.invoice_id, date_reduce_due: self.date_reduce_due,
                        pay_due: self.pay_due, desc: self.desc
                    }).then(function(data_res) {
                        if(data_res){
                            self.$vs.loading.close();
                        }
                    })
                }
            },
        }
    }
</script>

<style scoped>

</style>