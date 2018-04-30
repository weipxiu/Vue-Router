<template>
  <div>
    <h2>抱歉：404，你访问的路由页面不存在！</h2>
    <h2>你可以尝试在地址栏随便输入参数，看是否能正常重定向当前页面！</h2>
  </div>
</template>

<script>
  export default {
    name: 'undefined',
    data () {
      return {
        msg: 'undefined'
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
