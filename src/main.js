import { createApp } from "vue";
import {
  ElButton,
  ElInput,
  ElBacktop,
  ElInfiniteScroll,
  ElDialog,
} from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);

app.config.productionTip = false;

app.use(store);
app.use(router);
app.use(ElInfiniteScroll);

app.component(ElButton.name, ElButton);
app.component(ElInput.name, ElInput);
app.component(ElBacktop.name, ElBacktop);
app.component(ElInfiniteScroll.name, ElInfiniteScroll);
app.component(ElDialog.name, ElDialog);

app.component("base-card", BaseCard);

app.mount("#app");
