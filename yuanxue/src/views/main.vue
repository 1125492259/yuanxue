<template>
  <div>
     <h1>main</h1>
     <ul>
     		<router-link tag="li" to="/main/aboutus">关于我们</router-link>
     	<router-link tag="li" to="/main/talkus">联系我们</router-link>
     </ul>
     <router-view></router-view>
  </div>
</template>
<script>
	export default {

    }
</script>
<style scoped>

</style>
