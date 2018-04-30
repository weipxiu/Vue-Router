import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import document from '@/components/document'
import slide from '@/components/document_slide'
import leaving  from '@/components/leaving'
import undefined  from '@/components/undefined'

import study  from '@/components/about_child/study'
import work  from '@/components/about_child/work'
import hobby  from '@/components/about_child/hobby'


Vue.use(Router)

export default new Router({
  linkActiveClass :'action',
  scrollBehavior(to,from,savePosition){//滚动行为
    console.log(to) //进入的目标对象
    console.log(from) //离开的路由对象
    console.log(savePosition)//记录滚动路由坐标
    if(savePosition){
      return savePosition //针对鼠标点击浏览器前进后台，如果记录到坐标存在就返回出来之前坐标，
    }else{
      return{x:0,y:0} //否则都返回默认的（0,0）
    }
    //值得注意的是在谷歌浏览器上我发现即使不设置，好像也一样
  },
  mode:'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
      alias: '/abc' 
      /*设置alias可以在访问路由为'/abc'重定向时候路由地址不会跳转，依然为abc，也就是别名，
      通过abc地址渲染的还是home，请结合下面redirect重定向设置查看，但有必要注意的是，
      如果你使用这种方式，router-link的高亮就失效了，可以地址栏输入'abc'回车测试*/
    },
    {
      path: '/about',
      //name: 'about', 
      //如果设置了子路由，那么name去掉，否则控制台会有警告，去掉的name应该给子路由的默认路由
      component: about,
      children:[
        {
          path: '', //默认子路由，值不要/，虽然测试时候发现这里带/并没什么问题
          name: 'About',//父级去掉的name
          component: study
        },
        {
          path: 'work', // http://localhost:1234/about/work
          //注意，二级导航的path里面参数开头不能带/，否则会以根目录进行匹配
          name: 'Work',
          component: work
        },
        {
          path: '/hobby', // http://localhost:1234/hobby
          //注意，如果你想路由不进行嵌套，但组件关系进行嵌套，那么你需要设置name，在about组件里路由地址应该通过name别名进行设置
          name: 'Hobby',
          component: hobby
        }
      ]
    }
    ,
    {
      path: '/document',
      name: 'document',
      components: { //多个组件渲染到一个路由(命名视图技术)
        default:document, //默认渲染到router-view没有name的路由
        slide:slide
      }
    },
    {
      path: '/leaving',
      name: 'leaving',
      component: leaving
    },
    {
      path: '/undefined',
      name: 'nofind',
      component: undefined
    },
    {
      path: '*',
      // component: undefined 第一种方式 - 直接去渲染404-undefined组件

      //redirect: '/undefined' 
      /* 第二种方式redirect - 路由重定向,值得注意的是：当前这个undefined必须是你在上面配置过的地址
         也就是说，重定向到达的页面必须是已经存在的路由，如果组件没在上面routes里面配置，直接去重定向一个组件是会报错
      */
     
      //redirect:{path:'/undefined'}
      //第三种方式，对象写法，同样，还是通过上面配置过的路由地址进行跳转，不是直接渲染组件方式

      //redirect:{name:'nofind'}
      //第四种方式，对象通过name别名写法，同样，还是通过上面配置过的路由地址进行跳转，不是直接渲染组件方式
      
      redirect:(to) => {//第四种方式：动态设置重定向目标
        /*console.log(to) //to，目标路由对象，当前访问的目标路由信息
        return '/undefined'//重定向到一个上面配置过的路由地址*/

        //当然，既然说是动态设置，那么肯定不能向上述那样简简单单return完事，如下：
        if(to.path == '/abc'){
          return '/home' //如果目标路径是abc，那么我重定向到首页home
        }
        return '/undefined' //其他正常时候跳转到404
      }
    }
  ]
})
