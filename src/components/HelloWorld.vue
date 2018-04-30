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
