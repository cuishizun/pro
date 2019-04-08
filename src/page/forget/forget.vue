<template>
    <div id="forget" class="bg flex_column">
        <head-top head-title="忘记密码" head-logo="true"></head-top>
        <div class="flex1 wrap">
            <img src="@/images/dog2.png">
            <div class="flex_row items-center">
                <div class="flex1"></div>
                <mt-field label="请输入手机号" class="flex16" placeholder="11位有效手机号" type="tel" v-model="phone1"></mt-field>
            </div>
            <div class="flex_row items-center">
                <div class="flex1"></div>
                <mt-field label="请输入验证码" class="flex11" placeholder="输入短信验证码" type="number" v-model="code"></mt-field>
                <span v-show="sendAuthCode" class="flex5 code" @click="getAuthCode">获取验证码</span>
                <span v-show="!sendAuthCode" class="code">{{auth_time}}秒</span>
            </div>
            <div class="flex_row">
                <div class="flex1"></div>
                <router-link to="/passwordset" class="flex7 flex_column">
                    <mt-button type="danger" class="btn">下 一 步</mt-button>
                </router-link>
                <div class="flex1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '@/components/header/head';

    export default {
        data() {
            return {
                phone: '',//登录手机号
                code: '',//注册手机号验证码
                sendAuthCode: true,//注册控制手机验证码显示‘获取按钮’还是‘倒计时’
                auth_time: 0, /*注册手机验证码倒计时 计数器*/
            };
        },
        methods: {
            getAuthCode() {
                this.sendAuthCode = false;
                this.auth_time = 60;
                var auth_timetimer = setInterval(() => {
                    this.auth_time--;
                    if (this.auth_time <= 0) {
                        this.sendAuthCode = true;
                        clearInterval(auth_timetimer);
                    }
                }, 1000);
            },
        },
        components: {
            headTop
        }
    };
</script>

<style lang="scss" scoped>
</style>