import { createStore } from "vuex";

import cpusModule from "./modules/cpus/index.js";

const store = createStore({
  modules: {
    cpus: cpusModule,
  },
});

export default store;
