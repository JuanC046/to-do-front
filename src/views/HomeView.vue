<template class="home">
  <div id="home">
    <div id="home-elements">
      <SingIn />
      <br><br>
      <SingUp />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import SingIn from '@/components/SingIn.vue'
import SingUp from '@/components/SingUp.vue'
export default {
  name: 'HomeView',
  components: {
    SingIn,
    SingUp
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;

}

#home {
  box-sizing: border-box;
  justify-content: space-between;
  width: auto;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('../assets/home.webp');
  /* Ruta de la imagen */
  background-size: cover;
  /* Para ajustar la imagen al tamaño del contenedor */
  background-position: center;
  /* Para centrar la imagen */
  /* Opcional: otras propiedades de fondo como repetición, si es necesario */
}
</style>