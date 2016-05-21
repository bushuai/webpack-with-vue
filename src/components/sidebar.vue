<template>
  <ul>
    <li>Home</li>
    <li>Articles</li>
    <li>About</li>
    <li>Wish</li>
  </ul>
</template>

<style lang="sass" scoped>
@import '../stylesheets/reset.css';
  ul{ 
    margin:0;
    padding:0;
    position:fixed;
    left:-200px;  
    top:0;
    bottom:0;
    width:200px;
    height:100%;
    background-color:#ccc;
  }  
</style>

<script>
  export default {
    data () {
      return {
        message:'Hello world from Sidebar.vue'
      }
    }
  }  
</script>