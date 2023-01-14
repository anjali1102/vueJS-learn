const template = "<h1>{{title}}</h1><h1>{{gender}}</h1> ";

const data = function data() {
  return {
    title: "Anjali!!",
    gender: " 👧",
  };
};

const App = Vue.createApp({ data, template });
App.mount("#vue-app");
