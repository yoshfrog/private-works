<template>
  <div>

    <button :class="{active: filterState ==='all'}" @click="$emit('callSwitcher','all')">All</button>
    <button :class="{active: filterState ==='ongoing'}" @click="$emit('callSwitcher','ongoing')">Ongoing</button>
    <button :class="{active: filterState ==='done'}" @click="$emit('callSwitcher','done')">Done</button>

    <button @click="callRemoveAll">Remove all</button>

  </div>
</template>

<script>
export default {
  props: {
    filterState: {
      type:String
    },
    callRemoveAll: {
      type: Function,
      required: true
    },


  },

  computed: {

  }
};
</script>

<style>
</style>


