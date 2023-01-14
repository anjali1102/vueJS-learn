<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <h3 v-if="false" v-html="title"></h3>
    <h1 v-else>I am Anjali🌻</h1>

    <h3 v-if="2 * 2 === 40" v-html="title"></h3>
    <h2 v-else-if="isShowing">This is v-else-if part</h2>
    <h1 v-else>something else part</h1>
    <!-- <div v-show="isShowing" >
      Count is :
      <span>{{ count }}</span>
    </div> -->

    <h1 v-text="count"></h1>
    <h3>Count is : {{ count }}</h3>
    <h5 v-once>Count is : {{ count }}</h5>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello to directives",
      isShowing: true,
      count: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
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
