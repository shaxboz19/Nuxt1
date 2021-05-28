<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="goTo(user)">
          {{ user.name }} [{{ user.email }}]</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ store, error }) {
    try {
      const users = await store.dispatch("user/fetchUsers");
      console.log(users);
      return users;
    } catch (e) {
      error(e);
    }
  },
  data() {
    return {
      title: "Users page",
    };
  },
  methods: {
    goTo(user) {
      this.$router.push("/users/" + user.id);
    },
  },
};
</script>