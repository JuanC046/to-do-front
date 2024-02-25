<template>
  <header>
    <h1>ToDoZen</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/work-space">WorkSpace</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <p>© 2024</p>
  </footer>
</template>

<style>
:root {
  --color-primary: #52b69a;
  --color-secondary: #34a0a4;
  --color-tertiary: #168aad;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 100;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--color-tertiary);
}

nav a.router-link-exact-active {
  color: var(--color-primary);
}
</style>
