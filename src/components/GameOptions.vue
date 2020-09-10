<template>
  <div>
    <h2 class="options__title">Game levels:</h2>
    <ul class="options__list">
      <li class="options__item">
        <input type="radio" id="easy" value="Easy" v-model="level" />
        <label for="easy">Easy</label>
      </li>
      <li class="options__item">
        <input type="radio" id="normal" value="Normal" v-model="level" />
        <label for="normal">Normal</label>
      </li>
      <li class="options__item">
        <input type="radio" id="hard" value="Hard" v-model="level" />
        <label for="hard">Hard</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      hardLevel: "hardLevel"
    }),
    level: {
      get() {
        return this.hardLevel;
      },
      set(value) {
        this.$store.dispatch("setHardLevel", value);
      }
    }
  },
  name: "GameOptions"
};
</script>

<style scoped lang="sass">
.options__list
  list-style: none
  padding: 0
  ali
.options__title
  margin: 70px 0 0 0
.options__item
  margin-bottom: 10px
</style>
