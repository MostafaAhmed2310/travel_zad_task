<template>
    <div class="login-signup-contanier">
        <form v-on:submit.prevent="login()">
            <div class="login-form">
            <h2>تسجيل الدخول</h2>
                <input class="form-input" type="email" placeholder="البريد الإلكتروني" v-model="email" required>
                <input class="form-input" type="password" placeholder="كلمة المرور"  v-model="password" required>
                <button class="login-btn form-input">الدخول</button>
            </div>
            <div class="switch-form">
                <p>اذا لم يكن لديك حساب من قبل فقم بانشاء حساب جديد</p>
                <router-link to="/signup"><button class="switch-btn form-input">إنشاء حساب جديد</button></router-link>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import {baseUrl} from '@/app.config'
@Component({
  components: {
      
  },
})
export default class Login extends Vue {
    email:string=""
    password:string=""
    BaseUrl:String = baseUrl
    login() {
        let This = this
        let url = this.BaseUrl+'users/login'
        axios.post(url, {
            'email':this.email,
            'password':this.password,
            'device_id':"1",
        })
        .then(function (response) {
            console.log(response);
            This.$router.push('/news')
            localStorage.setItem('access_token',response.data.token);
        })
        .catch(function (error) {
            alert(error)
        });
    }
  
}
</script>
<style  scoped>
.login-signup-contanier{
    width: 60%;
    margin: auto;
    background: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 0px #ddd ;
    padding: 30px;
    overflow: hidden;
}
.login-form{
    width: 50%;
    float: right;
    border-left: 1px solid #ddd;
}
.login-form h2{
    direction: rtl;
    width: 90%;
    margin: auto;
    display: block;
    padding: 20px 0px;
}
.form-input{
    display: block;
    direction: rtl;
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 0px 20px;
}
.login-btn{
    background: orange;
    color: #fff;
    cursor: pointer;
}
.switch-btn{
    background: #fff;
    color: orange;
    border: 1px solid orange;
    cursor: pointer;
}
.switch-form{
    width: 50%;
    float: left;
}
.switch-form p{
    color: gray;
    font-size: 14px;
    text-align: center;
}
</style>