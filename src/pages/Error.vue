<script setup></script>

<template>
  <div class="error">
    <div class="container">
      <div class="error__inner">
        <h1 class="error__title">Page Not Found</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.error {
  padding: 100px 0;
  &__title {
    font-size: 48px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
