<template>
  <div class="aaa">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="tod in todo">
        {{ tod.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'aaa',
  data () {
    return {
      msg: 'helloWanghao',
      todo:[
        {text:1},
        {text:2},
        {text:3},
        {text:4}
      ]
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
</style>
