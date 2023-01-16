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
    <form
      @click.prevent="
        gokuldham.push(newHero);
        newHero = '';
      "
    >
      <input v-model.lazy="newHero" type="text" placeholder="add name" />
      <button :disabled="isDisable" type="submit">Add hero</button>
    </form>
    <br />
    <br />
  </section>
</template>

<script>
export default {
  data() {
    return {
      attribute: "value",
      isDisable: false,
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
