<template>
    <vx-card no-shadow>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col class="1/2" vs-type="flex" vs-justify="flex-start">
                <h5>ចំនួនដែលបានជ្រើសរើស: {{selected.length}}</h5>
            </vs-col>
            <vs-col class="1/2" vs-type="flex" vs-justify="flex-end">
                <div v-if="selected.length" class="flex btn-group">
                    <vs-button
                            @click="$refs.addStudyInfo.show(selected)"
                            type="relief"
                            icon-pack="feather"
                            icon="icon-plus-square"
                    >
                        ឡើងថ្នាក់
                    </vs-button>
                    <vs-button
                            @click="$refs.changeStudyInfo.show(selected)"
                            color="warning" type="relief"
                            icon-pack="feather" icon="icon-edit"
                    >
                        ប្តូរថ្នាក់
                    </vs-button>
                    <vs-button
                            color="danger"
                            type="relief"
                            icon-pack="feather" icon="icon-refresh-ccw"
                    >
                        ឈប់រៀន
                    </vs-button>
                </div>
            </vs-col>
        </vs-row>
        <vs-divider/>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="study_info_extract">

            <template slot="thead">
                <vs-th sort-key="year">ឆ្នាំសិក្សា</vs-th>
                <vs-th sort-key="name">ឈ្មោះសិស្ស</vs-th>
                <vs-th sort-key="latin">ឈ្មោះឡាតាំ</vs-th>
                <vs-th sort-key="gender">ភេទ</vs-th>
                <vs-th sort-key="dob">ថ្ងៃខែឆ្នាំកំណើត</vs-th>
                <vs-th sort-key="class_name">កំពុងរៀនថ្នាក់ទី</vs-th>
                <vs-th sort-key="shift">ពេលសិក្សា</vs-th>
                <vs-th sort-key="date_pay">ថ្ងៃត្រូវបង់លុយ</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="item" :key="index" v-for="(item, index) in data">

                    <vs-td :data="item.year">
                        {{ item.year }}
                    </vs-td>

                    <vs-td :data="item.name">
                        {{ item.name }}
                    </vs-td>

                    <vs-td :data="item.latin">
                        {{ item.latin }}
                    </vs-td>

                    <vs-td :data="item.gender">
                        {{ item.gender}}
                    </vs-td>

                    <vs-td :data="item.dob">
                        {{ item.dob}}
                    </vs-td>

                    <vs-td :data="item.class_name">
                        {{ item.class_name }}
                    </vs-td>

                    <vs-td :data="item.shift">
                        {{ item.shift }}
                    </vs-td>

                    <vs-td v-if="item.date_pay !== null" :data="item.date_pay">
                        {{ item.date_pay.substr(0, 10) }}
                    </vs-td>
                    <vs-td v-else :data="item.date_pay">
                        មិនបានកំណត់
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <add-study-info @finished="selected=[]" ref="addStudyInfo"></add-study-info>
        <change-study-info @finished="selected=[]" ref="changeStudyInfo"></change-study-info>
    </vx-card>
</template>

<script>
    import AddStudyInfo from "../student/addStudyInfo";
    import ChangeStudyInfo from "../student/changeStudyInfo";
    export default {
        name: "StudyYear",
        components: {
            ChangeStudyInfo,
            AddStudyInfo
        },
        data() {
            return {
                selected: [],
            }
        },
        computed: {
            getStudyInfos(){
                return this.$store.getters.get_study_infos
            },
            study_info_extract(){
                return this.getStudyInfos.map(function (data) {
                    return{
                        study_info_id   : data.id,
                        id         : data.students.id,
                        year       : data.year,
                        student_id : data.students.id,
                        name       : data.students.name,
                        latin      : data.students.latin,
                        gender     : data.students.gender,
                        dob        : data.students.dob,
                        class_name : data.study_infos.level + data.study_infos.class_name,
                        shift      : data.study_infos.shift,
                        date_pay   : data.date_pay,
                        last_date_pay   : data.last_date_pay,
                        last_term  : data.last_term,
                    }
                });
            }
        },
        async created() {
            await this.$store.dispatch('fetchStudyInfos');
        }
    }
</script>

<style scoped>

</style>