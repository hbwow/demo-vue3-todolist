<template>
  <div class="app">
    <h1>TODOLIST--VUE3</h1>
    <TodoInput :onSubmit="onSubmit" />
    <TodoList :list="list" :onDelete="onDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const list = ref<string[]>([]);

const onSubmit = (value: string) => {
  const nextList = [...list.value];
  nextList.push(value);
  list.value = nextList;
};
const onDelete = (index: number) => {
  const nextList = [...list.value];
  nextList.splice(index, 1);
  list.value = nextList;
};
</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
