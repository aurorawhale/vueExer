<template>
  <div class="controller">
    <div class="select">
      <label class="order">Order</label>
      <select class="order" id="order" class="selectbox">
        <option value="data-asc">Date Ascending</option>
        <option value="date-desc">Date Descending</option>
        <option value="name-asc">Name Ascending</option>
        <option value="name-desc">Name Descending</option>
      </select>
    </div>
    <button class="clear">Clear All</button>
  </div>
</template>

<script>
export default {
name: "TodoController"
}
</script>

<style scoped>

</style>