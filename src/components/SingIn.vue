<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#sing-in-modal"
    >
      Sing In
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="sing-in-modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <form @submit.prevent="singIn">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title fs-5" id="staticBackdropLabel">Sing In</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label for="email">E-mail</label>
              <input
                v-model="userData.email"
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
              <label for="password">Password</label>
              <input
                v-model="userData.password"
                type="password"
                class="form-control"
                id="password"
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
              <button type="button" class="btn btn-success" @click="singIn">
                Sing In
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
  name: "SingIn",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async singIn() {
      console.log(this.userData);
      console.log(
        `${this.server}/user/login/${this.userData.email}/${this.userData.password}`
      );
      await fetch(`${this.server}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.userData), // body data type must match "Content-Type" header
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.body.loggedIn) {
            this.$store.dispatch("setUser", data.body);
            this.$store.dispatch("toggleLogin");
            console.log("Success:", data);
            window.location.href = "/work-space";
          } else {
            console.log("Error:", data);
            this.userData = {
              email: "User not found!",
              password: "",
            };
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      this.userData = {
        email: "",
        password: "",
      };
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    server() {
      return this.$store.state.server;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
#sing-in-modal {
  color: black;
}

#modal-footer {
  display: flex;
  justify-content: center;
}
</style>
