<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <TodoInput v-on:addItem="addOneItem"/>
    <TodoController v-on:clearAll="clearAllItem"/>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"/>
    <TodoFooter />
  </div>
</template>

<script>
import TodoController from "./components/TodoController";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";

import getDate from "./assets/commonJS/getDate";

export default {
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    if(localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
  components: {
    TodoTitle,
    TodoController,
    TodoInput,
    TodoFooter,
    TodoHeader,
    TodoList
  },
  methods: {
    addOneItem(todoItem) {
      let value = {
        item: todoItem,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false
      }
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem() {
      this.todoItems = [];
      localStorage.clear();
    }
  },
};
</script>