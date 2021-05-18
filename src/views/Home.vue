<template>
  <div class="home">
    {{diorama.id}}
  </div>
</template>

<script>
// @ is an alias to /src

import {mapGetters} from "vuex";

export default {
  name: 'Home',
  components: {

  },
  computed:{
    ...mapGetters(['diorama']),
  }
}
</script>
