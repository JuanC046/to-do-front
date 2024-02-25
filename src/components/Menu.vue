<template lang="">
    <div id="menu">
    <aside >
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
      <h4>Options</h4>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a type="button" class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </aside>
    </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
    #menu {
    background-color: var(--color-primary);
    width: 200px;
    height: 100%;
    }
</style>
