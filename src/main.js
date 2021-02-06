import App from "./App.vue";
import router from "./router";
import store from "./store";

import { createApp } from "vue";
import { ElBacktop, ElDialog, ElButton } from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faUsers,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import BaseCard from "./components/ui/BaseCard.vue";
import Background from "./components/layout/Background.vue";

const app = createApp(App);

library.add(
  faBars,
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faUsers,
  faTimes,
  faCircle
);

app.config.productionTip = false;

app.use(store);
app.use(router);

app.component(ElBacktop.name, ElBacktop);
app.component(ElDialog.name, ElDialog);
app.component(ElButton.name, ElButton);
app.component("fa-icon", FontAwesomeIcon);
app.component("base-card", BaseCard);
app.component("background", Background);

app.mount("#app");
