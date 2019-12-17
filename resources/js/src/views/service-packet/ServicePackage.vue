<template>
    <vx-card no-shadow>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col class="1/2" vs-type="flex" vs-justify="flex-start">
                <h5>ចំនួនដែលបានជ្រើសរើស: {{selected.length}}</h5>
            </vs-col>
            <vs-col class="1/2" vs-type="flex" vs-justify="flex-end">
                <div v-if="selected.length" class="flex btn-group">
                    <vs-button
                            @click="$refs.addServiceInfo.show(selected, false)"
                            type="relief"
                            icon-pack="feather"
                            icon="icon-plus-square"
                    >
                        បន្ថែមសេវាកម្ម
                    </vs-button>
                    <vs-button
                            @click="$modal.show('stopService')"
                            color="danger" type="relief"
                            icon-pack="feather" icon="icon-refresh-ccw"
                    >
                        ផ្ដាច់សេវាកម្ម
                    </vs-button>
                </div>
            </vs-col>
        </vs-row>
        <vs-divider/>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="service_info_extract">

            <template slot="thead">
                <vs-th sort-key="year">ឆ្នាំសិក្សា</vs-th>
                <vs-th sort-key="name">ឈ្មោះសិស្ស</vs-th>
                <vs-th sort-key="latin">ឈ្មោះឡាតាំ</vs-th>
                <vs-th sort-key="gender">ភេទ</vs-th>
                <vs-th sort-key="dob">ថ្ងៃខែឆ្នាំកំណើត</vs-th>
                <vs-th sort-key="class_name">កំពុងប្រើប្រាស់សេវាកម្ម</vs-th>
                <vs-th sort-key="date_pay">ថ្ងៃត្រូវបង់លុយ</vs-th>
                <vs-th sort-key="is_used">ស្ថានភាព</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].year">
                        {{ data[indextr].year }}
                    </vs-td>

                    <vs-td :data="data[indextr].name">
                        {{ data[indextr].name }}
                    </vs-td>

                    <vs-td :data="data[indextr].latin">
                        {{ data[indextr].latin }}
                    </vs-td>

                    <vs-td :data="data[indextr].gender">
                        {{ data[indextr].gender}}
                    </vs-td>

                    <vs-td :data="data[indextr].dob">
                        {{ data[indextr].dob}}
                    </vs-td>

                    <vs-td :data="data[indextr].service">
                        {{ data[indextr].service }}
                    </vs-td>

                    <vs-td v-if="data[indextr].date_pay !== null" :data="data[indextr].date_pay">
                        {{ data[indextr].date_pay.substr(0, 10) }}
                    </vs-td>
                    <vs-td v-else :data="data[indextr].date_pay">
                        មិនបានកំណត់
                    </vs-td>

                    <vs-td :data="data[indextr].is_used">
                        <vs-chip v-if="data[indextr].is_used === 'នៅប្រើ'" color="primary">{{ data[indextr].is_used }}</vs-chip>
                        <vs-chip v-else color="danger">{{ data[indextr].is_used }}</vs-chip>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <add-service-info ref="addServiceInfo"></add-service-info>

        <modal width="500" height="auto" :scrollable="true" :pivotY="0.2" :adaptive="true" :clickToClose="false" name="stopService">
            <div class="flex justify-end">
                <i @click="$modal.hide('stopService')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
            </div>
            <h4 class="ml-2"><u> ផ្ដាច់សេវាកម្ម</u></h4>
            <vx-card no-shadow>
                    <div class="vx-col flex">
                        <flat-pickr class="w-full" v-model="new_last_date_pay" placeholder="ថ្ងៃត្រូវបង់ផ្ដាច់" name="date-pay" v-validate="'required'"/>
                    </div>
                <vs-divider />
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button icon="icon-save" @click="updateServiceInfo" icon-pack="feather" type="relief">ផ្ដាច់សេវាកម្ម</vs-button>
                </div>
            </vx-card>
        </modal>
    </vx-card>
</template>

<script>
    import AddServiceInfo from "../student/addServiceInfo";
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    export default {
        name: "ServiceInfo",
        components: {
            AddServiceInfo, flatPickr
        },
        data() {
            return {
                users: [],
                selected: [],
                service_info_extract: [],
                new_last_date_pay: null,
            }
        },
        computed: {
            getServiceInfos(){
                return this.$store.getters.get_service_infos
            }
        },
        async created() {
            await this.$store.dispatch('fetchServiceInfos');
            let sie = this.service_info_extract;
            let raw = this.getServiceInfos;
            raw.map(async function (data) {
                sie.push({
                    id         : data.id,
                    year       : data.year,
                    student_id : data.students.id,
                    name       : data.students.name,
                    latin      : data.students.latin,
                    gender     : data.students.gender,
                    dob        : data.students.dob,
                    service    : data.services.type+'-'+ data.services.service,
                    date_pay   : data.date_pay,
                    last_term  : data.last_term,
                    last_date_pay  : data.last_date_pay,
                    is_used    : data.is_used === true? 'នៅប្រើ' : 'បានផ្អាក' ,
                })
            });
        },
        methods: {
            async updateServiceInfo(){
                if(this.new_last_date_pay !== null){
                    let self = this;
                    self.$vs.loading();
                    const promises = self.selected.map(async function (data) {
                        data.last_date_pay = self.new_last_date_pay;
                        data.is_used = false;
                        await self.$store.dispatch('updateServiceInfo', data);
                    });
                    await Promise.all(promises).then(function () {
                        self.$vs.notify({
                            time: 4000,
                            title: 'ប្រតិបត្តិការជោគជ័យ',
                            text: 'ទិន្នន័យបានកែប្រែ',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            position: 'top-center'
                        });
                        self.selected = [];
                        self.$vs.loading.close();
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>