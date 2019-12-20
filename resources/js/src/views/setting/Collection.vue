<template>
    <div>
        <div class="flex mb-4">
            <vs-select
                    autocomplete
                    class="w-1/4 mr-2"
                    label="ឆ្នាំសិក្សា"
                    placeholder="ឆ្នាំសិក្សា"
                    type="primary"
                    v-model="collections.year"
            >
                <vs-select-item :key="index" v-for="(item, index) in getYears"  :value="item.name" :text="item.name" />
            </vs-select>
            <vs-select
                    autocomplete
                    class="w-1/4 mr-2"
                    label="ផ្នែកសិក្សា"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.group_section"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getGroupSection" />
            </vs-select>
            <vs-select
                    autocomplete
                    class="w-1/4 mr-2"
                    label="កម្រិតសិក្សា"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.section"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getSection" />
            </vs-select>
            <vs-select
                    autocomplete
                    class="w-1/4 mr-2"
                    label="វេណ"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.shift"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getShift" />
            </vs-select>
        </div>
        <div class="flex mb-4">
            <vs-select
                    autocomplete
                    class="w-1/3"
                    label="ថ្នាក់ទី"
                    placeholder="កម្រិត"
                    v-model="collections.level"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getLevel" />
            </vs-select>
            <vs-select
                    autocomplete
                    class="w-1/3 mr-2"
                    label="ថ្នាក់"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.class_name"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getStudyClass" />
            </vs-select>
            <vs-input class="w-1/3" placeholder="$500" label="តម្លៃ ១ខែ" v-model="collections.cost_one"></vs-input>
            <vs-input class="w-1/3" placeholder="$500" label="តម្លៃ ១ត្រីមាស" v-model="collections.cost_three"></vs-input>
            <vs-input class="w-1/3" placeholder="$500" label="តម្លៃ ១ឆមាស" v-model="collections.cost_six"></vs-input>
            <vs-input class="w-1/3" placeholder="$500" label="តម្លៃ ១ឆ្នាំ" v-model="collections.cost_twelve"></vs-input>
        </div>
        <div class="row flex">
            <vs-select
                    autocomplete
                    class="w-1/3 mr-2"
                    label="គ្រូបន្ទុកថ្នាក់"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.employee_id"
            >
                <vs-select-item  value="0" text="None"  />
                <vs-select-item v-if="item.position.toString().toUpperCase() === 'TEACHER'" :key="index" :value="item.id" :text="item.kh_name + ' ' + item.en_name" v-for="(item,index) in getEmployees" />
            </vs-select>
        </div>
        <div class="flex btn-group mt-4">
            <vs-button
                    @click="storeCollection" type="relief"
                    icon-pack="feather" icon="icon-plus-square"
                    v-if="is_update === false"
            >
                បន្ថែម
            </vs-button>
            <vs-button
                    @click="updateCollection"
                    color="warning" type="relief"
                    icon-pack="feather" icon="icon-edit"
                    v-if="is_update === true"
            >
                កែប្រែ
            </vs-button>
            <vs-button
                    @click="clearCollectionForm"
                    v-if="is_update === true" type="relief"
                    icon-pack="feather" icon="icon-refresh-ccw"
            >
                សម្អាត
            </vs-button>
        </div>
        <vs-divider/>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="getCollection">

            <template slot="thead">
                <vs-th sort-key="year">ឆ្នាំសិក្សា</vs-th>
                <vs-th sort-key="group_section">ផ្នែកសិក្សា</vs-th>
                <vs-th sort-key="section">កម្រិតសិក្សា</vs-th>
                <vs-th sort-key="level">កម្រិត</vs-th>
                <vs-th sort-key="class_name">ថ្នាក់</vs-th>
                <vs-th sort-key="shift">វេណ</vs-th>
                <vs-th sort-key="cost_one">តម្លៃ ១ខែ</vs-th>
                <vs-th sort-key="cost_three">តម្លៃ ១ត្រីមាស</vs-th>
                <vs-th sort-key="cost_six">តម្លៃ ១ឆមាស</vs-th>
                <vs-th sort-key="cost_twelve">តម្លៃ ១ឆ្នាំ</vs-th>
                <vs-th sort-key="employee_name">គ្រូបន្ទុកថ្នាក់</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].year">
                        {{ data[indextr].year }}
                    </vs-td>

                    <vs-td :data="data[indextr].group_section">
                        {{ data[indextr].group_section }}
                    </vs-td>

                    <vs-td :data="data[indextr].section">
                        {{ data[indextr].section }}
                    </vs-td>

                    <vs-td :data="data[indextr].level">
                        {{ data[indextr].level }}
                    </vs-td>

                    <vs-td :data="data[indextr].class_name">
                        {{ data[indextr].class_name }}
                    </vs-td>

                    <vs-td :data="data[indextr].shift">
                        {{ data[indextr].shift }}
                    </vs-td>

                    <vs-td :data="data[indextr].cost_one">
                       $ {{ data[indextr].cost_one }}
                    </vs-td>

                    <vs-td :data="data[indextr].cost_three">
                       $ {{ data[indextr].cost_three }}
                    </vs-td>

                    <vs-td :data="data[indextr].cost_six">
                       $ {{ data[indextr].cost_six }}
                    </vs-td>

                    <vs-td :data="data[indextr].cost_twelve">
                        $ {{ data[indextr].cost_twelve }}
                    </vs-td>

                    <vs-td :data="data[indextr].employee_name">
                        {{ data[indextr].employee_name }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <div class="flex btn-group">
            <vs-button
                    @click="openAlert('danger')" class="mb-2" color="danger"
                    type="relief" icon-pack="feather" icon="icon-trash-2"
                    v-if="selected.length"
            >
                លុប
            </vs-button>
            <vs-button
                    @click="editCollection"
                    color="warning" class="mb-2" v-if="selected.length === 1"
                    type="relief" icon-pack="feather" icon="icon-edit"
            >
                កែប្រែ
            </vs-button>
            <vs-button
                    @click="$refs.UpgradeCollection.show(selected)"
                    color="primary" class="mb-2" v-if="selected.length"
                    type="relief" icon-pack="feather" icon="icon-edit"
            >
                Upgrade
            </vs-button>
        </div>
        <!--Upgrade Collection-->
        <UpgradeCollection ref="UpgradeCollection"></UpgradeCollection>
    </div>
</template>
<script>
    import UpgradeCollection from './UpgradeCollection'
    export default {
        name:'Collection',
        components: {
            UpgradeCollection
        },
        data() {
            return {
                is_update: false,
                collections: {
                    id: '',
                    year: '',
                    group_section: '',
                    section: '',
                    level: '',
                    shift: '',
                    class_name: '',
                    cost_one: '',
                    cost_three: '',
                    cost_six: '',
                    cost_twelve: '',
                    employee_id: '',
                },
                selected: [],
                'tableList': [
                    'vs-th: Component',
                    'vs-tr: Component',
                    'vs-td: Component',
                    'thread: Slot',
                    'tbody: Slot',
                    'header: Slot'
                ],
            }
        },

        async created (){
            await this.$store.dispatch('fetchYears'); /*Fetch year*/
            await this.$store.dispatch('fetchEmployees');
        },
        computed: {
            getYears(){
                return this.$store.getters.get_years;
            },
            isSmallerScreen() {
                return this.$store.state.windowWidth < 768
            },
            getGroupSection(){
                return this.$store.getters.get_group_sections
            },
            getSection(){
                return this.$store.getters.get_sections
            },
            getLevel(){
                return this.$store.getters.get_levels
            },
            getShift(){
                return this.$store.getters.get_shifts
            },
            getStudyClass(){
                return this.$store.getters.get_study_classes
            },
            getCollection(){
                return this.$store.getters.get_collections
            },
            getEmployees(){
                return this.$store.getters.get_employees
            },
        },
        methods: {
            storeCollection(){
                let self = this;
                let vm = this.collections;
                if(vm.year === '' || vm.group_section === '' || vm.section === '' || vm.level === '' || vm.shift === '' || vm.class_name === '' || vm.cost_one === '' || vm.cost_three === '' || vm.cost_six === '' || vm.cost_twelve === ''){
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
                    self.$store.dispatch('storeCollection', this.collections).then(function (data) {
                        if (data){
                            self.$vs.notify({
                                title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                                text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                                color:'primary',
                                iconPack: 'feather',
                                icon:'icon-check',
                                position:'top-center'
                            });
                            self.$vs.loading.close();
                        }
                    })
                }
            },
            updateCollection(){
                let self = this;
                this.$vs.loading({
                    type:'material',
                });
                self.$store.dispatch('updateCollection', self.collections).then(function (data) {
                    if (data){
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបានកែប្រែ',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.clearCollectionForm();
                        self.$vs.loading.close();
                    }
                })
            },
            async destroyCollection(){
                let vm = this;
                this.$vs.loading({
                    type:'material',
                });
                const promises = vm.selected.map(async function (data) {
                    await vm.$store.dispatch('destroyCollection', data.id);
                });
                await Promise.all(promises).then(function () {
                    vm.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                        text:'ទិន្នន័យត្រូវបានលុប!',
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-check',
                        position:'top-center'
                    });
                    vm.selected = [];
                    vm.$vs.loading.close()
                })
            },
            openAlert(color){
                this.colorAlert = color;
                this.$vs.dialog({
                    color:this.colorAlert,
                    title: 'លុបទិន្នន័យ',
                    text: 'តើអ្នកប្រាកដជាចង់លុបឬ?',
                    accept:this.acceptAlert
                })
            },
            acceptAlert(){
                this.destroyCollection();
            },
            editCollection(){
                var vm = this.collections;
                var sl = this.selected[0];
                vm.id            = sl.id;
                vm.year          = sl.year;
                vm.group_section = sl.group_section;
                vm.section       = sl.section;
                vm.level         = sl.level;
                vm.class_name    = sl.class_name;
                vm.shift         = sl.shift;
                vm.cost_one      = sl.cost_one;
                vm.cost_three    = sl.cost_three;
                vm.cost_six      = sl.cost_six;
                vm.cost_twelve   = sl.cost_twelve;
                vm.employee_id   = sl.employee_id;
                this.is_update   = true;
                this.selected    = [];
            },
            clearCollectionForm(){
                var vm = this.collections;
                vm.year          = '';
                vm.group_section = '';
                vm.section       = '';
                vm.level         = '';
                vm.shift         = '';
                vm.class_name    = '';
                vm.cost_one      = '';
                vm.cost_three    = '';
                vm.cost_six      = '';
                vm.cost_twelve   = '';
                vm.employee_id   = '';
                this.is_update   = false;
            }
        }
    }
</script>

<style lang="scss">
    #profile-tabs {
        .vs-tabs--content {
            padding: 0;
        }
    }
</style>
