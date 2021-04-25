<template>
  <router-link :to="{ name: 'Event', params: { id: event.id } }">
    <div class="eventCard">
      <h1>{{ event.title }}</h1>j
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </router-link> |
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventCard",
  props: {
    // event: Object,
    event: Object,
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.eventCard {
  border: 1px solid black;
  width: 350px;
  margin: 15px auto;
  padding: 20px;
}
.eventCard:hover {
  transform: scale(1.11);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
h1 {
  margin: 10px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
}
</style>
