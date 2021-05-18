<template>
  <div class="animal">
    <router-link :to="prevUrl" v-if="prevUrl" class="arrow left">
      <img src="/images/arrow.png" alt="" class="arrow-image" />
    </router-link>
    <router-link :to="nextUrl" class="arrow right" v-if="nextUrl">
      <img src="/images/arrow.png" alt="" class="arrow-image" />
    </router-link>
    <h1 class="title">{{ animal.title }}</h1>
    <div class="columns">
      <ul class="column list">
        <li v-for="section in animal.sections" :key="section.id">
          <h3>{{ section.title }}</h3>
          <div>{{ section.content }}</div>
        </li>
      </ul>
      <div class="column">
        <img :src="animal.image.big" alt="" />
      </div>
    </div>
    <audio v-if="animal.audio" :src="animal.audio" ref="audio" loop="false" autoplay>
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Animal",
  props: {
    animals: {}
  },
  methods: {
    animalUrl(animal) {
      return `/animals/${animal.id}`;
    }
  },
  computed: {
    ...mapGetters([
      "lang",
      "getAnimalById",
      "getAnimalIndexById",
      "getAnimalByIndex",
        "diorama"
    ]),
    animal() {
      return this.getAnimalById(this.$route.params.animalId);
    },
    animalIndex() {
      return this.getAnimalIndexById(this.$route.params.animalId);
    },

    prevUrl() {
      return this.animalUrl(this.getAnimalByIndex(this.animalIndex - 1));
    },
    nextUrl() {
      return this.animalUrl(this.getAnimalByIndex(this.animalIndex + 1));
    },
  },
  mounted(){
    this.interval = setTimeout(()=>this.$router.replace('/'),this.diorama.meta.idle);
  },
  watch: {
    animal(){
      clearTimeout(this.interval);
      console.log("interval", this.interval)
      this.interval = setTimeout(()=>this.$router.replace('/'),this.diorama.meta.idle);
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-family: "Dancing Script", cursive;
  font-size: 4rem;
  text-align: center;
  margin: 0 0 1rem 0;
  line-height: 1;
}
.animal {
  padding: 2rem 4rem;
  position: relative;
  height: 100%;
}
.columns {
  display: flex;
  align-items: center;
}
.column {
  &:first-child {
    margin-right: 2rem;
  }
}
.list {
  margin: 0;
}
.arrow {
  position: fixed;
  top: 6rem;
  bottom: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
    transform: scaleX(-1);
  }
}
.arrow-image {
  width: 1rem;
}
</style>
