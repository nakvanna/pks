<template>
    <h2>Group Section</h2>
</template>
<script>
    import SubTab from "../SubTab";
    export default {
        components: {
            SubTab
        },
        name:'GroupSection',
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
