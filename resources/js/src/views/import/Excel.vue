<template>
    <vs-card>
        <import-excel :onSuccess="loadDataInTable"/>
        <div class="flex btn-group my-4">
            <vs-button @click="importStudent" type="relief" icon-pack="feather" icon="icon-download">Import Student</vs-button>
            <vs-button @click="importCollection" color="warning" type="relief" icon-pack="feather" icon="icon-download">Import Collection</vs-button>
            <vs-button @click="importService" color="success" type="relief" icon-pack="feather" icon="icon-download">Import Services</vs-button>
            <vs-button @click="importEmployee" color="dark" type="relief" icon-pack="feather" icon="icon-download">Import Employee</vs-button>
        </div>
        <div v-if="tableData.length && header.length">
            <vs-table stripe pagination :max-items="10" search :data="tableData">
                <template slot="header">
                    <h4>{{ sheetName }}</h4>
                </template>

                <template slot="thead">
                    <vs-th :sort-key="heading" v-for="heading in header" :key="heading">{{ heading }}</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="col" v-for="(col, indexcol) in data[indextr]" :key="indexcol + col">
                            {{ col }}
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
    </vs-card>
</template>
<script>
    import ImportExcel from "../../components/excel/ImportExcel";
    export default {
        name: "Excel",
        components: {ImportExcel},
        data() {
            return {
                tableData: [],
                header: [],
                sheetName: ""
            }
        },
        methods: {
            loadDataInTable({results, header, meta}) {
                this.header = header;
                this.tableData = results;
                this.sheetName = meta.sheetName;
            },
            importStudent(){
                let self = this;
                self.$vs.loading();
                self.$store.dispatch('importStudent',{data:self.tableData}).then(function (data) {
                    if (data){
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.$vs.loading.close();
                    }
                })
            },
            importService(){
                let self = this;
                self.$vs.loading();
                self.$store.dispatch('importService',{data:self.tableData}).then(function (data) {
                    if (data){
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.$vs.loading.close();
                    }
                })
            },
            importCollection(){
                let self = this;
                self.$vs.loading();
                self.$store.dispatch('importCollection',{data:self.tableData}).then(function (data) {
                    if (data){
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.$vs.loading.close();
                    }
                })
            },
            importEmployee(){
                let self = this;
                self.$vs.loading();
                self.$store.dispatch('importEmployee',{data:self.tableData}).then(function (data) {
                    if (data){
                        self.$vs.notify({
                            title:'ប្រតិបត្តិការណ៍ជោគជ័យ',
                            text:'ទិន្នន័យត្រូវបានរក្សាទុក',
                            color:'primary',
                            iconPack: 'feather',
                            icon:'icon-check',
                            position:'top-center'
                        });
                        self.$vs.loading.close();
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>