import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
const Foo = { template: '<div>foo</div>' }
const Bar = {
   template: '<div>haaaaaaa <router-view></router-view></div>',
   mounted(){
     console.log(this.$route);
   }
 }
 const Aaa={
   template: '<div>aaa</div>'
 }
 const Def={
   template: '<div>default aaa</div>'
 }
const routes = [
  { path: '/foo', component: Foo },
  {
    path: '/bar', component: Bar ,
    children:[
      {path: '/', component:Def },
      {path: 'aaa', component: Aaa}
    ]
  }

]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
export default router
