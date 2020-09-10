import Vue from "vue";
import Vuex from "vuex";
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    compSteps: [],
    userSteps: [],
    gameStart: false,
    round: 0,
    lastRound: 0,
    colors: {
      blue: false,
      red: false,
      yellow: false,
      green: false
    },
    userFail: false,
    hard: "Easy"
  },
  getters,
  mutations,
  actions
});
