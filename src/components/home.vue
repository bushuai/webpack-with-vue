<style lang="sass">
  .sign{
    font-size:14px;
    color:#ccc;
    background-color:#f00;
  }
</style>

<template>
  <div class="sign">
    {{ message }}
  </div>
</template>

<script>
  export default{
    data(){
      return {
          message:'Hello world from home.vue'
      }
    }
}
</script>