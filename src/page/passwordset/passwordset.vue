<template>
    <div id="pwdset" class="bg flex_column">
        <head-top head-title="忘记密码"></head-top>
        <div class="flex1 wrap">
            <img src="@/images/dog2.png">
            <div class="flex_row items-center">
                <div class="flex1"></div>
                <mt-field label="设置新密码" placeholder="请输入8位字母或数字" class="flex16" :type="pwdVisable?'text':'password'" v-model="password"></mt-field>
                <div @click="pwdVisableFn" class="flex1">
                    <i class="fa fa-eye-slash fa-lg" v-show="!pwdVisable"></i>
                    <i class="fa fa-eye fa-lg" v-show="pwdVisable"></i>
                </div>
            </div>
            <div class="flex_row items-center">
                <div class="flex1"></div>
                <mt-field label="确认新密码" placeholder="请再次输入密码" class="flex16" :type="pwdVisable1?'text':'password'" v-model="password1"></mt-field>
                <div @click="pwdVisableFn1" class="flex1">
                    <i class="fa fa-eye-slash fa-lg" v-show="!pwdVisable1"></i>
                    <i class="fa fa-eye fa-lg" v-show="pwdVisable1"></i>
                </div>
            </div>
            <div class="flex_row">
                <div class="flex1"></div>
                <router-link to="/passwordset" class="flex7 flex_column">
                    <mt-button type="danger" class="btn">确 认</mt-button>
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
                password: '',//密码
                password1: '',//确认密码
                pwdVisable: false,//密码显示隐藏眼睛标识
                pwdVisable1: false,//确认密码显示隐藏眼睛标识
            };
        },
        methods: {
            /*密码眼睛触发方法*/
            pwdVisableFn() {
                this.pwdVisable = !this.pwdVisable;
            },
            /*确认密码眼睛触发方法*/
            pwdVisableFn1() {
                this.pwdVisable1 = !this.pwdVisable1;
            }
        },
        components: {
            headTop
        }
    };
</script>