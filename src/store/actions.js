export const actions = {
  startGame({ commit }, payload) {
    commit("SET_START", payload);
  },
  generate({ commit }, numbers) {
    commit("SET_GENERATE", numbers);
  },
  setColors({ commit }, number) {
    commit("SET_COLORS", number);
  },
  resetColors({ commit }) {
    commit("RESET_COLORS");
  },
  userStep({ commit }, number) {
    commit("SET_USER_GENERATE", number);
  },
  userStepReset({ commit }) {
    commit("RESET_USER_STEPS");
  },
  roundUp({ commit }) {
    commit("ROUND_UP");
  },
  roundReset({ commit }) {
    commit("ROUND_RESET");
  },
  endGame({ commit }, payload) {
    commit("END_GAME", payload);
  },
  setHardLevel({ commit }, level) {
    commit("SET_HARD_LEVEL", level);
  }
};
