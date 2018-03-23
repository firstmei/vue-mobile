<template>
    <div>
       <mt-header title="登录">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right">注册</mt-button>
        </mt-header>
        <form class="form-area">
            <mt-field label="用户名"  placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码"  placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </form>
        <div class="btns">
            <mt-button type="primary" size="large" @click="login">登录</mt-button>
        </div>  
    </div>
   
</template>

<style>
    .btns{
        padding: 20px 15px;
        text-align: center;
    }
    .form-area{
        margin-top:20px;
    }
</style>

<script>
    export default {
        name:'Login',
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            login:function(){
                this.$router.push('list');
            }
        }
    }
</script>

