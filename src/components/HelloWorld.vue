<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>首页Home</h2>
    <p>当前动态路由，所渲染的router-link最终为span标签</p>
    <p style="color:#e62a91">给当前span特殊的高亮颜色，只要你想要的，我都可以给你，路由就是能配成一朵花儿来展示</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '欢迎来到vue的世界！'
      }
    },
    beforeRouteEnter(to, from, next){
      //console.log('通过组件内部判断到当前访问Home页面，放行、通过！')
      //next();
      //问题：项目场景，在执行beforeRouteEnter后改变数据data里面值？
      //重点：beforeRouteEnter钩子比beforCreate都要更早执行，因此我们是不能通过this.msg拿到当前deta值
      //解决方案：next回调函数
      next((vm)=>{
          vm.msg = "欢迎访问我的路由案例，我是在beforeRouteEnter执行后改变过的数据！"
      })
    },
    beforRouteUpdata(to, from, next){
      next();
      //这个钩子函数主要是针对主导航下的二级导航，也就是说我们之前那么钩子函数都是针对主导航来进行设置，这个是针对二级导航
    },
    beforRouteLeave(to, from, next){
      next();
      //离开时时候执行钩子函数，如果设置next(false)，那么组件就一直停留在当前路由组件，无法进入其他任何路由组件
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
</style>
