<template>
  <div class="eventList">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1>Events</h1>
    <div v-if="loading">Loading ....</div>
    <div v-if="!loading && events.length == 0">No Events</div>
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
      loading: true,
      events: [],
    };
  },
  async created() {
    this.events = (await getEvents())["data"];
    this.loading = false;
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
