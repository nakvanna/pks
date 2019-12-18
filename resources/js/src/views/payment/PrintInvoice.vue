<template>
    <modal width="60%" height="auto" :scrollable="true" :pivotY="0.07" :adaptive="true" :clickToClose="false" name="print-invoice">
        <div class="flex justify-end">
            <i @click="$modal.hide('print-invoice')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>

            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button icon="icon-printer" icon-pack="feather" type="relief">បោះពុម្ភ</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    export default {
        name: "PrintInvoice",
        methods: {
            show(){
                this.$modal.show('print-invoice');
            }
        }
    }
</script>

<style scoped>

</style>