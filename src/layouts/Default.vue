<script setup>
import Header from "@/components/Header/Header.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  padding-top: 32px;
}
</style>
