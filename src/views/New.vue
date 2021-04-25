<template>
  <div class="new">
    <h1>This is a new page</h1>
    <p class='total'>{{total}}</p>
    <button @click=" total+=1 ">asdad</button>
  </div>
</template>

<script>
export default{
  data(){
    return {total: 1}
  }
}
</script>


<style scoped>
  .total {
    font-size:36px;
    color: purple;
  }
  h1 {
    font-size:36px;
    color: purple;
  }
</style>
