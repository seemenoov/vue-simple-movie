<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import moviesService from "@/services/movies.js";

const route = useRoute();
const id = route.params?.id;
const item = ref({});
const type = ref("");

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
  const response = await moviesService.getDetails(id, props.type);
  item.value = response;
});

const release = computed(() => {
  return new Date(
    item.value.release_date || item.value.first_air_date
  ).getFullYear();
});

const director = computed(() => {
  return item.value.crew?.find((value) => value.job === "Director");
});

const cast = computed(() => {
  return item.value?.cast?.slice(0, 10).map((item) => item.name);
});

const runtime = computed(() => {
  const time = item.value?.runtime;
  if (!time) return false;

  const minutes = time % 60;
  const hours = Math.floor(time / 60);

  return `${hours}h ${minutes}m`;
});

const videos = computed(() => {
  const list = item.value?.videos?.results.map((el) => {
    if (el.site === "YouTube") {
      return {
        site: el.site,
        key: el.key,
      };
    }
  });

  if (list?.length) {
    return `https://www.youtube.com/embed/${list[0].key}`;
  }

  return false;
});

const budget = computed(() => {
  const budget = item.value.budget;
  if (!budget) return false;

  const fixedBudget = new Intl.NumberFormat("us", {
    style: "currency",
    currency: "USD",
  }).format(budget);

  return fixedBudget;
});

const revenue = computed(() => {
  const revenue = item.value.revenue;

  if (!revenue) return false;

  const fixedRevenue = new Intl.NumberFormat("us", {
    style: "currency",
    currency: "USD",
  }).format(revenue);

  return fixedRevenue;
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
              {{ item.title || item.name }} ({{ release }})
            </h1>
            <div class="details-info__tagline" v-if="item.tagline">
              {{ item.tagline }}
            </div>
          </div>
          <div class="details-info__field">
            <div class="details-info__key">Name:</div>
            <div class="details-info__value">
              {{ item.original_title || item.name }}
            </div>
          </div>
          <div class="details-info__field">
            <div class="details-info__key">Release:</div>
            <div class="details-info__value">
              {{ item.release_date || item.first_air_date }}
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
          <div class="details-info__field" v-if="director">
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
          <div class="details-info__field" v-if="budget && revenue">
            <div class="details-info__key">Budget:</div>
            <div class="details-info__value">{{ budget }}</div>
          </div>
          <div class="details-info__field" v-if="budget && revenue">
            <div class="details-info__key">Revenue:</div>
            <div class="details-info__value">{{ revenue }}</div>
          </div>
          <div class="details-info__field" v-if="runtime">
            <div class="details-info__key">Runtime:</div>
            <div class="details-info__value">{{ runtime }}</div>
          </div>
        </div>
      </div>
      <div class="details__video" v-if="videos">
        <iframe :src="videos" allowfullscreen></iframe>
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

  &__video {
    margin-top: 64px;
    iframe {
      width: 100%;
      border: none;
      aspect-ratio: 16/10 auto;
      height: 100%;
      max-height: 650px;
    }
  }
}
</style>
