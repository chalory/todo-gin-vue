
  <!-- <template><h1>Todo</h1>
<div>
  
  <li v-for="item in list" :key="item.entry">
  {{item.entry}}</li>
  
  </div>
  
  
  </template> -->

<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li v-for="item in list" :key="item.entry"></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "App",

  data()
  {
    return {
      list: []
    }
  },

  async mounted()
  {
    let result = await axios.get("http://localhost:8080/api/lists");
    console.warn(result.data.list)
    this.list=result.data.list

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
