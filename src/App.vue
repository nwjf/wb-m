<template>
    <div class="app">
        <van-nav-bar
            title="云彩库咨询"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'app',
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {}
    }
}
</script>

<style lang="less">
</style>
