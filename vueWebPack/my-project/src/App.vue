<template lang="html">
  <div>
    <p>hellow{{$store.state.count}}</p>
    <test></test>
  </div>
</template>

<script>
import Test from './Test'
export default {
  components:{
    Test
  }
}
</script>
<style lang="css">
</style>
