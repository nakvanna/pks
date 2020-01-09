<template>
    <sweet-modal ref="print_invoice" title="Print Notifications" :blocking="true" :width="!mobilecheck()?'60%':''">
        <vx-card no-shadow>
            <div id="section-to-print">
                <div class="height-30percent" v-for="(item, ii) in notification_infos" :key="ii">
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
                            <p class="line-height-25">
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                មាតា - បិតា ឬអាណាព្យាបាលសិស្សឈ្មោះ <b>{{item.name}}</b> ភេទ <b>{{item.gender}}</b> អោយបានជ្រាបថា៖
                                ការបង់ប្រាក់ថ្លៃសិក្សរយៈពេល <b>{{item.last_term}}</b> ខែ នឹងត្រូវផុតកំណត់ត្រឹម
                                ថ្ងៃទី <b>{{moment(item.date_pay).format('DD')}}</b> ខែ <b>{{moment(item.date_pay).format('MM')}}</b> ឆ្នាំ <b>{{moment(item.date_pay).format('YYYY')}}</b>
                            </p>
                            <p>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                ហេតុដូចនេះសូមគោរពអញ្ញើញ​ មាតា - បិតា ឬ អាណាព្យាបាលសិស្ស មកបង់ប្រាក់សិក្សាសំរាប់
                                រយៈពេល <b>{{item.last_term}}</b> ខែ បន្ទាប់នៅថ្ងៃថ្ងៃទី <b>{{moment(item.date_pay).format('DD')}}</b> ខែ <b>{{moment(item.date_pay).format('MM')}}</b>
                                ឆ្នាំ <b>{{moment(item.date_pay).format('YYYY')}}</b>។
                            </p>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <table class="custom">
                                <tbody>
                                <tr>
                                    <th class="custom">ល.រ</th>
                                    <th class="custom">រាយមុខសេវាកម្ម</th>
                                    <th class="custom">រយៈពេលបង់</th>
                                    <th class="custom">ចំនួនទឹកប្រាក់</th>
                                    <th class="custom">អ្នកទទូលបន្ទុក</th>
                                    <th class="custom">ផុតកំណត់ត្រឹមថ្ងៃទី</th>
                                </tr>
                                <tr v-if="study_infos[ii].length" v-for="(item_study, i) in study_infos[ii]" :key="'study'+i">

                                    <td class="custom">{{i + 1}}</td>
                                    <td class="custom">{{item_study.study_infos.group_section}}</td>
                                    <td class="custom">{{item_study.last_term}}</td>
                                    <td class="custom" v-if="item_study.last_term === 0">{{0}}</td>
                                    <td class="custom" v-if="item_study.last_term === 1">{{item_study.study_infos.cost_one}}</td>
                                    <td class="custom" v-if="item_study.last_term === 3">{{item_study.study_infos.cost_three}}</td>
                                    <td class="custom" v-if="item_study.last_term === 6">{{item_study.study_infos.cost_six}}</td>
                                    <td class="custom" v-if="item_study.last_term === 12">{{item_study.study_infos.cost_twelve}}</td>
                                    <td class="custom">
                                        {{item_study.study_infos.employees === null ? 'គ្មាន': item_study.study_infos.employees.kh_name}}
                                    </td>
                                    <td class="custom">{{item_study.date_pay}}</td>
                                </tr>
                                <tr v-if="service_infos[ii].length" v-for="(item_service, j) in service_infos[ii]" :key="'service'+j">
                                    <td class="custom">{{study_infos[ii].length+j+1}}</td>
                                    <td class="custom">{{item_service.services.service}}</td>
                                    <td class="custom">{{item_service.last_term}}</td>
                                    <td class="custom" v-if="item_service.last_term === 0">{{0}}</td>
                                    <td class="custom" v-if="item_service.last_term === 1">{{item_service.services.cost_one}}</td>
                                    <td class="custom" v-if="item_service.last_term === 3">{{item_service.services.cost_three}}</td>
                                    <td class="custom" v-if="item_service.last_term === 6">{{item_service.services.cost_six}}</td>
                                    <td class="custom" v-if="item_service.last_term === 12">{{item_service.services.cost_twelve}}</td>
                                    <td class="custom">
                                        {{item_service.services.employees === null ? 'គ្មាន': item_service.services.employees.kh_name}}
                                    </td>
                                    <td class="custom">{{item_service.date_pay}}</td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td class="custom">
                                        <b>ទឹកប្រាក់សរុប:</b>
                                    </td>
                                    <td class="custom">
                                         {{$formatter.format(parseFloat(total_price_study[ii] + parseFloat(total_price_service[ii])))}}
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-center pt-4" colspan="3">
                                        ម៉ោង {{moment().format('h:mm:ss A')}} ថ្ងៃទី {{moment().format('DD')}} ខែ {{moment().format('MM')}} ឆ្នាំ {{moment().format('Y')}}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="pt-3" colspan="4">
                                        (<b class="text-danger">សូមយកបង្កាន់ដៃបង់ប្រាក់លើកមុនមកជាមួយផង</b>) សូមអរគុណ។
                                    </td>
                                    <td class="text-center" colspan="3">
                                        ទីចាត់ការសាលា
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
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
                service_infos:[],
                total_price_study: [],
                total_price_service: [],
                notification_infos: [],
            }
        },
        computed: {
            showServiceInfos(){
                return this.$store.getters.show_service_infos
            },
            showStudyInfos(){
                return this.$store.getters.show_study_infos
            },
        },
        methods: {
            async show(selected){
                var vm = this;
                var each_study, each_service = 0;
                vm.study_infos = [];
                vm.service_infos = [];
                vm.total_price_service = [];
                vm.total_price_study = [];
                vm.$refs.print_invoice.open();
                vm.notification_infos = selected;
                for(var i = 0; i < vm.notification_infos.length; i ++) {
                    each_service = 0;
                    await vm.$store.dispatch('showServiceInfos', {
                        std_id:vm.notification_infos[i].student_id,
                        year: vm.notification_infos[i].year,
                        date_pay: vm.notification_infos[i].date_pay
                    });
                    vm.service_infos.push(vm.showServiceInfos);
                    for (var k = 0; k < vm.showServiceInfos.length; k ++){
                        if (vm.notification_infos[i].last_term === 1){
                            each_service += parseFloat(vm.showServiceInfos[k].services.cost_one);
                        } else if (vm.notification_infos[i].last_term === 3) {
                            each_service += parseFloat(vm.showServiceInfos[k].services.cost_three);
                        } else if (vm.notification_infos[i].last_term === 6) {
                            each_service += parseFloat(vm.showServiceInfos[k].services.cost_six);
                        } else if (vm.notification_infos[i].last_term === 12){
                            each_service += parseFloat(vm.showServiceInfos[k].services.cost_twelve);
                        }
                    }
                    vm.total_price_service.push(each_service);
                }

                for (var j = 0; j < vm.notification_infos.length; j ++) {
                    each_study = 0;
                    await vm.$store.dispatch('showStudyInfos', {
                        std_id:vm.notification_infos[j].student_id,
                        year: vm.notification_infos[j].year,
                        date_pay: vm.notification_infos[j].date_pay
                    });
                    vm.study_infos.push(vm.showStudyInfos);
                    for (var l = 0; l < vm.showStudyInfos.length; l ++){
                        if (vm.notification_infos[j].last_term === 1) {
                            each_study += parseFloat(vm.showStudyInfos[l].study_infos.cost_one);
                        } else if (vm.notification_infos[j].last_term === 3){
                            each_study += parseFloat(vm.showStudyInfos[l].study_infos.cost_three);
                        } else if (vm.notification_infos[j].last_term === 6){
                            each_study += parseFloat(vm.showStudyInfos[l].study_infos.cost_six);
                        } else if (vm.notification_infos[j].last_term === 12) {
                            each_study += parseFloat(vm.showStudyInfos[l].study_infos.cost_twelve);
                        }
                    }
                    vm.total_price_study.push(each_study);
                }
                await console.log(vm.total_price_study);
                await console.log(vm.total_price_service);
            },
            async printHtml() {
                printJS({printable: 'section-to-print', type: 'html',css:[
                    'https://fonts.googleapis.com/css?family=Battambang&display=swap',
                        'https://pks.siqware.com/css/main.css',
                        'https://pks.siqware.com/css/vuesax.css',
                        'https://pks.siqware.com/css/app.css',
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
        height: 400px;
    }
</style>