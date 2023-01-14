<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <h1>Project 1: Todo</h1>
    <ul v-bind:key="index" v-for="(people, index) in gokuldham">
      {{
        index + 1
      }}:
      {{
        people
      }}
    </ul>
    <input type="text" placeholder="add name" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "🙆🙆🙆🙆",
      gokuldham: [
        "Tapu",
        "Jetha",
        "Daya",
        "Bapuji",
        "Mehta Sahab",
        "Goli",
        "Bhide",
        "madhvi bhabhi",
        "Babita ji",
      ],
    };
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a:first-of-type {
  border: 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
