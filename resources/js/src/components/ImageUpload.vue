<template>
    <div>
        <label for="image-upload">
            <span class="placeholder">
                <img v-if="imageSrc" :src="imageSrc" class="responsive" :alt="imageSrc">
            </span>
        </label>
        <div class="vs-con-input">
            <input type="file" class="hidden" id="image-upload" name="file" @change="onFileChange">
        </div>
    </div>
</template>

<script>
    import axios from  'axios'
    export default {
        props: ['imageSrc','uploadUrl'],
        name: "ImageUpload",
        /*computed*/
        computed: {
            placeholder() {
                return this.$store.getters.getAppUrl+'images/placeholder/placeholder.png'
            },
        },
        methods: {
            async onFileChange(e) {
                let formData = new FormData();
                const file = e.target.files[0];
                formData.append('file', file);
                const res = await axios.post(route(this.uploadUrl),formData);
                this.$emit('get-image-path', res.data);
                /*try {
                    const res = await axios.post(route(this.uploadUrl),formData);
                    this.$emit('get-image-path', res.data)
                }catch (e) {
                    return false
                }*/
            }
        }
    }
</script>

<style scoped>
    .placeholder{
        width: 130px;
        height: 130px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: rgba(0,0,0,.15);
        background: transparent;
        border-radius: 10px;
        border: 1px dashed #dcdcdc;
        cursor: pointer;
    }
</style>