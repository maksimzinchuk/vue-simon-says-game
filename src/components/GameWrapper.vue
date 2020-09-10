<template>
  <div>
    <GameRound />
    <GameOptions />
  </div>
</template>

<script>
import GameRound from "@/components/GameRound";
import GameOptions from "@/components/GameOptions";
export default {
  name: "GameWrapper",
  components: {
    GameRound,
    GameOptions
  }
};
</script>

<style scoped></style>
