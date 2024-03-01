<template lang="">
  <div id="menu-wrapper">
    <aside>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/logo.jpg"
            alt="Logo"
            width="50"
            height="50"
            class="d-inline-block align-text-top"
          />
          <h3>ToDoZen</h3>
        </a>
      </div>
      <br> <br>
      <template v-if="loggedIn">
        <div id="porfile-wrapper">
          <h4>Welcome</h4>
          <br>
          <h5><strong>{{this.user.name}}</strong></h5>
          <br><br>
          <button class="btn btn-danger" @click="handleLogout">Log Out</button>
        </div>
      </template>
      <template v-else>
        <div>
          <SingIn />
          <br />
          <br />
          <SingUp />
        </div>
      </template>
    </aside>
  </div>
</template>
<script>
import SingIn from "./SingIn.vue";
import SingUp from "./SingUp.vue";
export default {
  name: "Menu",
  components: {
    SingIn,
    SingUp,
  },
  data() {
    return {
    };
  },
  props: {
    logged: Boolean,
  },
  methods: {
    handleLogout() {
    this.$store.dispatch('toggleLogin');
    this.$store.dispatch('setUser', { name: '', id: '' });
  },
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    user() {
      return this.$store.state.user;
    },
  }
};
</script>
<style scoped>
#menu-wrapper {
  width: 200px;
  height: 95%;
  margin: 16px;
  padding: 16px;
  border-radius: 10px;
  border: 2px solid var(--color-primary);
}

img {
  border-radius: 10px;
}
#porfile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
</style>
