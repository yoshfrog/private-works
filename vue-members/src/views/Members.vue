<template>
  <div>
    <p class="main__user">ようこそ {{ username }} さん</p>
    <Switcher
      @callAll = "sortAll"
      @callAsc = "sortAsc"
      @callDesc = "sortDesc"
      :orderState = "orderState"
    />
    <p class="main__text">このリストは開発用WebAPIから取得している為、内容は架空のものです。</p>
    <Card>
      <CardItem :sorted="sorted" />
    </Card>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>

<script>
import Switcher from "../components/Switcher";
import Card from "../components/Card";
import CardItem from "../components/CardItem";
import axios from "axios";
import _ from "lodash";

export default {
  components: {
    Switcher,
    Card,
    CardItem,
  },
  data() {
    return {
      lists: [],
      all: true,
      asc: false,
      desc: false,
      orderState: 'all'
    };
  },
  computed: {
    username() {
      return this.$store.getters.username;
    },
    sorted() {
      if (this.asc) {
        return _.orderBy(this.lists, 'name', 'asc')
      } else if (this.desc) {
        return _.orderBy(this.lists, 'name', 'desc')
      } else if (this.all) {
        return this.lists
      } else {
        this.all = true;
        return this.lists
      }
    },
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => (this.lists = response.data))
      .catch((e) => console.error(e));
  },
  methods: {
    sortAll() {
      this.desc = false
      this.asc = false
      this.all = true
      this.orderState = 'all'
    },
    sortAsc() {
      this.asc = true
      this.orderState = 'asc'
    },
    sortDesc() {
      this.desc= true
      this.orderState = 'desc'
    }
  },

  watch: {
    asc(newVal) {
      if (this.desc && newVal)
        this.desc = false
        this.all = false
    },
    desc(newVal) {
      if (this.asc && newVal)
        this.asc = false
        this.all = false
    },
  },

};
</script>

<style lang="scss">
.main__user {
  text-align: right;
}

</style>
