import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

let state = {
  count:0
}
let mutations={
  increment(state,num){
    state.count+=num
  }
}
const store = new Vuex.Store({
  state,
  mutations
})
export default store
