<template>
    <div class="layout">
        <Header/>
        <div class="body-container">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
@Component({
  components: {
      Header,
      Footer,
  },
})
export default class Layout extends Vue {
  
}
</script>
<style  scoped>
.body-container{
    min-height: 413px;
    background: #dddddd36;
    margin-top: 70px;
    padding: 50px 0px;
    overflow: hidden;
    clear: both;
}
</style>