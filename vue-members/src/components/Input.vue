<template>
  <div class="login__form">
    <label class="login__label">{{label}}：</label>
    <div class="login__right">
      <input class="login__input" :type="type" :placeholder="placeholder" v-model="inputValue">
      <p class="login__error">{{error}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
      validator(val) {
        return ["text", "password"].includes(val);
      }
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      }
    }
  },



}
</script>

<style lang="scss">
.login {
  max-width: 500px;
  margin: 30px auto;
  padding: 50px;
  box-shadow: 1px 1px 5px #ccc;
  border-radius: 10px;
  background: #fff;
  &__form {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  &__input {
    outline: none;
    border: none;
    padding: .1em .2em;
    border-bottom: 1px solid #333;
    line-height:2;
  }
  &__error {
    height: 1em;
    margin-top: 10px;
    font-size: 12px;
    color: red;
  }
  &__right {
    width: 200px;
    text-align: left;
  }
}
</style>

