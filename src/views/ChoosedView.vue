<template>
    <div>
        
        <div class="login-container">
            <login/>
        </div>
        <div class="news-container">

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/views/Login.vue'

@Component({
  components: {
      Login,
  },
})
export default class ChoosedView extends Vue {

  
    created() {

    }
}
</script>
