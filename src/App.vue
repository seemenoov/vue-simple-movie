<script setup>
import { useRoute } from "vue-router";
import { ref, watch, markRaw } from "vue";
import DefaultLayout from "@/layouts/Default.vue";
</script>

<template>
  <div class="main-app">
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>
