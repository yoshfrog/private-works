<template>
  <div :class="$style.card__wrap">
    <div :class="$style.card__body" v-for="(list, index) in lists" :key="index">
      <p :class="$style.card__image">
        <img src="../assets/img/user.png" alt="アバター" />
      </p>
      <div :class="$style.card__content">
        <dl>
          <dt>名前</dt>
          <dd>{{ list.name }}</dd>
        </dl>
        <dl>
          <dt>ユーザ名</dt>
          <dd>{{ list.username }}</dd>
        </dl>
        <dl>
          <dt>Eメール</dt>
          <dd>{{ list.email }}</dd>
        </dl>
      </div>
      <div :class="$style.card__content">
        <dl>
          <dt>社名</dt>
          <dd>{{ list.company.name }}</dd>
        </dl>
        <dl>
          <dt>TEL</dt>
          <dd>{{ list.phone }}</dd>
        </dl>
        <dl>
          <dt>HP</dt>
          <dd>{{ list.website }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style module lang="scss">
.card__body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
  padding: 14px 3%;
  box-shadow: 1px 1px 5px #ccc;
  border-radius: 10px;
  background: #fdfdfd;
}
.card__image {
  width: 13%;
  margin-right: 3%;
}
.card__content {
  width: 40%;
  margin-left: 2%;
  dl {
    display: flex;
    margin-top: 0.25em;
  }
  dt {
    width: 25%;
    margin-right: 5%;
    padding: 0.1em 0;
    background: #f4f4fa;
    text-align: center;
  }
}

@media screen and (max-width: 834px) {
  .card__wrap {
    display: flex;
    flex-wrap: wrap;
    margin-left: -3%;
  }
  .card__body {
    display: block;
    width: 47%;
    margin-left: 3%;
  }
  .card__image {
    width: 50%;
    margin: 0 auto 20px;
  }
  .card__content {
    width: 100%;
    margin-left: 0;
    font-size: 2vw;
  }
}
@media screen and (max-width: 568px) {
  .card__wrap {
    display: block;
    margin-left: 0;
  }
  .card__body {
    width: 100%;
    margin-left: 0;
  }
  .card__content {
    font-size: 5vw;
    dl {
      display: block;
      margin-top: 10px;
    }
    dt {
      width: 100%;
      margin-bottom: 4px;
    }
    dd {
      padding-left: .5em;
    }
  }
}
</style>
