<template>
    <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">
        <!-- GENERAL -->
        <vs-tab icon-pack="feather" icon="icon-list" :label="!isSmallerScreen ? 'សិស្ស' : ''">
            <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <vx-card no-shadow>
                    <group-section></group-section>
                </vx-card>
            </div>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-plus-square" :label="!isSmallerScreen ? 'បន្ថែម' : ''">
            <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <add-student></add-student>
            </div>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-edit" :label="!isSmallerScreen ? 'កែប្រែ' : ''">
            <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
                <sub-tab></sub-tab>
            </div>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-package" :label="!isSmallerScreen ? 'អាប់គ្រេដ' : ''">
            <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
                <sub-tab></sub-tab>
            </div>
        </vs-tab>
    </vs-tabs>
</template>
<script>
    import SubTab from "../SubTab";
    import GroupSection from "../setting/GroupSection";
    import AddStudent from "./addStudent";
    export default {
        components: {
            AddStudent,
            GroupSection,
            SubTab
        },
        name:'Student',
        data() {
            return {
                old_password: "",
                new_password: "",
                confirm_new_password: "",
            }
        },
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
