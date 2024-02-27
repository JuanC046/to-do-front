<template lang="">
  <div>
    <!-- Button trigger modal -->
    <button
      id="button-create-task"
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#create-task"
    >
      New Task +
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="create-task"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <form @submit.prevent="createTask">
            <div class="modal-header">
              <h2 class="modal-title fs-5" id="staticBackdropLabel">
                New Task
              </h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label for="title">Title</label>
              <input
                type="text"
                v-model="newTask.title"
                class="form-control"
                id="task-title"
                aria-describedby="nameHelp"
              />
              <label for="task-descriotion">Description</label>
              <input
                type="text"
                v-model="newTask.description"
                class="form-control"
                id="task-description"
                aria-describedby="idHelp"
              />
              <label for="init-date">Init date</label>
              <input
                type="date"
                v-model="newTask.initDate"
                class="form-control"
                id="init-date"
                aria-describedby="init-dateHelp"
              />
              <label for="limit-date">Limit date</label>
              <input
                type="date"
                v-model="newTask.limitDate"
                class="form-control"
                id="limit-date"
                aria-describedby="limit-dateHelp"
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
              <button type="submit" class="btn btn-primary" id="submitTask">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Toast -->
    <template>
      <div class="toast-container">
        <div
          v-if="show"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-delay="2000"
        >
          <div class="toast-header">
            <img src="../assets/logo.jpg" class="rounded me-2" alt="..." />
            <strong class="me-auto">ToDoZen</strong>
            <button
              type="button"
              class="btn-close"
              @click="hideToast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">
            {{ message }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "CreateTask",
  data() {
    return {
      newTask: {
        title: "",
        initDate: "",
        limitDate: "",
        description: "",
      },
      show: false,
      title: "",
      message: "",
    };
  },
  methods: {
    createTask() {
      // Logica envío datos al servidor
      console.log(this.newTask);
      this.showToast();
      // Restablecer campos del formulario
      this.newTask = {
        title: "",
        initDate: "",
        limitDate: "",
        description: "",
      };
    },
    showToast(message = "Task created successfully") {
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.hideToast();
      }, 2000); // Oculta automáticamente después de 2 segundos
    },
    hideToast() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
#create-task {
  color: black;
}

#button-create-task {
  background-color: var(--color-secondary);
  border-color: var(--color-border);
}

#button-create-task:hover {
  background-color: var(--color-secondary-hover);
  border-color: var(--color-border);
}

toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.toast {
  width: 300px;
}
</style>
