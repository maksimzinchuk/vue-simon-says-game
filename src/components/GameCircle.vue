<template>
  <div>
    <div class="circle">
      <div
        class="part blue"
        :class="[color.blue ? 'blue_active' : '']"
        @click="userSteps(0)"
      ></div>
      <div
        class="part red"
        :class="[color.red ? 'red_active' : '']"
        @click="userSteps(1)"
      ></div>
      <div
        class="part yellow"
        :class="[color.yellow ? 'yellow_active' : '']"
        @click="userSteps(2)"
      ></div>
      <div
        class="part green"
        :class="[color.green ? 'green_active' : '']"
        @click="userSteps(3)"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "GameCircle",
  computed: {
    ...mapGetters({
      start: "game",
      color: "getColor",
      userNumbers: "userNumbersArray",
      numbers: "numbersArray",
      hardness: "hardLevel"
    }),
    hardnessCalc() {
      switch (this.hardness) {
        case "Easy":
          return 1500;
        case "Normal":
          return 1000;
        case "Hard":
          return 400;
        default:
          return 1500;
      }
    }
  },
  methods: {
    ...mapActions({
      setColors: "setColors",
      resetColors: "resetColors",
      roundUp: "roundUp",
      endGame: "endGame",
      startGame: "startGame",
      roundReset: "roundReset",
      userStepReset: "userStepReset",
      userStepAdd: "userStep",
      generateCompSteps: "generate"
    }),
    sounds(track) {
      const buttonSound = new Audio(require(`../sounds/${track}.mp3`));
      buttonSound.play();
    },
    generateSteps() {
      const steps = Math.floor(Math.random() * 4);
      this.generateCompSteps(steps);
      this.roundUp();
      this.showSteps();
      this.userStepReset();
    },
    showSteps() {
      let currentIndex = 0;
      const int = setInterval(() => {
        this.colorSwitch(this.numbers[currentIndex])
        currentIndex++;
        if (currentIndex === this.numbers.length) {
          clearInterval(int);
        }
      }, this.hardnessCalc);
      currentIndex = 0;
    },
    userSteps(number) {
      if (!this.start) {
        return;
      }
      this.userStepAdd(number);
      this.colorSwitch(number);
      this.checkSteps(this.userNumbers.length - 1);
    },
    colorSwitch(value) {
      this.sounds(value);
      this.setColors(value);
      this.setColors(value)
      setTimeout(() => {
        this.resetColors(value);
      }, 200);
    },
    userError() {
      this.endGame(true);
    },
    checkSteps(index) {
      if (this.numbers[index] === this.userNumbers[index]) {
        if (this.userNumbers.length === this.numbers.length) {
          setTimeout(() => {
            this.generateSteps();
          }, 1000);
        }
      } else {
        this.userError();
      }
    }
  },
  watch: {
    start: {
      deep: true,
      handler(state) {
        if (state) {
          this.generateSteps();
        } else {
          return;
        }
      }
    }
  }
};
</script>

<style scoped lang="sass">
.circle
  position: relative
  width: 305px
  height: 305px
  border-radius: 50%
  box-shadow: 5px 5px 10px rgba(0,0,0,0.3)
  margin-right: 40px

.part
  position: absolute
  border-radius: 50%
  height: 300px

.blue
  background: #31aeff
  clip: rect(0px, 150px, 150px, 0px)
  width: 300px
  cursor: pointer
  &_active
    background: #1d6b9b

.red
  background: #ff7d7d
  clip: rect(0px, 305px, 150px, 150px)
  width: 300px
  cursor: pointer
  &_active
    background: #9b5050

.yellow
  background: #fffb81
  clip: rect(150px, 150px, 305px, 0px)
  width: 300px
  cursor: pointer
  &_active
    background: #9b9750

.green
  background: #90ff8d
  clip: rect(150px, 305px, 305px, 150px)
  width: 300px
  cursor: pointer
  &_active
    background: #519b51

.blue:hover, .red:hover, .yellow:hover, .green:hover
  border: 2px solid black
</style>
