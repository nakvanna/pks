<template>
    <vx-card no-shadow="">
        <vs-tabs :position="isSmallerScreen ? 'top' : 'top'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">
            <!-- GENERAL -->
            <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'សិស្សរៀនតាមឆ្នាំ' : ''">
                <div class="tab-change-pwd md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow="">
                        <student-study-year></student-study-year>
                    </vx-card>
                </div>
            </vs-tab>
            <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'សិស្សប្រើសេវាកម្ម' : ''">
                <div class="tab-general md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow>
                        <student-use-service></student-use-service>
                    </vx-card>
                </div>
            </vs-tab>
            <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'សិស្សដែលជំពាក់' : ''">
                <div class="tab-change-pwd md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow="">
                        <student-due></student-due>
                    </vx-card>
                </div>
            </vs-tab>
            <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'របាយការណ៌ទឹកប្រាក់ទូលបាន' : ''">
            <div class="tab-change-pwd md:ml-4 md:mt-4 mt-4 ml-0">
                <vx-card no-shadow="">

                </vx-card>
            </div>
        </vs-tab>
        </vs-tabs>
    </vx-card>
</template>
<script>
    import StudentStudyYear from './StudentStudyYear'
    import StudentUseService from './StudentUseService'
    import StudentDue from './StudentDue'
    export default {
        components: {
            StudentStudyYear, StudentUseService, StudentDue
        },
        name:'Setting',
        computed: {
            isSmallerScreen() {
                return this.$store.state.windowWidth < 768
            }
        }
    }
</script>

<style lang="scss">
    #profile-tabs {
        .vs-tabs--content {
            padding: 0;
        }
    }
</style>
