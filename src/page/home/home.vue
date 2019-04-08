<template>
    <div id="home" class="bg home flex_column">
        <head-top head-title="艺狗往"></head-top>
        <div class="flex9 flex_column">
            <div class="flex20"></div>
            <div class="flex1 text-right flex_row">
                <div class="flex6"></div>
                <div class="flex2">
                    <i class="fa fa-bell fa-lg"></i>
                    <sup>
                        <mt-badge size="small" type="error"></mt-badge>
                    </sup>
                    <p>
                        <router-link to="/login">
                            <i class="fa fa-user-circle fa-lg"></i>
                        </router-link>
                    </p>
                </div>
                <div class="flex1"></div>
            </div>
            <div class="flex1"></div>
        </div>
        <div class="flex1 flex_row">
            <div class="flex1"></div>
            <router-link to="/copyright_direction" class="flex6 dis-inherit">
                <mt-button type="danger" class="flex1 btn">版 权 登 记</mt-button>
            </router-link>
            <div class="flex1"></div>
        </div>
        <div class="flex1"></div>
    </div>
</template>

<script>
    import headTop from '@/components/header/head';

    export default {
        components: {
            headTop
        }
    };
</script>

<style lang="scss" scoped>
    .home{
        background:url('../../images/bg_home.png');
    }
</style>