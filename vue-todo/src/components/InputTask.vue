<template>
  <div>
    <input :type="type" v-model="inputTask" :placeholder="placeholder">
    <button @click="callAddBtn">Add</button>
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
  methods: {

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

<style>

</style>


