<template>
  <ul class="list">
    <li class="list__item" v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
      <input type="checkbox" v-bind:id="todoItem.item" v-bind:checked="todoItem.completed === true" v-on:change="toggleComplete(todoItem)" />
      {{ todoItem.item }} /{{ todoItem.date }}
      <button class="list__delete" v-on:click="removeTodo(todoItem, index)" >Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["propsdata"], //부모에서 받아온 값
  methods: {
    toggleComplete(todoItem) {
      this.$emit("toggleItem", todoItem);
    },
    removeTodo(todoItem, index) {
      this.$emit("removeItem", todoItem, index);
    }
  },
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if (localStorage.length > 0) {
      let len = localStorage.length;
      for (let i = 0; i < len; i++) {
        if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
              JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  }
}
</script>