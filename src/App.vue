<template>
  <div id="app">
    <table-sort />
    <router-view/>
  </div>
</template>
<script>
import TableSort from './components/TableSort.vue'

export default {
  name: 'App',
  components:{
    TableSort
    } 
    
}
</script>
<style lang="scss">

</style>
