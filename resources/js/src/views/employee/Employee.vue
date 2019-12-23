<template>
    <vx-card no-shadow>
       <!--Create popup-->
        <Create ref="createEmployee"></Create>
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
            <vs-button
                    @click="showCreateEmployee"
                    color="warning" class="mb-2" v-if="selected.length === 1"
                    type="relief" icon-pack="feather" icon="icon-edit"
            >
                កែប្រែ
            </vs-button>
        </div>
        <!--Pop show employee-->
        <div class="demo-alignment">
            <vs-popup fullscreen title="ពត៍មានលម្អិត" :active.sync="showEmployeePopup">
                <div class="vx-row mt-10">
                    <div class="vx-col md:w-full">
                        <h4>អត្តលេខ: PKS-{{show_employees.id}}</h4>
                    </div>
                </div>
                <div class="vx-row mt-4">
                    <div class="vx-col lg:w-1/4">
                        <img style="height: 250px" class="p-10" :src="show_employees.profile"/>
                    </div>
                    <div class="vx-col lg:w-3/4 mt-10">
                        <div class="flex mb-10">
                            <div class="w-1/3">
                                <i>ឈ្មោះខ្មែរ:<b> {{show_employees.kh_name}} </b></i>
                            </div>
                            <div class="w-1/3">
                                <i>ឈ្មោះឡាតាំង:<b> {{show_employees.en_name}} </b></i>
                            </div>
                            <div class="w-1/3">
                                <i>ភេទ:<b>Male</b></i>
                            </div>
                        </div>
                        <div class="flex mb-10">
                            <div class="w-1/3">
                                <i>ថ្ងៃខែឆ្នាំកំណើត:<b> {{show_employees.dob}} </b></i>
                            </div>
                            <div class="w-1/3">
                                <i>តួនាទី:<b> {{show_employees.position}} </b></i>
                            </div>
                            <div class="w-1/3">
                                <i>គម្រិតសម្គាល់:<b> {{show_employees.degree_note}} </b></i>
                            </div>
                        </div>
                        <div class="flex mb-10">
                            <div class="w-1/3">
                                <i>ថ្ងៃខែឆ្នាំចូលធ្វើការ:<b>{{show_employees.start_work}}</b></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vx-row mt-10">
                    <div class="vx-col md:w-1/3">
                        <h3><i>ទំនាក់ទំនង់:</i></h3>
                        <br>
                        <b :key="index" v-for="(item, index) in show_employees.contact.split('\n')"> {{item}}<br></b>
                    </div>
                    <div class="vx-col md:w-1/3">
                        <h3><i>អាស័យដ្ឋានបច្ចុប្បន្ន:</i></h3><br>
                        <b>{{show_employees.addr}}</b>
                    </div>
                    <div class="vx-col md:w-1/3">
                        <h3><i>អាស័យដ្ឋានកំណើត:</i></h3><br>
                        <b>{{show_employees.pob}}</b>
                    </div>
                </div>
            </vs-popup>
        </div>
        <modal width="90%" height="auto" :scrollable="true" :pivotY="0.07" :adaptive="true" :clickToClose="false" name="show-employee">
            <div class="flex justify-end">
                <i @click="$modal.hide('show-employee')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="vx-row">
                    <div class="vx-col md:w-full">
                        <h4>អត្តលេខ: PKS-{{show_employees.id}}</h4>
                    </div>
                </div>
                <div class="vx-row mt-4">
                    <div class="vx-col lg:w-1/4">
                        <img style="height: 250px" class="p-10" :src="show_employees.profile"/>
                    </div>
                    <div class="vx-col lg:w-3/4 mt-10">
                        <div class="flex mb-10">
                            <div class="w-1/3">
                                <i>ឈ្មោះខ្មែរ:<b> {{show_employees.kh_name}} </b></i>
                            </div>
                            <div class="w-1/3">
                                <i>ឈ្មោះឡាតាំង:<b> {{show_employees.en_name}} </b></i>
                            </div>
                            <div class="w-1/3">
                                <i>ភេទ:<b>Male</b></i>
                            </div>
                        </div>
                        <div class="flex mb-10">
                            <div class="w-1/3">
                                <i>ថ្ងៃខែឆ្នាំកំណើត:<b> {{show_employees.dob}} </b></i>
                            </div>
                            <div class="w-1/3">
                                <i>តួនាទី:<b> {{show_employees.position}} </b></i>
                            </div>
                            <div class="w-1/3">
                                <i>គម្រិតសម្គាល់:<b> {{show_employees.degree_note}} </b></i>
                            </div>
                        </div>
                        <div class="flex mb-10">
                            <div class="w-1/3">
                                <i>ថ្ងៃខែឆ្នាំចូលធ្វើការ:<b>{{show_employees.start_work}}</b></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vx-row mt-10">
                    <div class="vx-col md:w-1/3">
                        <h3><i>ទំនាក់ទំនង់:</i></h3>
                        <br>
                        <b :key="index" v-for="(item, index) in show_employees.contact.split('\n')"> {{item}}<br></b>
                    </div>
                    <div class="vx-col md:w-1/3">
                        <h3><i>អាស័យដ្ឋានបច្ចុប្បន្ន:</i></h3><br>
                        <b>{{show_employees.addr}}</b>
                    </div>
                    <div class="vx-col md:w-1/3">
                        <h3><i>អាស័យដ្ឋានកំណើត:</i></h3><br>
                        <b>{{show_employees.pob}}</b>
                    </div>
                </div>
            </vx-card>
        </modal>
        <!--Pop show employee-->
    </vx-card>
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
                show_employees: {
                    id         : '',
                    profile    : '',
                    kh_name    : '',
                    en_name    : '',
                    gender     : null,
                    dob        : null,
                    position   : null,
                    degree_note: null,
                    start_work : null,
                    contact    : '',
                    pob        : '',
                    addr       : '',
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
            showEmployee(){
              // this.$modal.show('showEmployee');
              // this.showEmployeePopup = true;
              this.$modal.show('show-employee');
              var em = this.show_employees;
              var sl = this.selected[0];
              em.id          = this.preFixZero(sl.id, 5);
              em.profile     = sl.profile;
              em.kh_name     = sl.kh_name;
              em.en_name     = sl.en_name;
              em.gender      = sl.gender;
              em.dob         = sl.dob;
              em.position    = sl.position;
              em.degree_note = sl.degree_note;
              em.start_work  = sl.start_work;
              em.contact     = sl.contact;
              em.pob         = sl.pob;
              em.addr        = sl.addr;
            },
            preFixZero(number, length){
                var str = '' + number;
                while (str.length < length) {
                    str = '0' + str;
                }
                return str;
            },
            showCreateEmployee(){
                this.$refs.createEmployee.showCreatePopup(this.selected);
                this.selected = [];
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
    .con-example-images{
        height: 500px;
        overflow: auto
    }



</style>
