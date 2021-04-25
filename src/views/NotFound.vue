<template>
  <div class="notFound">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Page Not Found</h1>
    <img :src="image" alt="Dog" v-if='image'>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getDog } from "../services/eventService"; // @ is an alias to /src

export default defineComponent({
  name: "Event",
  data() {
    return {
      image: null,
    };
  },
  async created() {
    this.image = (await getDog())["data"]["message"][0];
  },
});
</script>

<style scoped>
.notFound {
  margin: 10px auto;
  min-height: 100px;
  min-width: 350px;
}
</style>
