<script setup>
const nav = [
  {
    label: "Movies",
    to: "/films",
  },
  {
    label: "Serials",
    to: "/tv",
  },
  {
    label: "Soon",
    to: "/soon",
  },
];
</script>

<template>
  <div class="header-navigation">
    <nav class="header-navigation__list">
      <div
        class="header-navigation__item"
        v-for="({ label, to }, index) in nav"
        :key="index"
      >
        <router-link class="header-navigation__link" :to="to">
          {{ label }}
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import "./HeaderNavigation.scss";
</style>
