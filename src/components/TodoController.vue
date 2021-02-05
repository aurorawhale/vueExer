<template>
  <div class="controller">
    <br>
    <div class="select">
      <label for="order">Order </label>
      <select name="order" id="order" class="selectBox" v-on:change="">
        <option value="data-asc">Date Ascending</option>
        <option value="date-desc">Date Descending</option>
        <option value="name-asc">Name Ascending</option>
        <option value="name-desc">Name Descending</option>
      </select>
    </div>
    <br>
    <button class="clear" v-on:click="clearTodo">Clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit("clearAll");
    }
  }
}
</script>

<style scoped>

</style>