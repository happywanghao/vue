<template >
  <div>
    {{$store.state.count}}
    <button @click='add(+10)'>+10</button>
    <button @click='add(-10)'>-10</button>

  </div>
</template>

<script>
export default {
  methods:{
    add(num) {
      this.$store.commit('increment',num)
    }
  }
}
</script>

<style>
</style>
