<template>
    <div>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col vs-type="flex" vs-justify="flex-end">
                <div class="flex btn-group">
                    <vs-button
                            type="relief"
                            icon-pack="feather"
                            icon="icon-plus-square"
                    >
                        បន្ថែម
                    </vs-button>
                    <vs-button
                            color="warning" type="relief"
                            icon-pack="feather" icon="icon-edit"
                    >
                        កែប្រែ
                    </vs-button>
                    <vs-button
                            type="relief"
                            icon-pack="feather" icon="icon-refresh-ccw"
                    >
                        សម្អាត
                    </vs-button>
                </div>
            </vs-col>
        </vs-row>
        <vs-divider/>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="users">

            <template slot="thead">
                <vs-th sort-key="id">អត្តលេខ</vs-th>
                <vs-th sort-key="type">សិស្ស</vs-th>
                <vs-th sort-key="service">ឆ្នាំសិក្សា</vs-th>
                <vs-th sort-key="cost_one">តម្លៃ​ សេវាកម្ម & មុខវិជ្ជា</vs-th>
                <vs-th sort-key="cost_three">គ្រូបង្រៀន</vs-th>
                <vs-th sort-key="cost_six">បញ្ចុះតម្លៃ</vs-th>
            </template>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                <vs-td :data="data[indextr].id">
                    {{ data[indextr].id }}
                </vs-td>

                <vs-td :data="data[indextr].type">
                    {{ data[indextr].type }}
                </vs-td>

                <vs-td :data="data[indextr].service">
                    {{ data[indextr].service }}
                </vs-td>

                <vs-td :data="data[indextr].cost_one">
                    $ {{ data[indextr].cost_one }}
                </vs-td>

                <vs-td :data="data[indextr].cost_three">
                    $ {{ data[indextr].cost_three }}
                </vs-td>

                <vs-td :data="data[indextr].cost_six">
                    $ {{ data[indextr].cost_six }}
                </vs-td>
            </vs-tr>


            <template slot-scope="{data}"></template>
        </vs-table>
    </div>
</template>

<script>
    export default {
        name: "StudyYear",
        data() {
            return {
                users: [],
                selected: [],
            }
        }
    }
</script>

<style scoped>

</style>