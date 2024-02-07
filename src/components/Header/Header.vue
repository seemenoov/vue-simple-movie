<script setup>
import HeaderNavigation from "./HeaderNavigation.vue";
import SearchIcon from "@/assets/svg/search.svg";
import SettingsIcon from "@/assets/svg/settings.svg";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__left">
          <router-link to="/" class="header__logo">
            <img src="/logo.png" alt="Logo" />
          </router-link>
          <HeaderNavigation />
        </div>
        <div class="header__right">
          <button class="header__search button" disabled>
            <SearchIcon />
          </button>
          <button class="header__settings button" disabled>
            <SettingsIcon />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "./Header.scss";
</style>
