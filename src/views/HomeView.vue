<template class="home">
  <div>
    <SingIn/>
    <br><br>
    <SingUp/>
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
  box-sizing: border-box;
  justify-content: space-between;
}
</style>