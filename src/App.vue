<template>
  <LangSwitcher />
  <div v-if="loading">Loading</div>
  <router-view v-else />
  <div v-if="error">{{ error }}</div>
</template>

<script>
//import LangSwitcher from "./components/LangSwitcher";
import LangSwitcher from "./components/LangSwitcher";
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  components: { LangSwitcher },
  data() {
    return {
      loading: true,
      error: ""
    };
  },
  methods: {...mapMutations(["setDioramas"])},
  async mounted() {
    try {
      const responses = await Promise.all([
        axios.get(process.env.VUE_APP_MDBS_PATH_FR),
        axios.get(process.env.VUE_APP_MDBS_PATH_EN)
      ]);
      this.loading = false;
      this.error = "";
      const payload = { fr: responses[0].data, en: responses[1].data };
      console.log(payload);
      this.setDioramas(payload);
    } catch (e) {
      console.log(e);
      this.error = "Could not fetch diorama";
    }
  }
};
</script>
