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
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="getYears">

            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="name">Name</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>

                    <vs-td :data="data[indextr].name">
                        {{ data[indextr].name }}
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
        async created() {
            // await this.$store.dispatch('fetchYears');
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
