import Vue from 'vue'
import Router from 'vue-router'
import buycar from './buycar'
import message from './message'
import mymessage from './mymessage'



//使用懒加载的方式来引入，只有路由被访问的时候才加载
// 什么是懒加载？举个例子：首先，我们应该都见过这样的场景：
// 一个页面有很多图片，但是首屏只出现几张，这时如果一次性把图片都加载出来会影响性能。
// 这时可以使用懒加载，页面滚动到可视区在加载。优化首屏加载。


//import home from '@/components/home'


const shouye = resolve => require(['@/components/shouye'],resolve)//按模块划分懒加载




Vue.use(Router)
    let router =  new Router({
  routes: [
    {
        path:'/',
        name:'shouye',
        component:shouye

    },
    {
        path:'/shouye',
        name :'shouye',
        component:shouye,
        children:[
            ...buycar,
            ...message
            
        ]
    },
    
    ...mymessage

  ]
})
/* 
    对每次访问之前都要先看是否已经登录
    路由钩子函数，一般有两种：
    1、Vue.beforeEach(function(to,form,next){}) // 在跳转之前执行
    2、Vue.afterEach(function(to,form))// 在跳转之后判断
    to：表示即将进入的路由对象
    from：当前导航即将离开的路由
    next:Function,进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。
         afterEach函数不用传next()函数
    */
    // router.beforeEach((to,from,next)=>{
    //     if(to.path.startsWith('/login')){
    //         window.sessionStorage.removeItem('access-token');
    //         next();
    //     }else{
    //         let token = window.sessionStorage.getItem('access-token');
    //         if(!token){
    //             //未登录  跳回主页面
    //             next({path:'/login'});
    //         }else{
    //             next();
    //         }
    //     }
        
    // });
    
    
export default router


/*
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'

const loginpage = resolve => require(['@/components/Login'],resolve)
Vue.use(Router)

let router =  new Router({
  routes: [
        {
            path:'/',
            name :'login',
            component:loginpage
        },
        {
            path:'/login',
            name :'login',
            component:loginpage
        },
        {
            path:'/home',
            name :'home',
            component:home
        }
  ]
})
    //对每次访问之前都要先看是否已经登录
    router.beforeEach((to,from,next)=>{
        if(to.path.startsWith('/login')){
            window.sessionStorage.removeItem('access-token');
            next();
        }else{
            let token = window.sessionStorage.getItem('access-token');
            if(!token){
                //未登录  跳回主页面
                next({path:'/login'});
            }else{
                next();
            }
        }
        
    });
    
    
export default router


*/ 
