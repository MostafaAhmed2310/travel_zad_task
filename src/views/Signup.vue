<template>
    <div class="login-signup-contanier">
        <form v-on:submit.prevent="signup()">
            <div class="login-form">
                <h2>إنشاء حساب جديد</h2>
                <input class="form-input" type="text" placeholder=" *الاسم بالكامل" required v-model="name">
                <input class="form-input" type="email" placeholder="*البريد الإلكتروني" required v-model="email">
                <input class="form-input" type="number" placeholder=" *رقم التليفون" required v-model="mobile">
                <input class="form-input" type="password" placeholder="*كلمة المرور" required v-model="password">
                <input class="form-input" type="date" placeholder=" تاريخ الميلاد" v-model="dob">
                <button class="login-btn form-input">انشاء حساب</button>
            </div>
            <div class="switch-form">
                <p>لديك حساب بالفعل</p>
                <router-link to="/login"><button class="switch-btn form-input"> تسجيل الدخول</button></router-link>
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
export default class Signup extends Vue {
    name:string=""
    email:string = ""
    password:string=""
    mobile:String = ""
    dob:String = ""
    BaseUrl:String = baseUrl

  signup() {
      let This = this
        let url = this.BaseUrl+'users/signup?device_id=1'
        axios.post(url, {
            'name':this.name,
            'email':this.email,
            'password':this.password,
            'phone':this.mobile,
            'dob':this.dob,
        })
        .then(function (response) {
            console.log(response);
            This.$router.push('/news')
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