<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <router-view></router-view>
    <hahaha></hahaha>
    <router-link to="/">home</router-link>
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>
  </div>
</template>

<script>
import Hello from './components/Hello'
import hahaha from './components/hahaha'
export default {
  name: 'app',
  components: {
    Hello,
    hahaha,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
