<template>
    <div>
        <vx-input-group class="mb-base">
            <vs-input @keyup.enter="storeYear" class="inputx" placeholder="Year" v-model="name" />
            <template slot="append">
                <div class="append-text btn-addon">
                    <vs-button @click="storeYear" type="relief" icon-pack="feather" v-if="name !== ''" icon="icon-plus-square">បន្ថែម</vs-button>
                </div>
            </template>
        </vx-input-group>
        <vs-divider/>
        <vs-button @click="updateYear(selected[0].id, selected[0].name)" v-if="selected.length ===1" size="small" class="mb-2" icon="icon-save" icon-pack="feather" type="relief">ឆ្នាំបច្ចុប្បន្ន</vs-button>
        <vs-table multiple v-model="selected" pagination max-items="5" :data="getYears">

            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="name">Name</vs-th>
                <vs-th sort-key="current">Current</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>

                    <vs-td :data="data[indextr].name">
                        {{ data[indextr].name }}
                    </vs-td>

                    <vs-td v-if="data[indextr].current === true" :data="data[indextr].current">
                        <vs-chip color="success">
                            <span>ឆ្នាំសិក្សាបច្ចុប្បន្ន</span>
                        </vs-chip>
                    </vs-td>

                    <vs-td v-else :data="data[indextr].current">
                        <vs-chip color="danger">
                            <span>ឆ្នាំសិក្សាផ្សេងៗ</span>
                        </vs-chip>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <!--<vs-button @click="openAlert('danger')" class="mb-2" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2" v-if="selected.length">លុប</vs-button>-->
    </div>
</template>
<script>
    export default {
        name:'Section',
        data() {
            return {
                name: '',
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
        computed: {
            isSmallerScreen() {
                return this.$store.state.windowWidth < 768
            },
            getYears(){
                return this.$store.getters.get_years
            }
        },
        methods: {
            storeYear(){
                let self = this;
                if (self.name === ''){
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍បរាជ័យ',
                        text:'ទិន្នន័យមិនមាន!',
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-octagon',
                        position:'top-center'
                    });
                } else {
                    this.$vs.loading({
                        type:'material',
                    });
                    self.$store.dispatch('storeYear',{name:self.name}).then(function (data) {
                        if (data){
                            self.$vs.notify({
                                title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                                text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                                color:'primary',
                                iconPack: 'feather',
                                icon:'icon-check',
                                position:'top-center'
                            });
                            self.name = '';
                            self.$vs.loading.close();
                        }
                    })
                }
            },
            async updateYear(id, name){
                let self = this;
                this.$vs.loading({
                    type:'material',
                });
                const promises = self.getYears.map(async function (data) {
                    await self.$store.dispatch('updateYear', {current: false, id: data.id, name:data.name});
                    await self.$store.dispatch('updateYear', {current: true, id: id, name:name})
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                        text:'ទិន្នន័យសិស្សត្រូវបានបញ្ចូលក្នុងឆ្នាំសិក្សា!',
                        color:'success',
                        iconPack: 'feather',
                        icon:'icon-check',
                        position:'top-center'
                    });
                    self.selected = [];
                    self.$vs.loading.close()
                });
            },
            async destroyYear(){
                let vm = this;
                this.$vs.loading({
                    type:'material',
                });
                const promises = vm.selected.map(async function (data) {
                    await vm.$store.dispatch('destroyYear', data.id);
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
                this.destroyYear();
            },
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
