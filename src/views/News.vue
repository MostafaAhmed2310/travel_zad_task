<template>
    <div class="news-container">
        <div class="item" v-for="item in items" :key="item">
            <div class="project-item-body">
                <div class="project-img-body">
                    <img src="@/assets/zad.jpg" alt=""/>
                </div>
                <div class="project-info-body">
                    <h4>أفضل طريقة مواصلات</h4>
                    <span>22/1/2021</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus architecto, debitis, doloribus nemo dolorem tempora laudantium atque reprehenderit repudiandae saepe sapiente quisquam excepturi aliquam! Voluptatem laudantium eaque animi beatae consectetur.</p>
                </div>
                <hr>
                <p class="more">< متابعة المزيد</p>
                
            </div>
        </div>
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
export default class News extends Vue {
    items:any[]= [0,1,2,3,4,5]
    BaseUrl:String = baseUrl
    getNews(){
        let token = 'Bearer ' + localStorage.getItem('access_token')
        let url = this.BaseUrl+"news?paging[page_size]=20&paging[page_number]=1‏"
        axios.get(url, {
            headers: { Authorization: token } 
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    mounted(){
        this.getNews()
    }
}
</script>

<style scoped>
.news-container{
    padding: 30px;
}
.project-item-body{
    width: 30%;
    height: auto;
    box-shadow: 1px 1px 4px 1px #ddd;
    float: right;
    background: #fff;
    margin-right: 3%;
    margin-bottom: 3%;
    border-radius: 5px;
}
.project-img-body{
    width: 100%;
    height: 200px;
}
.project-img-body img{
    width: 100%;
    height: 100%;
}
.project-info-body{
    padding: 10px;
    direction: rtl;
}
.project-info-body h4{
    direction: rtl;
    margin: 0px;
}
.project-info-body p{
    font-size: 12px;
}
.more{
    font-size: 12px;
    margin-left: 10px;
}
</style>