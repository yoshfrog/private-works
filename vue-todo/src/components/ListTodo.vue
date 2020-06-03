<template>
  <div class="list">
    <p class="list__rest">{{filteredTodos.length}} 件 / 全 {{todos.length}} 件</p>
    <ul class="list__group">
      <li class="list__item" v-for="todo in filteredTodos" :key="todo.id">
        <input class="list__check" :id="todo.id" type="checkbox" v-model="todo.done" @click="status(todo)" />
        <label class="list__label" :for="todo.id">{{ todo.task }}</label>
        <button class="list__btn" @click="$emit('callRemoveBtn', todo)"><img src="../assets/remove.png" alt="削除"></button>
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
      type: String,
    },
    keyName: {
      type: String,
      required: true,
    },
    callRemoveBtn: {
      type: Function,
    },
  },
  methods: {
    status(todo) {
      todo.done = !todo.done;
      localStorage.setItem(this.keyName, JSON.stringify(this.todos));
    },
  },
};
</script>

<style lang="scss">
.list {
  &__rest {
    text-align: right;
  }
  &__item {
    display: grid;
    grid-template-columns: 14fr 1fr;
    gap: 10px;
    justify-items: stretch;
    align-items: center;
    padding: 0.5em;
    margin-bottom: 6px;
    background: #EDF6F4;
  }
  &__btn {
    background: none;
    img {
      vertical-align: middle;
      width: 100%;
      height: 100%;
    }
  }
  &__none {
    padding: 5em 0.5em;
    font-size: 14px;
    text-align: center;
    background: #EDF6F4;
  }
}

/* Base for label styling */
.list__check:not(:checked),
.list__check:checked {
  position: absolute;
  left: -9999px;
}
.list__check:not(:checked) + .list__label,
.list__check:checked + .list__label {
  position: relative;
  padding-left: 2.2em;
  cursor: pointer;
}

/* checkbox aspect */
.list__check:not(:checked) + .list__label:before,
.list__check:checked + .list__label:before {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  transform: translateY(-50%);
  width: 1.25em; height: 1.25em;
  border: 2px solid #ccc;
  background: #F7FBFA;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
}
/* checked mark aspect */
.list__check:not(:checked) + .list__label:after,
.list__check:checked + .list__label:after {
  content: '\2713\0020';
  position: absolute;
  top: .15em;
  top: 27%;
  left: .22em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #09ad7e;
  transition: all .2s;
  font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
}
/* checked mark aspect changes */
.list__check:not(:checked) + .list__label:after {
  opacity: 0;
  transform: scale(0);
}
.list__check:checked + .list__label:after {
  opacity: 1;
  transform: scale(1);
}
/* disabled checkbox */
.list__check:disabled:not(:checked) + .list__label:before,
.list__check:disabled:checked + .list__label:before {
  box-shadow: none;
  border-color: #bbb;
  background-color: #ddd;
}
.list__check:disabled:checked + .list__label:after {
  color: #999;
}
.list__check:disabled + .list__label {
  color: #aaa;
}

@media screen and (max-width: 768px){
  .list {
    &__item {
      grid-template-columns: 10fr 1fr;
    }
  }
}



</style>
