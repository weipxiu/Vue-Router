<template>
  <div class="user">
    <h2>当前页面user</h2>
    <p style="margin-bottom:35px">当前绑定是动态路由，通过地址栏传入不同的参数，而在user组件里展示不同的用户信息</p>
    <hr>
    <ul class="nav">
      <router-link :to="'/user/'+item.id" v-for="item in dataList" :key="item.id" tag="li">{{item.userName}}</router-link>
    </ul>
    <div v-if="userInfo.id"> <!--判断里面对象有木有，如果木有就不渲染了-->
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
  </div>
</template>
<script>
  import userData  from '@/data.js'
  export default {
    name: 'user',
    data () {
      return {
        dataList: userData,
        userInfo:{}
      }
    },
    watch:{
      "$route":function(){
      this.wacchList()
      }
    },
    created(){
      this.wacchList()
    },
    methods:{
      wacchList(){
        let id = this.$route.params.xxx;//拿到动态路由params对象信息
        if(!id){
          this.userInfo = {}
          return
        }
        this.userInfo = this.dataList.filter((item)=>{
          return item.id == id;
        })[0] //过滤后的数组
        console.log(this.userInfo)
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
