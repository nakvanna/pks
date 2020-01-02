<template>
    <sweet-modal ref="print_invoice" title="Print Notifications" :blocking="true" :width="!mobilecheck()?'60%':''">
        <vx-card no-shadow>
            <div id="section-to-print">
                <div class="mt-1 height-30percent" v-for="(item, i) in notification_infos" :key="i">
                    <div class="vx-row">
                        <div class="vx-col md:w-1/3 print:w-1/3">
                            <img class="w-full print:w-full" style="height: 100px;" src="images/ponlok-khmer-header.jpg" alt="header">
                        </div>
                        <div class="vx-col md:w-1/3 print:w-1/3 text-center margin-top-30">
                            <h2><u>ជំរាបជូន</u></h2>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col">
                            <h6 class="line-height-25">
                                មាតា - បិតា ឬអាណាព្យាបាលសិស្សឈ្មោះ <b>{{item.name}}</b> ភេទ <b>{{item.gender}}</b> រៀនថ្នាក់ <b>{{item.class_name}}</b>
                                ម៉ោង <b>{{item.shift}}</b> គ្រូប្រចាំថ្នាក់ <b>{{item.employees === null? 'គ្មានអ្នកទទួលបន្ទុក' : item.employees.kh_name}}</b> អោយបានជ្រាបថា៖
                                ការបង់ប្រាក់ថ្លៃសិក្សរយៈពេល <b>{{item.last_term}}</b> ខែ នឹងត្រូវផុតកំណត់ត្រឹម
                                ថ្ងៃទី <b>{{moment(item.date_pay).format('DD')}}</b> ខែ <b>{{moment(item.date_pay).format('MM')}}</b> ឆ្នាំ <b>{{moment(item.date_pay).format('YYYY')}}</b>
                                ដូចនេះសូមអញ្ញើញមាតា - បិតា ឬអាណាព្យាបាល សិស្ស មកបង់ប្រាក់សិក្សាសំរាប់
                                រយៈពេល <b>{{item.last_term}}</b> ខែ បន្ទាប់នៅថ្ងៃថ្ងៃទី <b>{{moment(item.date_pay).format('DD')}}</b> ខែ <b>{{moment(item.date_pay).format('MM')}}</b>
                                ឆ្នាំ <b>{{moment(item.date_pay).format('YYYY')}}</b>។
                            </h6>
                            <h6 class="mt-1">
                                (<b class="text-danger">សូមយកបង្កាន់ដៃបង់ប្រាក់លើកមុនមកជាមួយផង</b>) សូមអរគុណ។
                            </h6>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col md:w-1/3 print:w-1/3"></div>
                        <div class="vx-col md:w-1/3 print:w-1/3"></div>
                        <div class="vx-col md:w-1/3 print:w-1/3 text-center">
                            <h6>ថ្ងៃទី <b>{{moment().format('DD')}}</b> ខែ <b>{{moment().locale('km').format('MMMM')}}</b> ឆ្នាំ <b>{{moment().format('YYYY')}}</b></h6>
                            <h5 class="mt-3"><b>ទីចាត់ការសាលា</b></h5>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col md:w-4/5">
                            <div class="vx-row flex">
                                <div class="vx-col md:w-1/2">
                                    <b v-if="item.last_term === 1">- {{item.group_section}} {{item.last_term}}ខែ ស្មើនឹង {{$formatter.format(item.cost_one)}}</b>
                                    <b v-if="item.last_term === 3">- {{item.group_section}} {{item.last_term}}ខែ ស្មើនឹង {{$formatter.format(item.cost_three)}}</b>
                                    <b v-if="item.last_term === 6">- {{item.group_section}} {{item.last_term}}ខែ ស្មើនឹង {{$formatter.format(item.cost_six)}}</b>
                                    <b v-if="item.last_term === 12">- {{item.group_section}} {{item.last_term}}ខែ ស្មើនឹង {{$formatter.format(item.cost_twelve)}}</b>
                                </div>
                                <div class="vx-col md:w-1/2" v-if="item.service_infos.length" v-for="(sub_item, i) in item.service_infos" :key="i">
                                    <b v-if="sub_item.last_term === 1">- សំរាប់{{sub_item.services.type}} {{sub_item.services.service}} ចំនួន {{$formatter.format(sub_item.services.cost_one)}}</b>
                                    <b v-if="sub_item.last_term === 3">- សំរាប់{{sub_item.services.type}} {{sub_item.services.service}} ចំនួន {{$formatter.format(sub_item.services.cost_three)}}</b>
                                    <b v-if="sub_item.last_term === 6">- សំរាប់{{sub_item.services.type}} {{sub_item.services.service}} ចំនួន {{$formatter.format(sub_item.services.cost_six)}}</b>
                                    <b v-else>- សំរាប់{{sub_item.services.type}} {{sub_item.services.service}} ចំនួន {{$formatter.format(0)}}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button icon="icon-printer" @click="printHtml" icon-pack="feather" type="relief">បោះពុម្ភ</vs-button>
            </div>
        </vx-card>
    </sweet-modal>
</template>

<script>
    import printJS from 'print-js';
    export default {
        name: "PrintInvoice",
        data() {
            return {
                study_infos: [],
                name: '',
                gender: '',
                class_name: '',
                shift: '',
                employee_name: '',
                last_term: 0,
                date_pay: null,
                group_section: '',
                last_price: 0,
                notification_infos: [],

            }
        },
        computed: {
            showServiceInfos(){
                return this.$store.getters.show_service_infos
            },
        },
        methods: {
            /*async show(selected){
                this.study_infos = [];
                this.service_infos = [];
                this.study_infos = selected;
                this.$refs.print_invoice.open();

                for (var i = 0; i <=selected.length; i ++){
                    if (this.study_infos[i].shift.split('-')[1] === "ពេញម៉ោង"){
                        await this.$store.dispatch('showServiceInfos', {std_id:this.study_infos[i].student_id, year: this.study_infos[i].year});
                        this.service_infos = this.showServiceInfos;
                    }
                    this.name = this.study_infos[i].name;
                    this.gender = this.study_infos[i].gender;
                    this.class_name = this.study_infos[i].class_name;
                    this.shift = this.study_infos[i].shift;
                    this.last_term = this.study_infos[i].last_term;
                    this.date_pay = this.study_infos[i].date_pay;
                    this.group_section = this.study_infos[i].group_section;
                    this.employee_name = this.study_infos[i].employees === null ? 'មិនបានដាក់ជូន' : this.study_infos[i].employees.kh_name; //គ្រូប្រចាំថ្នាក់
                    if (this.last_term === 1){
                        this.last_price = this.study_infos[i].cost_one;
                    }else if (this.last_term === 3){
                        this.last_price = this.study_infos[i].cost_three;
                    } else if (this.last_term === 6){
                        this.last_price = this.study_infos[i].cost_six;
                    } else {
                        this.last_price = this.study_infos[i].cost_twelve;
                    }
                }
            },*/
            async show(selected){
                var vm = this;
                vm.$refs.print_invoice.open();
                vm.notification_infos = selected;
                for(var i = 0; i < vm.notification_infos.length; i ++){
                    if (vm.notification_infos[i].shift.split('-')[1] === "ពេញម៉ោង"){
                        await vm.$store.dispatch('showServiceInfos', {std_id:vm.notification_infos[i].student_id, year: vm.notification_infos[i].year});
                        vm.notification_infos[i].service_infos = vm.showServiceInfos;
                    }
                }
                await console.log(vm.notification_infos)
            },
            async printHtml() {
                printJS({printable: 'section-to-print', type: 'html',css:[
                    'https://fonts.googleapis.com/css?family=Battambang&display=swap',
                        'http://localhost:3000/css/main.css',
                        'http://localhost:3000/css/vuesax.css',
                        'http://localhost:3000/css/app.css'
                    ]})
            },
        },
    }
</script>

<style scoped>
    .line-height-25 {
        line-height: 25px;
    }
    .height-30percent {
        height: 350px;
        background: #28C76F;
    }
</style>