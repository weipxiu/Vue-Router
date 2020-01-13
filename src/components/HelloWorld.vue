<template comments>
  <div>
    <!-- 这是一段注释 -->
    <h1>{{ msg }}</h1>
    <h2 @click="methods($event)">{{ msg1 }}</h2>
    <h2 @click="onHander">首页Home</h2>
    <p>当前动态路由，所渲染的router-link最终为span标签</p>
    <!--[if mso]> 这是一段注释 <![endif]-->
    <p style="color:#e62a91">给当前span特殊的高亮颜色，只要你想要的，我都可以给你，路由就是能配成一朵花儿来展示</p>
    <div v-for="(item,index) in new_obj" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  comments: true,
  data() {
    return {
      msg: '欢迎来到vue的世界！',
      msg1:'我是一坨字符串',
      new_obj:{100:'a',2:'b',7:'c'}
    }
  },
  created () {
    ;
  },
  methods: {
    onHander() {
      let routeData = this.$router.resolve({
        name: "/Details",
        query: { goodsSn: '00' },
        params: { goodsSn: '00' }
      });
      console.log(routeData)
      window.open(routeData.resolved.name + routeData.href.substring(1), '_blank');
    },
    methods(e) {
      console.log(e.currentTarget)
        this.msg='123321'
    }
  },
  watch:{
    msg: (val, oldVal)=>{
      console.log('打印',this)
    }
  },
  mounted(){
    console.log('vue根实例',this.$router.options.routes)
  },
  beforeRouteEnter(to, from, next) {
    //console.log('通过组件内部判断到当前访问Home页面，放行、通过！')
    //next();
    //问题：项目场景，在执行beforeRouteEnter后改变数据data里面值？
    //重点：beforeRouteEnter钩子比beforCreate都要更早执行，因此我们是不能通过this.msg拿到当前deta值
    //解决方案：next回调函数
    next((vm) => {
      vm.msg = "欢迎访问我的路由案例，我是在beforeRouteEnter执行后改变过的数据！"
    })
  },
  beforRouteUpdata(to, from, next) {
    next();
    //这个钩子函数主要是针对主导航下的二级导航，也就是说我们之前那么钩子函数都是针对主导航来进行设置，这个是针对二级导航
  },
  beforRouteLeave(to, from, next) {
    next();
    //离开时时候执行钩子函数，如果设置next(false)，那么组件就一直停留在当前路由组件，无法进入其他任何路由组件
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  height: 5000px;
}
h1,
h2 {
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
p {
  margin-top: 25px;
}
</style>
