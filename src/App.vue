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
  --color-primary: #0e3450;
  --color-secondary: #134b72;
  --color-tertiary: #196194;
  --color-fourth: #2592e0;
  --color-text: #f4f4f4;
  --color-border: #1f77b6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-text);
  font-weight: 100;
}
header {
  border: 5px solid var(--color-border);
  color: var(--color-letter);
  background-color: var(--color-secondary);
}

header h1 {
  padding: 30px;
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px #000000;
  padding-bottom: 10px; /* Espaciado inferior */
}
.btn-group {
  color: var(--color-letter);
}

nav {
    padding: 20px 30px; /* Reducir un poco el espacio para que se vea más compacto */
    background-color: var(--color-primary); /* Fondo */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra para resaltar */
    border-radius: 50px; /* Hace que la barra de navegación sea ovalada */
    color: var(--color-fourth);
    margin: 32px;
    margin-bottom: 4px;
}

nav a {
    font-weight: bold;
    color: var(--color-fourth);
    text-decoration: none; /* Quitar subrayado predeterminado */
    transition: color 0.3s; /* Transición suave de color */
}

nav a:hover {
    color: var(--color-tertiary); /* Cambiar color al pasar el ratón */
}

nav a.router-link-exact-active {
  color: var(--color-tertiary);
} 

main {
  display: flex;
  justify-content: center;
  background-color: var(--color-secondary);
  text-align: center;
  align-items: center;
}

footer {
  background-color: var(--color-secondary);
  color: var(--color-letter);
  padding: 20px;
  border-top: 5px solid var(--color-border);
}

</style>
