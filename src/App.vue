<template>
  <div id="app">
    <h3>hello</h3>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.id }}-{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    console.log("mounted");
    axios.get("/vue-back/users").then((res) => {
      console.log(res);
      this.users = res.data;
    });
  },
};
</script>

<style></style>
