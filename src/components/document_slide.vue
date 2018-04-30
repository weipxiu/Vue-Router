<template>
  <div class="slide">
    <h1>{{ bbb }}</h1>
    <p>当前页面渲染两个组件到一个路由地址展示！</p>
    <h2>我是另一个组件</h2>
  </div>
</template>

<script>
  export default {
    name: 'slide',
    data () {
      return {
        bbb: '当前页面document侧边栏'
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
.slide{
  width:300px;
  border-right:1px solid #ccc;
  height:1000px;
  float: left;
}
</style>
