export const actions = {
  async fetchUsers() {
    try {
      const users = await this.$axios
        .$get("https://jsonplaceholder.typicode.com/users")
        .then(users => ({ users }))
        .catch(err => {
          error(err);
        });
      return users;
    } catch (e) {
      throw e;
    }
  },
  async fetchUsersById({}, userId) {
    try {
      return await this.$axios.$get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
    } catch (e) {
      error(e);
    }
  }
};
