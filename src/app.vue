<style lang="sass">

</style>
<template>
  <top-header></top-header>
  <home></home>
  <sidebar></sidebar>
</template>
<script>
  import Home from './components/home.vue'
  import Sidebar from './components/sidebar.vue'
  import TopHeader from './components/header.vue'

  export default {
    data(){
      return {
        message:'Hello world from app.vue'
      }
    },
    components:{
        Home,
        Sidebar,
        TopHeader
    }
  }
</script>