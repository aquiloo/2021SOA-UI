<template>
  <div class="touchpad">
    <el-container>
      <el-header>Xiaoji智能家居系统</el-header>
      <el-main>
        <el-header>主菜单</el-header>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple" @click="jump1">人脸识别</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple" @click="jump2">灯光控制</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple" @click="jump3">新闻查询</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple" @click="jump4">电影播放</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple" @click="jump5">情绪场景</div></el-col>
          </el-row>
        </el-main>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  margin-top: 50px;
  text-align: center;
  line-height: 160px;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

<script>
export default {
  methods:{
    jump1(){
      this.$router.push('/face');
    },
    jump2(){
      this.$router.push('/light');
    },
    jump3(){
      this.$router.push('/news');
    },
    jump4(){
      this.$router.push('/movies');
    },
    jump5(){
      this.$router.push('/scenario');
    }
  },
  name:'Touchpad',
}
</script>
