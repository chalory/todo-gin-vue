<template>
  <div id="app">
    <h1>ToDo List</h1>
    <ul>
      <li v-for="item in todolist" v-bind:key="item"></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
const appData = {
  todolist: ["More to do"]
}
export default {
  name: 'App',
  data() {
    return appData;
  },
  mounted: function() {
    this.getList();
  },
  methods: {
    getList: getList
  }
}
// function getList() {
//   axios.get("http://192.168.1.27:8081/api/lists").then( res => {
//     appData.todolist = res.data.list
//   });
// }
async function getList() {
  try {
    const response = await axios.get('http://192.168.1.27:8080/api/lists');
    console.log(response);
  } catch (error) {
    console.error(error);
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