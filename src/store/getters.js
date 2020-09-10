export const getters = {
  game(state) {
    return state.gameStart;
  },
  numbersArray(state) {
    return state.compSteps;
  },
  userNumbersArray(state) {
    return state.userSteps;
  },
  getColor(state) {
    return state.colors;
  },
  round(state) {
    return state.round;
  },
  isOver(state) {
    return state.userFail;
  },
  hardLevel(state) {
    return state.hard;
  }
};
