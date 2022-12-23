import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import store from "./store";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(store);

app.use(vuetify);

app.use(router);

app.mount("#app");
