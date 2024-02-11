<script setup>
import { computed, onMounted, reactive, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import moviesService from "@/services/movies.js";

const route = useRoute();
const id = route.params?.id;
const item = ref({});

onMounted(async () => {
  item.value = await moviesService.getDetails(id);
  console.log(item.value);
});

const release = computed(() => {
  return new Date(item.value.release_date).getFullYear();
});

const director = computed(() => {
  return item.value.crew?.find((value) => value.job === "Director");
});

const cast = computed(() => {
  return item.value?.cast?.slice(0, 10).map((item) => item.name);
});
</script>

<template>
  <article class="details">
    <div class="container">
      <div class="details__row">
        <div class="details-aside">
          <div class="details-aside__img">
            <img
              :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
              :alt="item.title"
            />
          </div>
        </div>
        <div class="details-info">
          <div class="details-info__headline">
            <h1 class="details-info__title">
              {{ item.title }} ({{ release }})
            </h1>
            <div class="details-info__tagline" v-if="item.tagline">
              {{ item.tagline }}
            </div>
          </div>
          <div class="details-info__field">
            <div class="details-info__key">Name:</div>
            <div class="details-info__value">
              {{ item.original_title }}
            </div>
          </div>
          <div class="details-info__field">
            <div class="details-info__key">Release:</div>
            <div class="details-info__value">
              {{ item.release_date }}
            </div>
          </div>
          <div class="details-info__field">
            <div class="details-info__key">Genre:</div>
            <div class="details-info__value">
              <template v-for="genre in item.genres" :key="genre.id">
                <span>{{ genre.name }}, </span>
              </template>
            </div>
          </div>
          <div class="details-info__field">
            <div class="details-info__key">Director:</div>
            <div class="details-info__value">{{ director?.name }}</div>
          </div>
          <div class="details-info__field">
            <div class="details-info__key">Cast:</div>
            <div class="details-info__value">
              <template v-for="(actor, index) in cast" :key="index">
                <span>{{ actor }},</span>
              </template>
            </div>
          </div>
          <div class="details-info__field">
            <div class="details-info__key">Overview:</div>
            <div class="details-info__value">
              {{ item.overview }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.details {
  &__row {
    display: flex;
    gap: 20px;
  }

  &-aside {
    flex: 0 0 20%;
  }

  &-info {
    flex: 1 0 80%;
  }

  &-info__headline {
    margin-bottom: 24px;
  }

  &-info__tagline {
    font-size: 14px;
    font-style: italic;
  }

  &-info__title {
    font-size: 32px;
  }

  &-info__field {
    display: flex;
    gap: 12px;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  &-info__key {
    min-width: 100px;
  }

  &-info__value {
    font-size: 16px;
    line-height: 150%;
    span {
      display: inline-block;
      margin-right: 4px;
    }
  }
}
</style>
