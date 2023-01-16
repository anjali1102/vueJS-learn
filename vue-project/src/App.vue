<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <section>
    <h1>Project 1: Todo</h1>
    <ul :key="index" v-for="(people, index) in gokuldham">
      {{
        index + 1
      }}:
      {{
        people
      }}
    </ul>
    <!-- we can use v-bind to connect html attribute with data inside Vue -->

    <!-- dynamic binding -->
    <!-- v-model.trim -->
    <!-- v-model.numer -->
    <input v-model.lazy="newHero" type="text" placeholder="add name" />
    <button :disabled="isDisable" @mouseover="newHero = 'sundar veera'">
      Add hero
    </button>
    <br />
    <br />
    <form @click.prevent="newPeople = 'pakka bhai'">
      <input type="text" v-model="newPeople" />
      <button type="submit">Add People</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      attribute: "value",
      isDisable: false,
      newHero: "Iyer 2.0",
      newPeople: "",
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
