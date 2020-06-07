<template>
  <div class="switcher">
    <button class="switcher__btn" :class="{'is-active': orderState ==='all'}"  @click="$emit('callAll')">ID順</button>
    <button class="switcher__btn" :class="{'is-active': orderState ==='asc'}"  @click="$emit('callAsc')">名前を昇順で並び替え</button>
    <button class="switcher__btn" :class="{'is-active': orderState ==='desc'}" @click="$emit('callDesc')">名前を降順で並び替え</button>
  </div>
</template>
<script>
export default {
  props: {
    all: {
      type:String,
    },
    asc: {
      type: String,
    },
    desc: {
      type: Boolean,
    },
    orderState: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
.switcher {
  display: flex;
  justify-content: center;
  &__btn {
    width: 15em;
    margin: 40px 10px 20px;
    padding: 0.7em;
    border-radius: 6px;
    outline:none;
    border: none;
  }

}
.is-active {
  background: #fce5bd;
}
</style>