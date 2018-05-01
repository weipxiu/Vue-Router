<template>
  <div id="app">
    <ul class="nav">
      <!-- <li><router-link to='/home'>我是首页</router-link></li> -->
      <li><router-link to='/' exact tag="span" event='mouseover' active-class='span-active'><i></i>Home</router-link></li>
      <li><router-link to='/about' event='mouseover'>About</router-link></li>    
      <li><router-link :to="{path:'/document'}" exact event='mouseover'>Document</router-link></li>    
      <li><router-link :to="{path:'/leaving'}" exact event='mouseover'>Leaving</router-link></li>    
      <li><router-link to='/undefined' exact event='mouseover'>Undefined</router-link></li>    
      <li><router-link to='/user' event='mouseover'>User</router-link></li>    
    </ul>

    <transition>
    <router-view name="slide"></router-view>
    </transition>

    <!-- 运动模式out-in/in-out -->
    <!-- <transition name="left" mode="out-in">
      <router-view class="router-view"></router-view>
    </transition> -->

    <transition name="left">
      <router-view class="router-view"></router-view>
    </transition>
    
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

<style>
*{
  margin:0;
  padding: 0;
}
h1,h2{
  margin:25px 0;
}
body{
  overflow: hidden;
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
.router-view{
  width: 100%;
  position: absolute;
  left:0;
  top:100px
}
/*路由组件进出场动画效果start*/
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition:0.7s
}
/*路由组件进出场动画效果end*/

/*自定义的组件动画方式start*/
/*注意，在自定义动画时候的class只能修改v-，后面的不可以修改*/
.left-enter{ 
  transform: translateX(100%);
}
.left-enter-to{ 
  transform: translateX(0%)
}
.left-enter-active,.left-leave-active{ 
  transition: 1s
}
.left-leave{ 
  transform: translateX(0);
}
.left-leave-to{ 
  transform: translateX(-100%)
}
/*自定义的组件动画方式end*/
</style>
