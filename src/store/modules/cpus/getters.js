export default {
  cpus(state) {
    return state.cpus;
  },
  hasCpus(state) {
    return state.cpus && state.cpus.length > 0;
  },
  //预留
  // isCpu(_, getters, _2, rootGetters){

  // }
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
