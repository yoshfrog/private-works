<template>
  <div class="task">
    <input class="task__input" :type="type" v-model="inputTask" :placeholder="placeholder">
    <button class="task__add" @click="callAddBtn">追加</button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    },
    callAddBtn: {
      type: Function,
      required: true
    }
  },
  computed: {
    inputTask: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style lang="scss">
.task {
  display: grid;
  grid-template-columns: 3.3fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
  &__input {
    padding: 0.4em;
    background: #f8f8f8;
  }
  &__add {
    background: #80BBBA;
  }
}
@media screen and (max-width: 768px){
  .task {
    margin-bottom: 10px;
  }
}
</style>


