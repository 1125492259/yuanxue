<template>
  <div id="nav">
      
     <ul>
     <li>
       <span class="nav-img"></span>
     </li>
     	<router-link tag="li" to="/home">首页</router-link>
     	<router-link class="learn" tag="li" to="/movie">视频学习</router-link>
     	<router-link tag="li" to="/image">形象提升</router-link>
     	<router-link tag="li" to="/talk">沟通能力</router-link>
     	<router-link tag="li" to="/main">关于我们</router-link>
      
     </ul>
<!--      <div class="two">
   11111
</div> -->
  </div>
</template>

<style scoped>
   #nav{overflow: hidden;}
   ul{display: flex;height: 70px;background-color: red;position: fixed;top:0;width: 100%;opacity: 0.5;margin-bottom: 70px;}
   li{margin-left: 20px;margin-top: 10px;line-height: 70px;cursor: pointer;}
   .nav-img{
    background-size: 100%;
    background-repeat: no-repeat;
    display: inline-block;
    width: 130px;
    transition: all 1s;
    height: 60px;
    background-image: url(https://cdn.yuanxue365.com/logo_down.png);
    margin-top: 3px;
    z-index: 999;
   }
/*    .two{
 height: 50px;
 width: 50px;
 background-color: black;
 position: fixed;
 left: 215px;
 top: 67px;
}
.learn:hover{
   color: red;
} */


</style>
