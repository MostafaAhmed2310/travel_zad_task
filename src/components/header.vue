<template>
    <div class="header-container">
        <div class="nav-bar-body">
            <div class="logo-body">
                <img class="logo-img" src=""/>
            </div>
            <ul class="nav-bar-list">
                <li >الرئيسية</li >
                <li >التقارير</li>
                <li>الأخبار</li>
                <li >المعالم السياحية</li>
                <li >المواضيع</li>
            </ul>
            <div class="nav-btns">
                <router-link to="/login"><button class="login btn">تسجيل الدخول</button></router-link>
                <button class="new-report btn">تقرير جديد</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Header extends Vue {
  
}
</script>

<style scoped>
.nav-bar-body{
    background: #fff;
    border-bottom: 1px solid #ddd;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    height: 70px;
    z-index: 9999;
    overflow: hidden;
    clear: both;
}
.logo-body{
    float: right;
    width: 150px;
    height: auto;
}
.logo-body .logo-img{
    width: 100%;
}

.nav-bar-list{
    float: right;
    margin-right: 20%;
}

ul li{
    list-style: none;
    display: inline-block;
    margin-right: 30px;
    cursor: pointer;
}
.btn{
    width: 120px;
    height: 40px;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
}
.new-report{
    background: orange;
    color: #fff;
    border: none;
}
.login{
    background: #fff;
    color: orange;
    border: 2px solid orange;
    margin-right: 20px;
}
.nav-btns{
    float: right;
    line-height: 4;
}
</style>