<template>
  <header>
    <a href="#" class="logo">五味</a>
  </header>
</template>

<style lang="sass">
  @import "../stylesheets/reset.css"
  header{
    height:50px;
    width:100%;
    background-color:#fff;
    box-shadow:0 0 5px #ccc;
    margin-bottom:20px;    
      .logo{
          display:block;
        }
  }

</style>

<script>
  export default{
    data(){
      return {
        message:'from header'
      }
    },
    methods:{
      showSidebar(){
        
      }
    }
  }  
</script>