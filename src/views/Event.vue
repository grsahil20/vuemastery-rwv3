<template>
  <div class="event">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Event</h1>
    <EventDetails :event="event"></EventDetails>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import EventDetails from "@/components/EventDetails.vue"; // @ is an alias to /src
import { getEvent } from "../services/eventService"; // @ is an alias to /src

export default defineComponent({
  name: "Event",
  components: {
    EventDetails,
  },
  props: ["id"],
  data() {
    return {
      event: [],
    };
  },
  async created() {
    this.event = (await getEvent(this.id))["data"];
  },
});
</script>

<style scoped>
.event {
  margin: 10px auto;
  min-height: 100px;
  min-width: 350px;
}
</style>
