<template>
    <div>
       <!--Create popup-->
        <Create></Create>
       <!--Create popup-->
        <vs-divider/>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="getEmployees">

            <template slot="thead">
                <vs-th sort-key="kh_name">ឈ្មោះ</vs-th>
                <vs-th sort-key="en_name">ឡាតាំង</vs-th>
                <vs-th sort-key="gender">ភេទ</vs-th>
                <vs-th sort-key="position">មុខតំណែង</vs-th>
                <vs-th sort-key="degree_note">កម្រិតសម្គាល់</vs-th>
                <vs-th sort-key="start_work">ថ្ងៃចូលធ្វើការ</vs-th>
                <vs-th sort-key="contact">ទំនាក់ទំនង</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].kh_name">
                        {{ data[indextr].kh_name }}
                    </vs-td>

                    <vs-td :data="data[indextr].en_name">
                        {{ data[indextr].en_name }}
                    </vs-td>

                    <vs-td :data="data[indextr].gender">
                        {{ data[indextr].gender }}
                    </vs-td>

                    <vs-td :data="data[indextr].position">
                        {{ data[indextr].position }}
                    </vs-td>

                    <vs-td :data="data[indextr].degree_note">
                        {{ data[indextr].degree_note }}
                    </vs-td>

                    <vs-td :data="data[indextr].start_work.substr(0, 10)">
                        {{ data[indextr].start_work.substr(0, 10) }}
                    </vs-td>

                    <vs-td :data="data[indextr].contact.substr(0, 30)">
                        {{ data[indextr].contact.substr(0, 30)+ '...' }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <div class="flex btn-group">
            <vs-button
                    @click="openAlert('danger')" class="mb-2" color="danger"
                    type="relief" icon-pack="feather" icon="icon-trash-2" v-if="selected.length"
            >
                លុប
            </vs-button>
            <vs-button
                    class="mb-2" @click="showEmployee" v-if="selected.length === 1"
                    type="relief" icon-pack="feather" icon="icon-plus-square"
            >
                បង្ហាញ
            </vs-button>
        </div>
        <!--Pop show employee-->
        <div class="demo-alignment">
            <vs-popup fullscreen title="fullscreen" :active.sync="showEmployeePopup">
                <vs-row>
                    <vs-col vs-w="3">
                        <div class="con-example-images">
                            <img style="height: 250px" class="p-10" src="https://picsum.photos/400/400?image=32"/>
                        </div>
                    </vs-col>
                    <vs-col vs-w="9" class="mt-10 bg-primary">
                        <div class="flex mb-10">
                            <div class="w-1/3">
                                <i>ឈ្មោះខ្មែរ:<b>សំគិស រុងរឿង</b></i>
                            </div>
                            <div class="w-1/3">
                                <i>ឈ្មោះឡាតាំង:<b>ABC LEO</b></i>
                            </div>
                            <div class="w-1/3">
                                <i>ភេទ:<b>Male</b></i>
                            </div>
                        </div>
                        <div class="flex mb-10">
                            <div class="w-1/3">
                                <i>ថ្ងៃខែឆ្នាំកំណើត:<b> 2020/20/10</b></i>
                            </div>
                            <div class="w-1/3">
                                <i>តួនាទី:<b> រើសអេតចាយ</b></i>
                            </div>
                            <div class="w-1/3">
                                <i>គម្រិតសម្គាល់:<b> លំដាប់ ISO 2020</b></i>
                            </div>
                        </div>
                        <div class="flex mb-10">
                            <div class="w-1/3">
                                <i>ថ្ងៃខែឆ្នាំចូលធ្វើការ:<b>  2020/20/10</b></i>
                            </div>
                            <div class="2/3">
                                <i>ទំនាក់ទំនង់:</i><br>
                                <b :key="index" v-for="(item, index) in employees.contact.split('\n')"> {{item}}<br></b>
                            </div>
                        </div>
                    </vs-col>
                </vs-row>
                <vs-row>
                    <vs-col vs-w="12">
                        <h3><i>ទំនាក់ទំនង់:</i></h3>
                    </vs-col>
                </vs-row>
            </vs-popup>
        </div>
    </div>
</template>
<script>
    import Datepicker from 'vuejs-datepicker';
    import Create from './Create';
    export default {
        components: {
            Datepicker,
            Create
        },
        name:'Employee',
        data() {
            return {
                date: null,
                users: [],
                selected: [],
                employees: {
                    contact: '',
                },
                is_update: false,
                showEmployeePopup: false,
            }
        },
        computed: {
            isSmallerScreen() {
                return this.$store.state.windowWidth < 768
            },
            getEmployees(){
                return this.$store.getters.get_employees
            },
            placeholder() {
                return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png'
            }
        },
        async created() {
            await this.$store.dispatch('fetchEmployees');
        },
        methods: {
            async destroyEmployee(){
                let vm = this;
                this.$vs.loading({
                    type:'material',
                });
                const promises = vm.selected.map(async function (data) {
                    await vm.$store.dispatch('destroyEmployee', data.id);
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
                this.destroyEmployee();
            },
            editEmployee(){
                this.services.id      = this.selected[0].id;
                this.services.type    = this.selected[0].type;
                this.services.service = this.selected[0].service;
                this.services.cost    = this.selected[0].cost;
                this.is_update        = true;
                this.selected         = [];
            },
            updateEmployee(){
                let self = this;
                this.$vs.loading({
                    type:'material',
                });
                self.$store.dispatch('updateEmployee', self.services).then(function (data) {
                    if (data){
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបានកែប្រែ',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.clearEmployeeForm();
                        self.$vs.loading.close();
                    }
                })
            },
            showEmployee(){
              this.showEmployeePopup=true;
              this.employees.contact = this.selected[0].contact;
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
    .con-example-images{
        height: 500px;
        overflow: auto
    }



</style>
