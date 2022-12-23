<template>
  <v-app id="inspire">
    <v-main style="background-color: #181818">
      <v-container class="centered-container" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-card class="elevation-3 mb-3 pa-2">
              <div class="text-center display-1 mb-1">PORTAL-NEWS</div>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Search"
                    name="search"
                    color="primary"
                    variant="outlined"
                    v-model="search"
                    dense
                    single-line
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-select
                    dense
                    label="Category"
                    clearable
                    :items="categoryItems"
                    v-model="category"
                    color="primary"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="6">
                  <v-select
                    dense
                    label="Country"
                    clearable
                    color="primary"
                    :items="countryItems"
                    v-model="country"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
              <v-btn variant="outlined" color="error" @click="onReset">
                Reset
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-card class="elevation-3 mb-3" style="padding: 1rem">
              <v-row
                style="margin-bottom: 3rem"
                v-for="(item, index) in items"
                :key="index"
              >
                <div class="item-wrapper">
                  <a :href="item.url" target="_blank" class="link">{{
                    item.title
                  }}</a>
                  <h6 style="color: #606060">Author: {{ item.author }}</h6>
                  <h6 style="color: #606060">
                    Publised At: {{ item.publishedAt }}
                  </h6>
                  <v-img
                    :src="item.urlToImage"
                    alt=""
                    max-height="400"
                    max-width="400"
                  />
                  <i class="mb-1" style="color: #606060"
                    >Source: {{ item.source.name }}</i
                  >
                  <p>{{ item.description }}</p>
                  <p>{{ item.content }}</p>
                </div>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      category: "",
      country: "",
      categoryItems: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
      ],
      countryItems: [
        "es",
        "en",
        "ae",
        "at",
        "au",
        "bg",
        "br",
        "ch",
        "cu",
        "de",
        "fr",
        "mx",
      ],
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    fetchData: {
      type: Function,
      required: true,
    },
  },
  created() {
    const payload = {
      language: "",
      country: "",
      search: "",
      category: "",
      sources: "bbc-news",
    };
    this.fetchData(payload);
  },
  watch: {
    search() {
      this.onSearch();
    },
    category() {
      this.onCategoryChange();
    },
    country() {
      this.onCountryChange();
    },
  },
  methods: {
    onSearch() {
      const payload = {
        language: "",
        country: this.country,
        category: this.category,
        search: this.search,
        sources: this.search === "" ? "bbc-news" : "",
      };
      this.fetchData(payload);
    },
    onCategoryChange() {
      const payload = {
        language: "",
        country: this.country,
        category: this.category,
        search: this.search,
        sources: this.category === "" ? "bbc-news" : "",
      };
      this.fetchData(payload);
    },
    onCountryChange() {
      const payload = {
        language: "",
        country: this.country,
        category: this.category,
        search: this.search,
        sources: this.country === "" ? "bbc-news" : "",
      };
      this.fetchData(payload);
    },
    onReset() {
      this.search = "";
      this.country = "";
      this.category = "";
      const payload = {
        language: "",
        country: "",
        search: "",
        category: "",
        sources: "bbc-news",
      };
      this.fetchData(payload);
    },
  },
};
</script>

<style scoped>
.item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  margin: 0;
  font-size: 24px;
}

.link:hover {
  color: red;
}
</style>
