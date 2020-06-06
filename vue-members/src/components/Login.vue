<template>
  <div class="login">
    <h2 class="login__title">ログイン</h2>
    <form v-on:submit.prevent="onSubmit">
      <Input
        label="ユーザー名"
        :value.sync="input.user"
        :error="validation.inputId"
        placeholder="Enter your name"
      />

      <Input
        label="パスワード"
        :value.sync="input.password"
        :error="validation.inputPw"
        type="password"
        placeholder="Enter your password"
      />

      <button class="login__btn" @click="login">ログイン</button>
    </form>
  </div>
</template>

<script>
import Input from "../components/Input";

export default {
  components: {
    Input
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      input: {
        user: "",
        password: ""
      },
      validation:{
        inputId: "",
        inputPw: "",
      }
    };
  },
  methods: {
    login(event) {
      let userId = false
      let userPw = false
      const errorId = "ユーザー名を入力してください"
      const errorPw = "パスワードを入力してください"
      const errorPwSrting = "半角英数で入力してください"

      if (!this.input.user && !this.input.password) {
        this.validation.inputId= errorId
        this.validation.inputPw= errorPw

      }else if (!this.input.user && this.input.password && this.checkString(this.input.password)) {
        this.validation.inputId= errorId
        this.validation.inputPw=""

      }else if (this.input.user && !this.input.password) {
        this.validation.inputId=" "
        this.validation.inputPw= errorPw

      }else if (this.input.user && !this.checkString(this.input.password)) {
        this.validation.inputId=""
        this.validation.inputPw= errorPwSrting

      }else if(!this.checkString(this.input.password)){
        this.validation.inputPw= errorPwSrting

      }else {
        userId = true
        userPw = true
      }

      if(userId == true && userPw == true){
        this.$store.commit("login", this.input.user);
        this.$router.push("/members");
      }
      event.preventDefault()
    },
    checkString(inputdata) {
      const chara = /^[A-Za-z0-9]*$/
      return chara.test(inputdata);
    }
  }



};
</script>

<style lang="scss">
.login {
  text-align: center;
  &__title {
    margin-bottom: 50px;
  }
  &__btn {
    outline: none;
    border: none;
    cursor: pointer;
    padding: .5em 2em;
    margin-top: 50px;
    color: #fff;
    border-radius: 6px;
    background: #1867c0;
  }
}
</style>