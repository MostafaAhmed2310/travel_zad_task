<template>
    <div class="footer-container">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, consectetur eum adipisci vero ratione dolorem velit ex dolore, explicabo iusto quod distinctio iste, accusamus ea est sint. Impedit, aliquam eaque?</p>
        <span>تليفون: 01229460661</span>
        <span>الإيميل: mostafa@gmail.com</span>
        <div class="copy-right">&copy كل الحقوق محفوظة </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Footer extends Vue {
  
}
</script>

<style  scoped>
.footer-container{
    background: green;
    width: 100%;
    text-align: center;
    color: #fff;
    padding: 30px;
    position: relative;
    display: block;
    clear: both;
}
.footer-container p{
    width: 50%;
    margin: auto;
    font-size: 14px;
}
.footer-container span{
    font-size: 14px;
    margin-left: 20px;
    display: inline-block;
    direction: rtl;
}
.copy-right{
    position: absolute;
    width: 100%;
    background: darkgreen;
    right: 0;
    left: 0;
    bottom: 0;
    font-size: 12px;
}
</style>