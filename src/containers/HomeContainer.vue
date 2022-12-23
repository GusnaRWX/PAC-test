<template>
  <home-component :items="articles" :fetch-data="GetIndex" />
</template>

<script>
import HomeComponent from "../components/HomeComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    HomeComponent,
  },
  computed: {
    ...mapGetters("home", ["articles"]),
  },
  methods: {
    ...mapActions("home", ["GetIndex"]),
  },
};
</script>
