<template class="home">
  <div id="home">
    <div id="home-elements">
      <h3 id="description-app">
        Transform your chaos into clarity with our innovative, personalized task <br>
        management tool.
      </h3>
      <br><br>
      <SingIn />
      <br /><br />
      <SingUp />
      <br /><br />
      
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import SingIn from "@/components/SingIn.vue";
import SingUp from "@/components/SingUp.vue";
export default {
  name: "HomeView",
  components: {
    SingIn,
    SingUp,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#home {
  border-radius: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  width: 95%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;

  background-image: url("../assets/home.webp");
  /* Ruta de la imagen */
  background-size: cover;
  /* Para ajustar la imagen al tamaño del contenedor */
  background-position: center;
  /* Para centrar la imagen */
  /* Opcional: otras propiedades de fondo como repetición, si es necesario */
}
#description-app{
  color: var(--color-text);
  font-size: 1.5em;
  text-align: center; 
  font-weight: bold;
  text-shadow: 2px 2px 4px #000000;
  font-style: italic;
}
</style>
