<template>
  <div class="user">
    <h2>当前页面user</h2>
    <p>当前绑定是动态路由，通过地址栏传入不同的参数，而在user组件里展示不同的用户信息</p>
    <ul class="nav">
      <router-link :to="'/user/'+item.id" v-for="item in dataList" :key="item.id" tag="li">{{item.userName}}</router-link>
    </ul>
  </div>
</template>
<script>
  import userData  from '@/data.js'
  export default {
    name: 'user',
    data () {
      return {
        msg: 'user',
        dataList: userData
      }
    },
    created(){
      
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
p{
  margin-top:25px;
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
