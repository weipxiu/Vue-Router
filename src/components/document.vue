<template>
  <div class="document">
    <h1>{{ bbb }}</h1>
    <p>当前绑定是动态路由，使用方式则为对象，所渲染的router-link为默认a标签</p>
  </div>
</template>

<script>
  export default {
    name: 'document',
    data () {
      return {
        bbb: '当前页面document'
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
.document{
  float: right
}
</style>
