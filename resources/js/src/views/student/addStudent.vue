<template>
    <vx-card no-shadow>
        <div class="vx-row">
            <div class="vx-col lg:w-1/2 w-full">
                <vs-input class="w-full mb-base" label-placeholder="ឈ្មោះខ្មែ" v-model="old_password" />
            </div>
            <div class="vx-col lg:w-1/2 w-full">
                <vs-input class="w-full mb-base" label-placeholder="ឈ្មោះឡាតាំង" v-model="new_password" />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col lg:w-1/4 w-full mb-2">
                <label class="ml-1">ភេទ</label>
                <ul class="flex mt-2">
                    <li class="mr-2">
                        <vs-radio v-model="gender" vs-value="ប្រុស">ប្រុស</vs-radio>
                    </li>
                    <li>
                        <vs-radio v-model="gender" vs-value="ស្រី">ស្រី</vs-radio>
                    </li>
                </ul>
            </div>
            <div class="vx-col lg:w-1/4 w-full">
                <label class="ml-1">ថ្ងៃខែឆ្នាំកំណើត</label>
                <flat-pickr class="w-full" :config="configdateTimePicker" v-model="date" placeholder="ថ្ងៃខែឆ្នាំកំណើត" />
            </div>
        </div>
        <vs-input class="w-full mb-base" label-placeholder="Confirm Password" v-model="confirm_new_password" />
        <!-- Save & Reset Button -->
        <div class="flex justify-end btn-group">
            <vs-button icon-pack="feather" type="relief" icon="icon-save">រក្សាទុក</vs-button>
            <vs-button icon-pack="feather" icon="icon-delete" type="relief" color="warning">សម្អាត</vs-button>
        </div>
    </vx-card>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    export default {
        name: "addStudent",
        components:{
            flatPickr
        },
        data() {
            return {
                gender: "ប្រុស",
                date: null,
                old_password: "",
                new_password: "",
                confirm_new_password: "",
                configdateTimePicker:{}
            }
        },
    }
</script>

<style scoped>

</style>