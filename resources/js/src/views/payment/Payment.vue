<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button
                    @click="$modal.show('add-payment')"
                    type="relief"
                    icon-pack="feather"
                    icon="icon-plus-square"
            >
                បង់លុយ
            </vs-button>
        </div>
        <vs-table multiple v-model="selected" pagination max-items="5" search :data="users">

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
        <modal width="95%" height="auto" :scrollable="true" :pivotY="0.07" :adaptive="true" :clickToClose="false" name="add-payment">
            <div class="flex justify-end">
                <i @click="$modal.hide('add-payment')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="vx-row">
                    <div class="vx-col md:w-3/4 flex mt-20">
                        <vs-select
                                class="w-1/3"
                                autocomplete
                                placeholder="ជ្រើសរើសឈ្មោះសិស្ស"
                        >
                            <vs-select-item value="Hello" text="Hello"/>
                        </vs-select>
                        <vs-input class="w-1/3 ml-2 mr-2" placeholder="ភេទ" disabled />
                        <div class="w-1/3">
                            <flat-pickr class="w-full" value="2020-12-12" placeholder="ថ្ងៃត្រូវបង់លុយដំបូង" disabled/>
                        </div>
                    </div>
                    <div class="vx-col lg:w-1/4 justify-end">
                        <img style="height: 150px" src="https://data.whicdn.com/images/300580381/original.jpg"/>
                    </div>
                </div>
                <vs-table multiple v-model="selected" pagination max-items="5" search :data="users">

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
                <div class="centerx">
                   <h3><span>សរុបតម្លៃត្រូវបង់: <b>100$</b></span></h3>
                    <!--<vs-input class="w-1/5" label-placeholder="បញ្ចុះតម្លៃ" />-->
                    <div class="flex mt-5">
                        <vs-input-number v-model="number2" label="បញ្ចុះតម្លៃ %:" min="0" max="100" icon-inc="expand_less" icon-dec="expand_more"/>
                    </div>
                </div>
                <vs-divider/>
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
                </div>
            </vx-card>
        </modal>
    </vx-card>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    export default {
        name: "Payment",
        components: {
            flatPickr
        },
        data() {
            return {
                number2: 0,
                users: [],
                selected: [],
            }
        }
    }
</script>

<style scoped>

</style>