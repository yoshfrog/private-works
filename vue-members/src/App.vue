<template>
  <div id="app">
    <div class="header">
      <div class="container nav">
        <router-link class="nav__link" to="/">HOME</router-link>
      </div>
    </div>
    <div class="container">
      <h1 class="main__title">会員リスト</h1>
      <router-view />
      <p class="main__text">
        このページはログイン画面のモックとなり、サーバーとの接続は行なっておりません<br>
        ユーザ名、パスワード(半角英数)は任意の文字列でログインが可能です
      </p>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic",
    Verdana, Meiryo, sans-serif;
  line-height: 1.4;
  color: #333;
  letter-spacing: 0.02em;
  background: #fcfcfc;
}
img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.header {
  background: #326bad;
}
.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px 30px;
}
.main__title {
  margin: 40px auto 20px;
  font-size: 36px;
  text-align: center;
}
.main__text {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}
.nav__link {
  font-weight: bold;
  color: #fafafa;
  font-size: 18px;
  text-decoration: none;
}

@media screen and (max-width: 834px) {
  .container {
    padding: 3vw 5vw;
  }
  .main__title {
    margin-top: 3vw;
  }

}
</style>
