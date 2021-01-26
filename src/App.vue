<template>
    <div id="app">
        <Layout/>
    </div>
</template>



<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');

*{
    font-family: "cairo";
    box-sizing: border-box;
}
body{
    margin: 0;
}
a{
    text-decoration: none !important;
}
</style>



<script>
import Vue from "vue";
import Layout from "@/components/travelLayout.vue";
export default Vue.extend({
  name: "app",

  components: {
    Layout,
  },
  data() {
    return {
    };
  },

});
</script>
