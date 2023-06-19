console.log("Vue ok", Vue);

const app = Vue.createApp({
  data() {
    return {
      images: [
        { id: 1, url: "img/01.webp" },
        { id: 2, url: "img/02.webp" },
        { id: 3, url: "img/03.webp" },
        { id: 4, url: "img/04.webp" },
        { id: 5, url: "img/05.webp" },
      ],
    };
  },
});
app.mount("#root");
