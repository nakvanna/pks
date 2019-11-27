<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button @click="$refs.addStudent.show()" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editStudent.show();$refs.editStudent.editStudent(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
            <vs-button v-if="selected.length" @click="toggleStudent" color="danger" type="relief" icon-pack="feather" icon="icon-circle">Toggle Status</vs-button>
        </div>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_students">
            <template slot="thead">
                <vs-th sort-key="id">ល.រ</vs-th>
                <vs-th sort-key="name">ឈ្មោះ</vs-th>
                <vs-th sort-key="latin">ឈ្មោះឡាតាំង</vs-th>
                <vs-th sort-key="status">ស្ថានភាព</vs-th>
                <vs-th sort-key="created_at">កាលបរិច្ឆេទ</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>
                    <vs-td :data="data[indextr].name">
                        {{ data[indextr].name }}
                    </vs-td>
                    <vs-td :data="data[indextr].latin">
                        {{ data[indextr].latin }}
                    </vs-td>
                    <vs-td :data="data[indextr].status">
                        <vs-chip v-if="data[indextr].status===true" color="success">Active</vs-chip>
                        <vs-chip v-if="data[indextr].status===false" color="warning">Inactive</vs-chip>
                    </vs-td>
                    <vs-td :data="data[indextr].created_at">
                        {{ data[indextr].created_at }}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>
        <add-student ref="addStudent"></add-student>
        <edit-student @finished="selected = []" ref="editStudent"></edit-student>
    </vx-card>
</template>

<script>
    import AddStudent from "./addStudent";
    import EditStudent from "./editStudent";
    export default {
        name: "Student",
        components: {EditStudent, AddStudent},
        data(){
            return{
                selected:[]
            }
        },
        computed:{
            all_students(){
                return this.$store.getters.all_students
            }
        },
        created(){
            this.fetchStudent();
        },
        methods:{
            //fetch
            async fetchStudent(){
              await this.$store.dispatch('fetchStudent')
            },
            //destroy
            async toggleStudent(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('toggleStudent',data.id);
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