<template>
    <div>
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-col vs-type="flex" vs-justify="flex-end">
                <div class="flex btn-group">
                    <vs-button
                            @click="$modal.show('add-study-year');"
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
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="service">ឆ្នាំសិក្សា</vs-th>
                <vs-th sort-key="type">សិស្ស</vs-th>
                <vs-th sort-key="cost_one">សេវាកម្ម</vs-th>
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

            </vs-tr>


            <template slot-scope="{data}"></template>
        </vs-table>

        <modal width="70%" height="auto" :scrollable="true" :pivotY="0.07" :adaptive="true" :clickToClose="false" name="add-study-year">
            <div class="flex justify-end">
                <i @click="$modal.hide('add-study-year')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="flex">
                    <vs-select
                            autocomplete
                            class="w-1/3 mr-1"
                            placeholder="ជ្រើសរើសសិស្ស"
                    >
                        <vs-select-item  value="A" text="A" />
                    </vs-select>
                    <vs-select
                            autocomplete
                            class="w-1/3 mr-1"
                            placeholder="ជ្រើសរើសសិស្ស"
                    >
                        <vs-select-item  value="A" text="A" />
                    </vs-select><vs-input class="w-1/3 ml-1 mr-1" placeholder="ភេទ" />
                </div>
                <vs-divider/>
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
                </div>
            </vx-card>
        </modal>
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