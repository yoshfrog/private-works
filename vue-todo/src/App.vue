<template>
  <div id="app">
    <div class="container">
      <h1>TODO</h1>
      <p>Child 1</p>
      <InputTask
        @input="onInputTask"
        v-model="target.task"
        placeholder="Enter your task"
        :callAddBtn="addBtn"
      />
      <br />
      <p>Child 2</p>
      <Switcher
        @callSwitcher="switcherBtn"
        :callRemoveAll="removeAll"
        :filterState="filterState"
      />
      <br />
      <p>Child 3</p>
      <ListTodo
        :filteredTodos="filteredTodos"
        :todos.sync="todos"
        :keyName="keyName"
        @callRemoveBtn="removeBtn"
      />
      <p v-show="filteredTodos.length === 0">{{ noTask }}</p>
    </div>
  </div>
</template>

<script>
import InputTask from "./components/InputTask";
import Switcher from "./components/Switcher";
import ListTodo from "./components/ListTodo";

export default {
  name: "App",
  components: {
    InputTask,
    Switcher,
    ListTodo,
  },
  data() {
    return {
      target: {
        id: 1,
        task: "",
        done: false,
      },
      todos: [],
      keyName: "myTodoList",
      filterState: "",
      noTask: "No tasks",
    };
  },
  created() {
    let keyObject = JSON.parse(localStorage.getItem(this.keyName));
    if (keyObject) {
      this.todos = keyObject;
    }

    if (this.todos.length > 0) {
      const setId = this.todos.reduce(function(a, b) {
        return a > b.id ? a : b.id;
      }, 0); //既存オブジェクトのIDの最大値取得
      this.target.id = setId + 1;
      this.filterState = "all";
    }
  },

  computed: {
    filteredTodos() {
      return this.todos.filter((todo) => {
        if (this.filterState === "ongoing") {
          this.noTask = "No ongoing tasks";
          return !todo.done;
        } else if (this.filterState === "done") {
          this.noTask = "No done tasks";
          return todo.done;
        } else {
          this.noTask = "No tasks";
          return true;
        }
      });
    },
  },

  methods: {
    onInputTask(val) {
      this.target.task = val;
    },
    addBtn() {
      if (this.target.task === "") {
        return;
      }
      const todo = { id: this.target.id, task: this.target.task, done: false };
      this.todos.push(todo);
      localStorage.setItem(this.keyName, JSON.stringify(this.todos));
      this.target.task = "";
      this.filterState = "all";
      this.target.id++;
    },

    switcherBtn(swicherState) {
      this.filterState = swicherState;
      if (this.todos.length === 0) {
        this.filterState = null;
        this.noTask = "No tasks";
      }
    },

    removeBtn(todo) {
      console.log(this.todos);
      console.log(todo);
      
      const index = this.todos.indexOf(todo);
      console.log(index);
      this.todos.splice(index, 1);
      localStorage.setItem(this.keyName, JSON.stringify(this.todos));
      if (this.todos.length === 0) {
        this.filterState = null;
        this.noTask = "No tasks";
      }
    },

    removeAll() {
      this.todos = [];
      this.filterState = null;
      localStorage.clear();
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.active {
  background: pink;
}
</style>
