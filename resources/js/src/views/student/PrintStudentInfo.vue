<template>
    <sweet-modal ref="printStdInfo" title="បោះពុម្ភសលាកបត្រឯកត្តជន" :blocking="true" :width="!mobilecheck()?'60%':''">
        <div class="vx-row">
            <div class="vx-col w-full">
                <table>
                    <tr>
                        <td class="md:w-1/3 print:w-1/3">
                            <img class="w-full" src="images/pks-header.png" alt="pks header">
                        </td>
                        <td class="md:w-1/3 print:w-1/3"></td>
                        <td class="md:w-1/3 print:w-1/3 flex text-right">
                            <img class="shadow-md" style="height: 100px;" v-if="data.students.length" :src="data.students[0].photo" alt="student photo">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <vs-button slot="button">បោះពុម្ភ</vs-button>
    </sweet-modal>
</template>

<script>
    export default {
        name: "PrintStudentInfo",
        data(){
            return{
                data:{
                    students:[]
                }
            }
        },
        methods:{
            show(data){
                this.$refs.printStdInfo.open();
                this.data.students = data
            }
        }
    }
</script>

<style scoped>

</style>