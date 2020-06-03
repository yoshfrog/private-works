<template>
  <div class="switcher">
    <button class="switcher__btn" :class="{active: filterState ==='all'}" @click="$emit('callSwitcher','all')">すべて</button>
    <button class="switcher__btn" :class="{active: filterState ==='ongoing'}" @click="$emit('callSwitcher','ongoing')">進行中</button>
    <button class="switcher__btn" :class="{active: filterState ==='done'}" @click="$emit('callSwitcher','done')">完了</button>
    <button class="switcher__btn" @click="callRemoveAll">全削除</button>
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
};
</script>

<style lang="scss">
.switcher {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
  .active {
    background: #FFBC57;
  }
}
@media screen and (max-width: 768px){
  .switcher {
    gap: 5px;
    margin-bottom: 10px;
  }
}
</style>


