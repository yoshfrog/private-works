<template>
  <div>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
          Task: {{ todo.task }}
        <input type="checkbox" v-model="todo.done" @click="status(todo)" />
        <button @click="$emit('callRemoveBtn', todo)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
    filteredTodos: {
      type: Array,
    },
    filterState: {
      type:String
    },
    keyName: {
      type: String,
      required: true,
    },
    callRemoveBtn: {
      type: Function,
    },

  },
  data() {
    return {
    };
  },
  created() {
  },

  computed: {

  },

  methods: {
    status(todo) {
      todo.done = !todo.done;
      localStorage.setItem(this.keyName, JSON.stringify(this.todos));
    },
  },
};
</script>

<style></style>
