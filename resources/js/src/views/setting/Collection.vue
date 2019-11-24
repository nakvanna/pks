<template>
    <div>
        <div class="flex mb-4">
            <vs-select
                    autocomplete
                    class="w-1/3 mr-2"
                    label="Group section"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.group_section"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getGroupSection" />
            </vs-select>
            <vs-select
                    autocomplete
                    class="w-1/3 mr-2"
                    label="Section"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.section"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getSection" />
            </vs-select>
            <vs-select
                    autocomplete
                    class="w-1/3"
                    label="Level"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.level"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getLevel" />
            </vs-select>
        </div>
        <div class="flex mb-4">
            <vs-select
                    autocomplete
                    class="w-1/3 mr-2"
                    label="Shift"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.shift"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getShift" />
            </vs-select>
            <vs-select
                    autocomplete
                    class="w-1/3 mr-2"
                    label="Class"
                    placeholder="ជ្រើសរើស"
                    v-model="collections.class_name"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in getStudyClass" />
            </vs-select>
            <vs-input class="w-1/3" placeholder="$500" label="Cost" v-model="collections.cost"></vs-input>
        </div>
        <div class="flex btn-group">
            <vs-button
                    @click="storeCollection" type="relief"
                    icon-pack="feather" icon="icon-plus-square"
                    v-if="is_update === false"
            >
                បន្ថែម
            </vs-button>
            <vs-button
                    color="warning" type="relief"
                    icon-pack="feather" icon="icon-edit"
                    v-if="is_update === true"
            >
                កែប្រែ
            </vs-button>
            <vs-button
                    @click="clearCollectionForm"
                    v-if="is_update === true" type="relief"
                    icon-pack="feather" icon="icon-package"
            >
                សម្អាត
            </vs-button>
        </div>
        <vs-divider/>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="getCollection">

            <template slot="thead">
                <vs-th sort-key="group_section">Group Section</vs-th>
                <vs-th sort-key="section">Section</vs-th>
                <vs-th sort-key="level">Level</vs-th>
                <vs-th sort-key="class_name">Class</vs-th>
                <vs-th sort-key="shift">Shift</vs-th>
                <vs-th sort-key="cost">Cost</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

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

                    <vs-td :data="data[indextr].cost">
                        {{ data[indextr].cost }}
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
        </div>
    </div>
</template>
<script>
    export default {
        name:'Section',
        data() {
            return {
                is_update: false,
                collections: {
                    group_section: '',
                    section: '',
                    level: '',
                    shift: '',
                    class_name: '',
                    cost: '',
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
                users: [
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "website": "hildegard.org",
                    },
                    {
                        "id": 2,
                        "name": "Ervin Howell",
                        "username": "Antonette",
                        "email": "Shanna@melissa.tv",
                        "website": "anastasia.net",
                    },
                ]
            }
        },

        computed: {
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
            }
        },
        methods: {
            storeCollection(){
                let self = this;
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
                        self.collections.group_section = '';
                        self.collections.section       = '';
                        self.collections.level         = '';
                        self.collections.shift         = '';
                        self.collections.class_name    = '';
                        self.collections.cost          = '';
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
                this.collections.group_section = this.selected[0].group_section;
                this.collections.section = this.selected[0].section;
                this.collections.level = this.selected[0].level;
                this.collections.class_name = this.selected[0].class_name;
                this.collections.shift = this.selected[0].shift;
                this.collections.cost = this.selected[0].cost;
                this.is_update = true;
                this.selected = [];
            },
            clearCollectionForm(){
                this.collections.group_section = '';
                this.collections.section       = '';
                this.collections.level         = '';
                this.collections.shift         = '';
                this.collections.class_name    = '';
                this.collections.cost          = '';
                this.is_update = false;
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
