<template lang="">
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#sing-up-modal"
    >
      Sing Up
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="sing-up-modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <form @submit.prevent="singUp">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title fs-5" id="staticBackdropLabel">Sing Up</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label for="name">Name</label>
              <input
                v-model="userData.name"
                type="text"
                class="form-control"
                id="name"
                aria-describedby="nameHelp"
              />
              <label for="email-singUp">E-mail</label>
              <input
                v-model="userData.email"
                type="email"
                class="form-control"
                id="email-singUp"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp-singUp" class="form-text">
                We'll never share your email with anyone else.
              </div>
              <label for="password">Password</label>
              <input
                v-model="userData.password"
                type="password"
                class="form-control"
                id="password-singUp"
              />
            </div>
            <div id="modal-footer" class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-success" @click="singUp">
                Sing Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingUp",
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async singUp() {
      await fetch(`${this.server}/user/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.userData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.body.loggedIn) {
            this.$store.dispatch("toggleLogin");
            this.$store.dispatch("setUser", data.body);
            //Llevar a la pagina de tareas
            window.location.href = "/work-space";
          } else {
            alert("User already exists");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.userData = {
        name: "",
        email: "",
        password: "",
      };
    },
  },
  computed: {
    server() {
      return this.$store.state.server;
    },
  },
};
</script>
<style scoped>
#sing-up-modal {
  color: black;
}
#modal-footer {
  display: flex;
  justify-content: center;
}
</style>
