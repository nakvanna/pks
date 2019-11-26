<template>
    <div>
        <div class="flex mb-4">
            <vs-input class="w-full" label-placeholder="Shift" v-model="shifts.name"/>
        </div>
        <div class="flex mb-4">
            <vs-input class="w-1/3 mr-2" label-placeholder="Start" v-model="shifts.start_time"></vs-input>
            <vs-input class="w-1/3 mr-2" label-placeholder="End" v-model="shifts.end_time"></vs-input>
            <vs-input class="w-1/3" label-placeholder="Duration" v-model="shifts.duration"></vs-input>
        </div>
        <div class="flex">
            <vs-button
                    v-if="shifts.name.length && shifts.start_time.length && shifts.end_time.length && shifts.duration.length"
                    @click="storeShift"
                    type="relief"
                    icon-pack="feather"
                    icon="icon-plus-square"
            >
                បន្ថែម
            </vs-button>
        </div>
        <vs-divider/>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="getShift">

            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="start_time">Start</vs-th>
                <vs-th sort-key="end_time">End</vs-th>
                <vs-th sort-key="duration">Duration</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>

                    <vs-td :data="data[indextr].name">
                        {{ data[indextr].name }}
                    </vs-td>

                    <vs-td :data="data[indextr].start_time">
                        {{ data[indextr].start_time }}
                    </vs-td>

                    <vs-td :data="data[indextr].end_time">
                        {{ data[indextr].end_time }}
                    </vs-td>

                    <vs-td :data="data[indextr].duration">
                        {{ data[indextr].duration }}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>
        <vs-button
                @click="openAlert('danger')" class="mb-2" color="danger" type="relief"
                icon-pack="feather" icon="icon-trash-2" v-if="selected.length"
        >
            លុប
        </vs-button>
    </div>
</template>
<script>
    export default {
        name:'Section',
        data() {
            return {
                shifts: {
                    name: '',
                    start_time: '',
                    end_time: '',
                    duration: '',
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
        computed: {
            isSmallerScreen() {
                return this.$store.state.windowWidth < 768
            },
            getShift(){
                return this.$store.getters.get_shifts
            }
        },
        async created() {
            // await this.$store.dispatch('fetchShifts');
        },
        methods: {
            storeShift(){
                let self = this;
                this.$vs.loading({
                    type:'material',
                });
                self.$store.dispatch('storeShift', this.shifts).then(function (data) {
                    if (data){
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.shifts.name = '';
                        self.shifts.start_time = '';
                        self.shifts.end_time = '';
                        self.shifts.duration = '';
                        self.$vs.loading.close();
                    }
                })
            },
            async destroyShift(){
                let vm = this;
                this.$vs.loading({
                    type:'material',
                });
                const promises = vm.selected.map(async function (data) {
                    await vm.$store.dispatch('destroyShift', data.id);
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
                this.destroyShift();
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
