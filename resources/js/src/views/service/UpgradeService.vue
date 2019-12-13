<template>
    <modal width="700" height="auto" :scrollable="true" :pivotY="0.2" :adaptive="true" :clickToClose="false" name="upgradeService">
        <div class="flex justify-end">
            <i @click="$modal.hide('upgradeService')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <h4 class="ml-2"><u> សេវាកម្ម</u></h4>
        <vx-card no-shadow>
            <div class="vx-row">
                <vs-select
                        autocomplete
                        class="w-full"
                        placeholder="ឆ្នាំសិក្សា"
                        type="primary"
                        v-model="upgrade_service.year"
                >
                    <vs-select-item :key="index" v-for="(item, index) in getYears"  :value="item.name" :text="item.name" />
                </vs-select>
            </div>
            <br>
            <div class="vx-row">
                <vs-input class="w-1/4" placeholder="$500" label="តម្លៃ ១ខែ" v-model="upgrade_service.cost_one"></vs-input>
                <vs-input class="w-1/4" placeholder="$500" label="តម្លៃ ១ត្រីមាស" v-model="upgrade_service.cost_three"></vs-input>
                <vs-input class="w-1/4" placeholder="$500" label="តម្លៃ ១ឆមាស" v-model="upgrade_service.cost_six"></vs-input>
                <vs-input class="w-1/4" placeholder="$500" label="តម្លៃ ១ឆ្នាំ" v-model="upgrade_service.cost_twelve"></vs-input>
            </div>
            <vs-divider />

            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="storeService" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    export default {
        name: "UpgradeService",
        data() {
            return {
                upgrade_service : [{
                    year: '',
                    cost_one: '',
                    cost_three: '',
                    cost_six: '',
                    cost_twelve: ''
                }],
                services: [],
            }
        },
        computed: {
            getYears(){
                return this.$store.getters.get_years;
            },
        },
        async created (){
            await this.$store.dispatch('fetchYears');
        },
        methods: {
            show(selected){
                this.$modal.show('upgradeService');
                this.services = selected;
            },
            async storeService(){
                let self = this;
                let vm = this.upgrade_service;
                if(vm.year === '' || vm.cost_one === '' || vm.cost_three === '' || vm.cost_six === '' || vm.cost_twelve === ''){
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍បរាជ័យ',
                        text:'ទិន្នន័យមិនមានគ្រប់គ្រាន់!',
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-octagon',
                        position:'top-center'
                    });
                }else {
                    self.$vs.loading({
                        type:'material',
                    });
                    const promises = self.services.map(async function (data) {
                        data.year        = self.upgrade_service.year;
                        data.cost_one    = self.upgrade_service.cost_one;
                        data.cost_three  = self.upgrade_service.cost_three;
                        data.cost_six    = self.upgrade_service.cost_six;
                        data.cost_twelve = self.upgrade_service.cost_twelve;
                        self.$store.dispatch('storeService', data);
                    });
                    await Promise.all(promises).then(function () {
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបាន Upgrade',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.$vs.loading.close();
                    })
                }
            },
        }
    }
</script>

<style scoped>

</style>