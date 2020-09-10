export const mutations = {
  SET_START(state, payload) {
    state.gameStart = payload;
  },
  SET_GENERATE(state, numbers) {
    state.compSteps.push(numbers);
  },
  SET_USER_GENERATE(state, number) {
    state.userSteps.push(number);
  },
  SET_COLORS(state, number) {
    if (number === 0) {
      state.colors.blue = true;
    } else if (number === 1) {
      state.colors.red = true;
    } else if (number === 2) {
      state.colors.yellow = true;
    } else if (number === 3) {
      state.colors.green = true;
    }
  },
  RESET_COLORS(state) {
    state.colors.blue = false;
    state.colors.red = false;
    state.colors.yellow = false;
    state.colors.green = false;
  },
  RESET_USER_STEPS(state) {
    state.userSteps = [];
  },
  ROUND_UP(state) {
    state.round++;
  },
  ROUND_RESET(state) {
    state.round = 0;
  },
  END_GAME(state, payload) {
    state.userFail = payload;
    state.gameStart = !payload;
    state.compSteps = [];
  },
  SET_HARD_LEVEL(state, level) {
    state.hard = level;
  }
};
