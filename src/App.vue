<template>
  <div class="main">
    <h1 class="header">Simon Says</h1>
    <div class="wrapper">
      <GameCircle />
      <GameWrapper />
    </div>


  </div>
</template>

<script>
import GameCircle from "@/components/GameCircle";
import GameWrapper from "@/components/GameWrapper";
export default {
  components: {
    GameCircle,
    GameWrapper
  }
};
</script>

<style lang="sass">
.main
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.wrapper
  margin: 0 auto
  width: 600px
  display: flex
  flex-direction: row

.header
  margin-bottom: 50px
</style>
