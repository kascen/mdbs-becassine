<template>
  <ul class="lang-picker">
    <li class="item">
      <router-link class="button" to="/" v-if="$route.name!=='Home'">
        <img src="/images/home.png" class="home" alt="">
      </router-link>
    </li>
    <li class="item">
      <button class="button" @click="setLang('fr')" :class="{ active: lang === 'fr' }">FR</button>
    </li>
    <li class="item">
      <button class="button" @click="setLang('en')" :class="{ active: lang === 'en' }">EN</button>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "LangSwitcher",
  computed: {
    ...mapState(["lang"])
  },
  methods: {
    ...mapMutations(["setLang"])
  }
};
</script>

<style scoped lang="scss">
.lang-picker{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 1rem;
  right:1rem;
  align-items: center;
  z-index: 10;
}
.button{
  border: 0;
  padding: 1rem;
  background: none;
  font-weight: normal;
  font-size: 1rem;

  &.active{
    font-weight: bold;
  }
  &:focus{
    outline: none;
  }
}
.item{
  &:last-child{
    border-left: 1px solid #222222;
  }
}
.home{
  width: 1.5rem;
}
</style>
