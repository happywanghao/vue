import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
const Foo = { template: '<div>foo</div>' }
const Bar = {
   template: '<div>haaaaaaa{{$route.params.id}}</div>',
   mounted(){
     console.log(this.$route);
   }
 }
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar/:id', component: Bar }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
export default router
