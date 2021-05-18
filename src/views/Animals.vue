<template>
  <ul class="animals">
    <li v-for="animal in animals" :key="animal.id" class="animal">
      <router-link :to="`/animals/${animal.id}`" class="link">
      <img class="image" :src="animal.image.small" :alt="animal.title">
      <h2 class="title">{{animal.title}}</h2>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Animals',
  props:{
    animals:{}
  }
}
</script>
<style scoped lang="scss">
.animals{
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.animal{
  margin: 1rem;
}
.image{
  border-radius: 2rem;
  overflow: hidden;
}
.title{
  font-size: 1rem;
  text-align: center;
}
a{
  text-decoration: none;
  color:#222;
}
</style>
