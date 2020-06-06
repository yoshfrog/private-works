<template>
  <div>
    <p class="main__user">ようこそ {{username}} さん</p>
    <Card>
      <CardItem :lists="lists" />
    </Card>
  </div>
</template>

<script>
import Card from "../components/Card";
import CardItem from "../components/CardItem";
import axios from "axios";
export default {
  components: {
    Card,
    CardItem
  },
  data() {
    return {
      lists: []
    };
  },
  computed: {
    username() {
      return this.$store.getters.username;
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => (this.lists = response.data))
      .catch(e => console.error(e));
  }
};
</script>
<style lang="scss">
.main__user {
  text-align: right;
}
</style>