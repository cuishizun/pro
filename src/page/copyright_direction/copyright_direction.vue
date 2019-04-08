<template>
    <div id="copyright_direction" class="bg flex_column">
        <head-top head-title="版权登记说明" head-logo="true"></head-top>
        <div class="flex200 flex_row">
            <div class="flex1"></div>
            <div class="flex7 wrap">
                <h4>中云文化大数据</h4>
                <img src="@/images/copyright1.png">
                <h6 class="flex7">中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据</h6>
                <img src="@/images/copyright1.png">
                <h6 class="flex7">中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据</h6>
                <img src="@/images/copyright1.png">
                <h6 class="flex7">中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据</h6>
                <img src="@/images/copyright1.png">
                <h6 class="flex7">中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据中云文化大数据</h6>
            </div>
            <div class="flex1"></div>
        </div>
        <footer class="flex1 flex_row items-end">
            <div class="flex1"></div>
            <router-link to="/" class="flex6 dis-inherit">
                <mt-button type="danger" class="flex1 btn">我 知 道 了</mt-button>
            </router-link>
            <div class="flex1"></div>
        </footer>
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

<style>
</style>