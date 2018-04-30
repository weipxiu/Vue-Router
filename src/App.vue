<template>
  <div id="app">
    <ul class="nav">
      <!-- <li><router-link to='/home'>我是首页</router-link></li> -->
      <li><router-link to='/' exact tag="span" event='mouseover' active-class='span-active'><i></i>Home</router-link></li>
      <li><router-link to='/about' event='mouseover'>About</router-link></li>    
      <li><router-link :to="{path:'/document'}" exact event='mouseover'>Document</router-link></li>    
      <li><router-link :to="{path:'/leaving'}" exact event='mouseover'>Leaving</router-link></li>    
      <li><router-link to='/undefined' exact event='mouseover'>Undefined</router-link></li>    
    </ul>
    <router-view name="slide"></router-view>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  data(){
    return {
      index : '/home'
    }
  },
  name: 'App',
  components:{
    HelloWorld //注册组件名称首字母大写
  }
}
</script>

<style scope>
*{
  margin:0;
  padding: 0;
}
h1,h2{
  margin:25px 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav{
  margin:30px 0;
}
ul.nav li{
  display: inline-block;
}
ul.nav li a,ul.nav li span{
  font-size:14px;
  color:#fff;
  padding:5px 10px;
  border-radius: 2px;
  background: rgb(156, 238, 63);
  text-decoration: none
}
ul.nav li span.span-active{
  background: #e62a91
}
ul.nav .action{
  background: rgb(38, 219, 113)
}
</style>
