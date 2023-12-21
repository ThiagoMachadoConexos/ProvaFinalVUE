<template>
  <div class="home">
    <MainMenu></MainMenu>
  </div>
</template>

<script>
// @ is an alias to /src
import MainMenu from '@/components/MainMenu.vue'

export default {
  name: 'HomeView',
  components: {
    MainMenu
  }
}
</script>
