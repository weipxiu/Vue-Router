<template>
  <div>
    <h1>{{ aaa }}</h1>
    <h2>当前绑定是固定路由</h2>
    <hr>
    <h2>嗦嘎，二级嵌套路由来袭了！！！</h2>
    <ul class="nav">
       <!-- <router-link to='/about' exact tag="li">study</router-link>   
       <router-link :to="{path:'/about/work'}" exact tag="li">work</router-link>   
       <router-link to='/about/hobby' exact tag="li">hobby</router-link> -->
       <!-- 命名视图，通过name别名去匹配 -->
       <router-link :to="{name:'About'}" exact tag="li">study</router-link>   
       <router-link :to="{path:'/about/work'}" exact tag="li">work</router-link>   
       <router-link :to="{name:'Hobby'}" exact tag="li">hobby</router-link>
       <router-view></router-view>   
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        aaa: '关于about页面！'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
ul.nav li{
  font-size:14px;
  color:#fff;
  padding:5px 10px;
  border-radius: 2px;
  background: rgb(156, 238, 63);
  text-decoration: none;
  cursor: pointer;
}
ul.nav .action{
  background: rgb(38, 219, 113)
}
</style>
