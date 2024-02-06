<script setup>
import { useRoute } from "vue-router";
import { ref, watch, markRaw } from "vue";

const route = useRoute();
const layout = ref();

const getLayout = async (layout) => {
  const component = await import(`@/layouts/${layout}.vue`);
  return component.default;
};

watch(
  () => route.meta,
  async (meta) => {
    try {
      layout.value = markRaw(await getLayout(meta.layout));
    } catch (e) {
      layout.value = markRaw(await getLayout("Default"));
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="main-app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
