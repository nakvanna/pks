<template>
    <vx-card no-shadow="">
        <vs-tabs :position="isSmallerScreen ? 'top' : 'top'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">
            <!-- GENERAL -->
            <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Collection' : ''">
                <div class="tab-change-pwd md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow="">
                        <Collection></Collection>
                    </vx-card>
                </div>
            </vs-tab>
            <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'Group Section' : ''">
                <div class="tab-general md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow>
                        <group-section></group-section>
                    </vx-card>
                </div>
            </vs-tab>
            <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'Section' : ''">
                <div class="tab-general md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow>
                        <Section></Section>
                    </vx-card>
                </div>
            </vs-tab>
            <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Level' : ''">
                <div class="tab-change-pwd md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow="">
                        <Level></Level>
                    </vx-card>
                </div>
            </vs-tab>
            <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Class' : ''">
                <div class="tab-change-pwd md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow="">
                        <study-class></study-class>
                    </vx-card>
                </div>
            </vs-tab>
            <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Shift' : ''">
                <div class="tab-change-pwd md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow="">
                        <Shift></Shift>
                    </vx-card>
                </div>
            </vs-tab>
            <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Study Year' : ''">
                <div class="tab-change-pwd md:ml-4 md:mt-4 mt-4 ml-0">
                    <vx-card no-shadow="">
                        <Year></Year>
                    </vx-card>
                </div>
            </vs-tab>
        </vs-tabs>
    </vx-card>
</template>
<script>
    import GroupSection from "./GroupSection";
    import Section from './Section';
    import Level from './Level';
    import StudyClass from './StudyClass';
    import Shift from './Shift';
    import Collection from './Collection';
    import Year from './Year';
    export default {
        components: {
            GroupSection,
            Section,
            Level,
            StudyClass,
            Shift,
            Collection,
            Year,
        },
        name:'Setting',
        async created() {
            await this.$store.dispatch('fetchGroupSections');
            await this.$store.dispatch('fetchSections');
            await this.$store.dispatch('fetchLevels');
            await this.$store.dispatch('fetchShifts');
            await this.$store.dispatch('fetchStudyClasses');
            await this.$store.dispatch('fetchCollections');
            await this.$store.dispatch('fetchYears');

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
