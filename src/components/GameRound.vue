<template>
  <div>
    <h2>Round: {{ round }}</h2>
    <button @click="startGame"
            class="button">Start</button>
    <p v-if="isOver" class="fail">Sorry, you lost after {{ round }} rounds</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "GameRound",
  computed: {
    ...mapGetters({
      round: "round",
      endGame: "endGame",
      isOver: "isOver"
    })
  },
  methods: {
    ...mapActions({
      newStart: "endGame",
      newGameRoundReset: "roundReset"
    }),
    startGame() {
      this.newStart(false);
      this.newGameRoundReset();
      this.$store.dispatch("startGame", true);
    }
  }
};
</script>

<style lang="sass" scoped>
.fail
  width: 140px
  margin: 10px 0 0
  position: absolute

.button
  border-radius: 10px
  width: 100px
  height: 40px
  background: #88b3ff
  font-size: 20px
  outline: none
  border: none
  &:hover
    background: #bcdeff
</style>
