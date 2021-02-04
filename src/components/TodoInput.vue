<template>
  <div class="add">
    <input type="text" class="add__input" placeholder="Enter your task" v-model="newTodoItem" v-on:keyup.enter="addTodoItem" />
    <button class="add__button" v-on:click="addTodoItem">
      <span class="blind">Add</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodoItem() {
      if (this.newTodoItem !== '') {
        let value = {
          item: this.newTodoItem,
          date: `${new Date().getMonth() + 1}/${new Date().getDate()}`,
          completed: false
        };
        localStorage.setItem(this.newTodoItem, JSON.stringify(value));
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>

</style>