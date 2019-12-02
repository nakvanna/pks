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
                            @click="toggleService"
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
    </vx-card>
</template>

<script>
    import AddServiceInfo from "../student/addServiceInfo";
    export default {
        name: "ServiceInfo",
        components: {
            AddServiceInfo
        },
        data() {
            return {
                users: [],
                selected: [],
                service_info_extract: [],
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
                    is_used    : data.is_used === true? 'នៅប្រើ' : 'បានផ្អាក' ,
                })
            });
        },
        methods: {
            async toggleService(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('toggleService',data.id);
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
</script>

<style scoped>

</style>