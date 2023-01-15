<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <section>
    <h1>Project 1: Todo</h1>
    <ul v-bind:key="index" v-for="(people, index) in gokuldham">
      {{
        index + 1
      }}:
      {{
        people
      }}
    </ul>
    <!-- we can use v-bind to connect html attribute with data inside Vue -->
    <input v-bind:value="newHero" type="text" placeholder="add name" />
    <button v-bind:disabled="isDisable">Add hero</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isDisable: true,
      newHero: "Iyer",
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
section {
  max-height: 100vh;
}
</style>
