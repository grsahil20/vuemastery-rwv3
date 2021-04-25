<template>
  <div class="eventDetail">
    <h1>{{ event.title }}</h1>
    <span>@{{ event.time }} on {{ event.date }}</span>
    <p>Location @{{ event.description }}</p>
    <table>
      <tbody>
        <tr>
          <th>Category</th>
          <td>{{ event.category }}</td>
        </tr>
        <tr>
          <th>organizer</th>
          <td>{{ event.organizer }}</td>
        </tr>
        <tr>
          <th>Pets Allowed</th>
          <td>{{ event.petsAllowed }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventDetails",
  props: {
    event: Object,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.eventDetail {
  border: 1px solid black;
  width: 350px;
  margin: 15px auto;
  padding: 20px;
}
.eventDetail:hover {
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
table{
  width: 100%;
  text-align: left;
}
table th {
  border-right: 1px solid black;
}
table tr td {
  padding-left: 10px;
}
</style>
