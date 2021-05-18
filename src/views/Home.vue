<template>
  <div class="home" :style="computedStyles">
    <h1 class="title">{{ diorama.id }}</h1>
    <Animals :animals="diorama.animals" />
    <audio :src="diorama.audio" ref="audio" loop="false">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from "vuex";
import Animals from "@/views/Animals";
//import * as Tone from 'tone';

export default {
  name: "Home",
  components: {
    Animals
  },
  computed: {
    ...mapGetters(["diorama"]),
    computedStyles() {
      return { backgroundImage: `url(${this.diorama.image})` };
    }
  },
  mounted() {
    this.$refs.audio.play()
  }
};
</script>
<style scoped lang="scss">
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
}
.title {
  text-align: center;
  text-transform: capitalize;
  font-family: "Dancing Script", cursive;
  font-size: 4rem;
}
</style>
