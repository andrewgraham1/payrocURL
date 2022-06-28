<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="navBar">
    <header class="header">
      <img src="https://i.imgur.com/2Aau5E4.png" alt="company logo" />
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <h1>Make long URLs extinct!</h1>
    </header>
  </div>

  <RouterView></RouterView>
</template>

<style>
@import "@/assets/base.css";

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}

img {
  height: 70px;
}
h1 {
  align-items: center;
  color: black;
  text-align: center;
  font-weight: bold;
}

.navBar {
  background-color: lightblue;
  width: 70%;
  border-radius: 25px;
  margin: 20px;
}

#app {
  max-width: 1280px;

  margin: 0 auto;
  padding: 2rem;
  display: flex;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
