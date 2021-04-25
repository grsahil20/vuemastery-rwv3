<template>
  <div class="eventCard">
    <h1>{{ event.title }}</h1>
    <span>@{{ event.time }} on {{ event.date }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventCard",
  props: {
    // event: Object,
    event: Object
  },
  data() {
    return {
      // event: {
      //   id: 5928101,
      //   category: "animal welfare",
      //   title: "Cat Adoption Day",
      //   description: "Find your new feline friend at this event.",
      //   location: "Meow Town",
      //   date: "January 28, 2022",
      //   time: "12:00",
      //   petsAllowed: true,
      //   organizer: "Kat Laydee",
      // },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.eventCard {
  border: 1px solid black;
  width: 350px;
  margin: 15px auto;
  padding:20px;
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
  color: #42b983;
}
</style>
