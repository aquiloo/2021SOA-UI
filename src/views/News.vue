<template>
<div class="news">
  <div class="bu" @click="jump">News</div>
</div>
</template>

<script>
export default {
  name: "News",
  methods:{
    jump(){

    }
  },
}
</script>

<style scoped>
.news{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(../assets/pics/readingRoom.jpg) no-repeat center center fixed;
  /*height:1000px;*/
  background-size:cover;
  overflow: hidden;
}
.bu{
  margin-top:75px;
  margin-left: 468px;
  background-color: #42b983;
  width:780px;
  height:450px;
  /*transform: rotateX(-50deg) scale(1.1 1.5);*/
  /*perspective:150px;*/
}
</style>
