<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
          </div> -->
          <navbar/>
          <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
export default {
  components:{
    navbar
  }
}  
</script>

<style>
  *{margin: 0;padding: 0;}
  li{list-style: none;}
  #app{
    margin-top: 70px;
  }
</style>
