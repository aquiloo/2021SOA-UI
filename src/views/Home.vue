<template>
  <div class="home">
    <div class="bu" @click="jump"></div>
  </div>
</template>



<style>
.home{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(../assets/pics/home.webp) no-repeat center center fixed;
  /*height:1000px;*/
  background-size:cover;
  overflow: hidden;
}
.bu{
  margin-top:310px;
  margin-left: 110px;
  /*background-color: #42b983;*/
  width:475px;
  height:300px;
}
</style>


<script>
export default {
  methods:{
    jump(){
      this.$router.push('/Touchpad')
    }
  },
  name: 'Home',
}
</script>
