<template>
  <div class="eventList">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1>Events</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src
import { getEvents } from "../services/eventService"; // @ is an alias to /src

export default defineComponent({
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  async created() {
    this.events = (await getEvents())["data"];
  },
});
</script>

<style scoped>
.eventList {
  margin: 10px auto;
  min-height: 100px;
  min-width: 350px;
}
</style>
