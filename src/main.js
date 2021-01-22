import App from "./App.vue";
import router from "./router";
import store from "./store";

import { createApp } from "vue";
import {
  ElButton,
  ElInput,
  ElBacktop,
  ElInfiniteScroll,
  ElDialog,
} from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);

library.add(faBars, faSignInAlt, faSignOutAlt, faUser, faUsers);

app.config.productionTip = false;

app.use(store);
app.use(router);
app.use(ElInfiniteScroll);

app.component(ElButton.name, ElButton);
app.component(ElInput.name, ElInput);
app.component(ElBacktop.name, ElBacktop);
app.component(ElInfiniteScroll.name, ElInfiniteScroll);
app.component(ElDialog.name, ElDialog);
app.component("fa-icon", FontAwesomeIcon);
app.component("base-card", BaseCard);

app.mount("#app");
