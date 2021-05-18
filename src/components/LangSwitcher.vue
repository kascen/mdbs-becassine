<template>
  <ul class="lang-picker">
    <li :class="{ active: lang === 'fr' }">
      <button @click="setLang('fr')">FR</button>
    </li>
    <li :class="{ active: lang === 'en' }">
      <button @click="setLang('en')">EN</button>
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
.button{
  border: 0;
}
</style>
