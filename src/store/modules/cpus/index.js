import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      cpus: [
        {
          id: "c1",
          img: "../../assets/img/cpu/cpu-i5-10400f.png",
          ProcessorNumber: "i5-10400F",
          Cores: 6,
          Threads: 12,
          BaseFrequency: "2.90 GHZ",
        },
        {
          id: "c2",
          img: "../../assets/img/cpu/cpu-i5-10400f.png",
          ProcessorNumber: "i5-10600KF",
          Cores: 6,
          Threads: 12,
          BaseFrequency: "2.90 GHZ",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
