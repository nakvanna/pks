<template>
    <modal width="700" height="auto" :scrollable="true" :pivotY="0.2" :adaptive="true" :clickToClose="false"
           name="change-study-info">
        <div class="flex justify-end">
            <i @click="$modal.hide('change-study-info')" class="vs-icon vs-popup--close material-icons text-warning"
               style="background: rgb(255, 255, 255);">close</i>
        </div>
        <h4 class="ml-2"><u> ការសិក្សា</u></h4>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col lg:w-1/3 w-full">
                    <v-select v-validate="'required'" :clearable="false" name="year" v-model="data.year"
                              placeholder="ជ្រើសរើសឆ្នាំ" label="name" class="w-full" :options="getYears"/>
                    <span class="text-danger text-sm" v-show="errors.has('year')">{{ errors.first('year') }}</span>
                </div>
                <div class="vx-col md:w-1/3 w-full">
                    <flat-pickr class="w-full" v-model="data.date_change" placeholder="ថ្ងៃខែឆ្នាំប្តូរ"
                                name="date_change" v-validate="'required'"/>
                    <span class="text-danger text-sm" v-show="errors.has('date_change')">{{ errors.first('date_change') }}</span>
                </div>
            </div>
            <vs-divider/>
            <div class="vx-row">
                <div class="vx-col w-full mb-2" v-for="(item,index) in data.study_infos" :key="index">
                    <vx-input-group>
                        <v-select :name="`study_info-${index}`" v-validate="'required'" v-model="item.collection_id"
                                  placeholder="ជ្រើសរើសពត៍មានការសិក្សា" label="item_data"
                                  :options="filteredCollection"/>
                        <template slot="append" v-if="data.study_infos.length!==1">
                            <div class="append-text btn-addon">
                                <vs-button @click="minus(index)" icon-pack="feather" icon="icon-minus-square"
                                           color="warning" type="flat"></vs-button>
                            </div>
                        </template>
                    </vx-input-group>
                    <span class="text-danger text-sm" v-show="errors.has(`study_info-${index}`)">{{ errors.first(`study_info-${index}`) }}</span>
                </div>
                <div class="vx-col w-full">
                    <vs-button @click="plus" icon-pack="feather" type="line">បន្ថែមជួរ</vs-button>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="storeChangeStudyInfo" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក
                </vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';

    export default {
        name: "changeStudyInfo",
        components: {
            flatPickr
        },
        data() {
            return {
                checked: false,
                data: {
                    year: {name: '2020-2021', id: null},
                    date_change: null,
                    study_infos: [{collection_id: null}],
                    students: []
                }
            }
        },
        computed: {
            getYears() {
                return this.$store.getters.get_years;
            },
            getCollection() {
                return this.$store.getters.get_collections
            },
            filteredCollection() {
                let self = this;
                let data = self.getCollection.filter(function (x) {
                    return x.year === self.data.year.name
                });
                return data.map(function (x) {
                    return {
                        id: x.id,
                        item_data: `(${x.year})-${x.group_section}-${x.section}-${x.level}${x.class_name}`,
                        class_name:`${x.level}${x.class_name}`
                    };
                });
            }
        },
        methods: {
            show(data) {
                let self = this;
                self.$modal.show('change-study-info');
                self.data.students = data;
            },
            plus() {
                this.data.study_infos.push({collection_id: null})
            },
            minus(index) {
                this.data.study_infos.splice(index, 1)
            },
            clearForm() {
                this.checked = false;
                this.data = {
                    year: '',
                    date_pay: null,
                    last_date_pay: null,
                    study_infos: [{collection_id: null}],
                };
            },
            async storeChangeStudyInfo() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeChangeStudyInfo', self.data).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យបានបន្ថែម',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                                self.$emit('finished');
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនបានបន្ថែម',
                                    color: 'danger',
                                    iconPack: 'feather',
                                    icon: 'icon-message-square',
                                    position: 'top-center'
                                });
                            }
                            self.$vs.loading.close();
                        });
                    } else {
                        self.$vs.notify({
                            title: 'ប្រតិបត្តិការបរាជ័យ',
                            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                            color: 'danger',
                            iconPack: 'feather',
                            icon: 'icon-message-square',
                            position: 'top-center'
                        })
                    }
                })
            },
        },
    }
</script>

<style scoped>

</style>