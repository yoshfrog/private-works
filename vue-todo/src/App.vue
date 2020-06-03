<template>
  <div id="app">
    <div class="container">
      <h1 class="main__title">TODO</h1>
      <p class="main__lead">TODO管理アプリ</p>
      <InputTask
        @input="onInputTask"
        v-model="target.task"
        placeholder="タスクを入力"
        :callAddBtn="addBtn"
      />
      <Switcher
        @callSwitcher="switcherBtn"
        :callRemoveAll="removeAll"
        :filterState="filterState"
      />
      <ListTodo
        :filteredTodos="filteredTodos"
        :todos.sync="todos"
        :keyName="keyName"
        @callRemoveBtn="removeBtn"
      />
      <p class="list__none" v-show="filteredTodos.length === 0">{{ noTask }}</p>
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
      noTask: "タスクはありません",
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
          this.noTask = "進行中のタスクはありません";
          return !todo.done;
        } else if (this.filterState === "done") {
          this.noTask = "完了したタスクはありません";
          return todo.done;
        } else {
          this.noTask = "タスクはありません";
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
        this.noTask = "タスクはありません";
      }
    },

    removeBtn(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      localStorage.setItem(this.keyName, JSON.stringify(this.todos));
      if (this.todos.length === 0) {
        this.filterState = null;
        this.noTask = "タスクはありません";
      }
    },

    removeAll() {
      this.todos = [];
      this.filterState = null;
      localStorage.clear();
      this.noTask = "タスクはありません";
    },
  },
};
</script>

<style lang="scss">
$font: Avenir, YuGothic, "游ゴシック体", Yu Gothic, "游ゴシック", "Yu Gothic",
  "メイリオ", Arial, sans-serif;
* {
  margin: 0;
  padding: 0;
  border: 0;
  border-style: none;
  box-sizing: border-box;
}
ol,
ul {
  list-style: none;
}
button,
input,
select,
textarea {
  outline: none;
  margin: 0;
  padding: 0;
  letter-spacing: 0.05em;
  font-family: $font;
  vertical-align: middle;
  cursor: pointer;
}
button {
  border-radius: 5px;
  line-height: 2.2;
  background: #F5F5F5;
}
body {
  color: #333;
  font-family: $font;
  line-height: 1.6;
  font-size: 14px;
  letter-spacing: 0.01em;
  background: #f8f8f8;
}
.container {
  max-width: 520px;
  min-height:  450px;
  margin: 60px auto;

  padding: 30px 50px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background: #D7ECE6;
  > div {
    width: 100%;
  }
}

.main__title {
  margin-bottom: 10px;
  font-size: 40px;
  text-align: center;
}
.main__lead {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
  &::before, &::after {
    content: '';
    width: 1.2em;
    height:1px;
    margin: 10px;
    background: #333;
  }
}
@media screen and (max-width: 768px){
  .container {
    width: 90vw;
    margin-top: 7.5vw;
    padding: 5vw 7vw 7vw;
  }
  .main__title {
    font-size: 34px;
  }
}
</style>
