<template>
  <div class="wrap">
    <div>
      <VueSidebarMenuAkahon menuTitle="Of Me" />
    </div>
    <h1 class="title">{{ title }}</h1>
    <div class="box">
      <ul class="list">
        <li v-for="img of img" class="items">
          <div class="card">
            <img v-bind:src="img.src.tiny" v-bind:alt="img.alt" />
            <div class="img-text">{{ img.alt }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
export default {
  name: "component.vue",
  components: { VueSidebarMenuAkahon },
  data() {
    return {
      title: "Of Me",
      img: []
    };
  },
  created() {
    this.$http
      .get(process.env.VUE_APP_URL_API, {
        headers: {
          Authorization: process.env.VUE_APP_API_AUTHORIZATION
        }
      })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.img = response.photos;
      });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Island+Moments&family=Neonderthaw&family=Oswald:wght@300&family=Oxygen&family=Permanent+Marker&display=swap");
html {
  background: #f6f6f4;
}
.wrap {
}
h1 {
  padding: 0;
  margin: 20px 0 0 0;
  display: flex;

  font-weight: bold;
  font-size: 7rem;
  font-family: "Island Moments", cursive;
  color: #5c5c5c;
  justify-content: center;
}
@keyframes neon {
  from {
    filter: drop-shadow(0 0 0 var(--shiny));
  }
  to {
    filter: drop-shadow(0 0 1000px var(--shiny));
  }
}
h1 {
  animation: neon 2s alternate infinite ease-in;
}
.title {
  --shiny: #2e2e2e;
}
.box {
  position: relative;
  width: 90%;
  margin: 0 auto;
}
.list {
  margin-top: 40px;
  align-content: center;
}
.items {
  display: inline-block;
  padding: 13px;
  justify-content: center;
}
.items img {
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;
}
.items img:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

img {
  max-width: 100%;
  width: 15rem;
  height: 14rem;
  border-radius: 3px;
}
.img-text {
  position: relative;
  visibility: hidden;
  opacity: 0;
  background: rgb(85, 85, 85);
  width: 15rem;
  height: 2rem;

  color: #ffffff;
  display: flex;
  font-family: "Oswald", sans-serif;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0 0 3px 3px;
  text-align: center;

  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;
}
.card:hover .img-text {
  visibility: visible;
  opacity: 1;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
