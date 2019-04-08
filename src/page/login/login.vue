<template>
    <div id="login" class="bg flex_column">
        <head-top head-title="艺狗往"></head-top>
        <div class="flex1 wrap">
            <img src="@/images/dog1.png">
            <div class="nav">
                <mt-button size="small" @click.native.prevent="active = 'login'">登录</mt-button>
                <mt-button size="small" @click.native.prevent="active = 'register'">注册</mt-button>
            </div>
            <mt-tab-container v-model="active" class="flex_column">
                <div class="flex1"></div>
                <div class="flex7">
                    <mt-tab-container-item id="login">
                        <div class="flex_row items-center">
                            <i class="fa fa-phone fa-lg flex1"></i>
                            <mt-field placeholder="请输入手机号" class="flex16" type="tel" v-model="phone"></mt-field>
                        </div>
                        <div class="flex_row items-center">
                            <i class="fa fa-lock fa-lg flex1"></i>
                            <mt-field placeholder="请输入密码" class="flex16" :type="pwdVisable?'text':'password'" v-model="password"></mt-field>

                            <div @click="pwdVisableFn" class="flex1">
                                <i class="fa fa-eye-slash fa-lg" v-show="!pwdVisable"></i>
                                <i class="fa fa-eye fa-lg" v-show="pwdVisable"></i>
                            </div>
                        </div>
                        <div class="flex_row justify-end">
                            <router-link to="/forget" class="blue">
                                忘记密码？
                            </router-link>
                        </div>
                        <div class="flex_column wrap">
                            <mt-button type="danger" @click="loginFn" class="flex1 btn">登 录</mt-button>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="register" class="flex_column">
                        <div class="flex_row items-center">
                            <i class="fa fa-phone fa-lg flex1"></i>
                            <mt-field class="flex16" placeholder="请输入手机号" type="tel" v-model="phone1"></mt-field>
                        </div>
                        <div class="flex_row items-center">
                            <div class="flex1"></div>
                            <mt-field class="flex11" placeholder="请输入验证码" type="number" v-model="code"></mt-field>
                            <span v-show="sendAuthCode" class="flex5 code" @click="getAuthCode">获取验证码</span>
                            <span v-show="!sendAuthCode" class="code">{{auth_time}}秒后重新获取验证码</span>
                        </div>
                        <div class="flex_row items-center">
                            <i class="fa fa-lock fa-lg flex1"></i>
                            <mt-field class="flex16" placeholder="请输入8位字母或数字作为密码" :type="pwdVisable1?'text':'password'" v-model="password1"></mt-field>

                            <div @click="pwdVisableFn1" class="flex1">
                                <i class="fa fa-eye-slash fa-lg" v-show="!pwdVisable1"></i>
                                <i class="fa fa-eye fa-lg" v-show="pwdVisable1"></i>
                            </div>
                        </div>
                        <div class="flex_row items-center">
                            <div class="flex1"></div>
                            <mt-field class="flex16" placeholder="再次输入密码" :type="pwdVisable2?'text':'password'" v-model="password2"></mt-field>

                            <div @click="pwdVisableFn2" class="flex1">
                                <i class="fa fa-eye-slash fa-lg" v-show="!pwdVisable2"></i>
                                <i class="fa fa-eye fa-lg" v-show="pwdVisable2"></i>
                            </div>
                        </div>
                        <div class="flex_column">
                            <mt-button type="danger" @click="registerFn" class="flex1 btn">注 册</mt-button>
                        </div>
                        <div class="flex_column">
                            <div class="flex1 wrap">
                                <router-link to="/protocol" class="blue">
                                    《用户协议》
                                </router-link>已阅读并同意
                                <img class="va_md" src="@/images/radio.png">
                            </div>
                        </div>
                    </mt-tab-container-item>
                </div>
                <div class="flex1"></div>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
    import headTop from '@/components/header/head';
    import { MessageBox } from 'mint-ui';

    export default {
        data() {
            return {
                phone: '',//登录手机号
                phone1: '',//注册手机号
                password: '',//登录密码
                password1: '',//注册密码
                password2: '',//注册确认密码
                code: '',//注册手机号验证码
                pwdVisable: false,//登录密码显示隐藏眼睛标识
                pwdVisable1: false,//注册密码显示隐藏眼睛标识
                pwdVisable2: false,//注册确认密码显示隐藏眼睛标识
                sendAuthCode: true,//注册控制手机验证码显示‘获取按钮’还是‘倒计时’
                auth_time: 0, /*注册手机验证码倒计时 计数器*/
                protocol: '1',//单选按钮选中值
                active: 'login'//默认显示登录表单还是注册表单
            };
        },
        methods: {
            /*登录密码眼睛触发方法*/
            pwdVisableFn() {
                this.pwdVisable = !this.pwdVisable;
            },
            /*注册密码眼睛触发方法*/
            pwdVisableFn1() {
                this.pwdVisable1 = !this.pwdVisable1;
            },
            /*登录确认密码眼睛触发方法*/
            pwdVisableFn2() {
                this.pwdVisable2 = !this.pwdVisable2;
            },
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
            /*登录触发方法*/
            loginFn(events) {
                this.$messagebox({
                    title: '',
                    message: '您所输入的账号、密码错误或还未注册',
                    showCancelButton: true,
                    confirmButtonText: "注 册",
                    cancelButtonText: "继续登录"
                }).then(action => {
                    if (action == 'confirm') {
                        this.active='register';
                    }
                });
                /*if (!this.phone || !this.password) {
                    MessageBox('提示', '请输入手机号密码');
                } else {
                    this.$http.post('/try/ajax/ajax_info.txt', { phone: this.phone, password: this.password }, { emulateJSON: true }).then(function (res) {
                        if (res) {
                            this.$router.push({ path: "/" });
                        } else {
                            MessageBox('', '您所输入的账号、密码错误或还未注册');
                        }
                    }, function () {
                        MessageBox('提示', '请求失败');
                    });
                }*/
            },
            /*注册触发方法*/
            registerFn(events) {
                if (!this.phone1 || !this.code || !this.password1 || !this.password2) {
                    MessageBox('提示', '请输入手机号、验证码、密码、确认密码');
                } else {
                    this.$http.post('/try/ajax/ajax_info.txt', { phone: this.phone1, code: this.code, password: this.password1, password1: this.password2 }, { emulateJSON: true }).then(function (res) {
                        if (res) {
                            this.$router.push({ path: "/" });
                        } else {
                            MessageBox('提示', '注册失败');
                        }
                    }, function () {
                        MessageBox('提示', '请求失败');
                    });
                }
            }
        },
        components: {
            headTop
        }
    };
</script>

<style lang="scss" scoped>
</style>