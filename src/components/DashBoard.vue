<template>
  <div id="dashboard-wrapper">
    <h3><strong>DashBoard</strong></h3>
    <div>
      <div id="header-dashboard">
        <h4 id="header-dashboard-title"><strong>Tasks</strong></h4>
        <button
          type="button"
          class="btn btn-primary button-create-task"
          @click="createTask"
        >
          New Task +
        </button>
      </div>

      <ul id="tasks-list" ref="tasksList">
        <template v-if="loggedIn">
          <li class="task" v-for="(task, index) in this.tasks" :key="index">
            <div class="head-task">
              <div>
                <h5 v-if="!task.editMode">
                  <strong>{{ task.title }}</strong>
                </h5>
                <input
                  v-else
                  class="edit-input"
                  v-model="task.title"
                  type="text"
                  placeholder="Task title"
                />
              </div>
              <div>
                <label for="initDate">Init Date</label>
                <p v-if="!task.editMode">{{ task.initDate }}</p>
                <input
                  v-else
                  class="edit-input"
                  v-model="task.initDate"
                  type="date"
                  placeholder="Init date"
                />
              </div>
              |
              <div>
                <label for="limitDate">Limit Date</label>
                <p v-if="!task.editMode">{{ task.limitDate }}</p>
                <input
                  v-else
                  class="edit-input"
                  v-model="task.limitDate"
                  type="date"
                  placeholder="Limit date"
                />
              </div>
              <label class="do">
                <input
                  id="myCheckbox"
                  type="checkbox"
                  v-model="task.completed"
                  @change="completeTask(index)"
                />
                <svg viewBox="0 0 64 64" height="2em" width="2em">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    class="path"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="body-task">
              <p class="d-inline-flex gap-1">
                <a
                  class="btn btn-outline-secondary btn-sm"
                  data-bs-toggle="collapse"
                  :href="'#' + 'task-description' + index"
                  role="button"
                  aria-expanded="false"
                  aria-controls="task-description"
                >
                  Description
                </a>
              </p>
              <div class="collapse" :id="'task-description' + index">
                <div>
                  <p v-if="!task.editMode">{{ task.description }}</p>
                  <input
                    v-else
                    class="edit-input"
                    v-model="task.description"
                    type="text"
                    placeholder="Task description"
                  />
                </div>
              </div>
            </div>
            <div class="wrapper-button">
              <button
                v-if="!task.editMode"
                type="button"
                class="btn btn-outline-warning btn-task"
                @click="toggleEditMode(index)"
              >
                Edit
              </button>
              <button
                v-else
                type="button"
                class="btn btn-outline-success btn-task"
                @click="saveTask(index)"
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-task"
                @click="deleteTask(index)"
              >
                Delete
              </button>
            </div>
          </li>
        </template>

        <template v-else>
          <li class="task" v-for="item in items" key="item">
            <div class="head-task">
              <h5>Task title</h5>
              <p>init date</p>
              |
              <p>limit date</p>
              <label class="do">
                <input type="checkbox" />
                <svg viewBox="0 0 64 64" height="2em" width="2em">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    class="path"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="body-task">
              <p class="d-inline-flex gap-1">
                <a
                  class="btn btn-outline-secondary btn-sm"
                  data-bs-toggle="collapse"
                  :href="'#' + 'task-description' + item"
                  role="button"
                  aria-expanded="false"
                  aria-controls="task-description"
                >
                  Description
                </a>
              </p>
              <div class="collapse" :id="'task-description' + item">
                <div>
                  <p>Task description</p>
                </div>
              </div>
            </div>
            <div class="wrapper-button">
              <button type="button" class="btn btn-outline-warning btn-task">
                Edit
              </button>
              <button type="button" class="btn btn-outline-danger btn-task">
                Delete
              </button>
            </div>
          </li>
        </template>
      </ul>
      <button
        type="button"
        class="btn btn-primary button-create-task"
        @click="createTask"
      >
        New Task +
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashBoard",
  components: {},
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      newTask: {
        id: null,
        title: "",
        description: "",
        initDate: "",
        limitDate: "",
        completed: 0,
        deleted: 0,
      },
    };
  },
  props: {},
  //   mounted() {
  //   // Escuchar el evento 'login-success'
  //   this.$bus.on('login-success', () => {
  //     // Una vez que se emite el evento, obtener las tareas
  //     this.fetchTasks();
  //   });
  // },
  methods: {
    async fetchTasks() {
      console.log("Fetching tasks...");
      await fetch(`${this.server}/task/list/${this.user.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let tasks = data.body.tasks;
          tasks.forEach((task) => {
            task.editMode = false;
            if (task.completed === 1) {
              task.completed = true;
            } else {
              task.completed = false;
            }
          });
          this.$store.dispatch("setTasks", tasks);
        })
        .catch((error) => console.error(error));
    },
    createTask() {
      let newTask = {
        id: "",
        title: "",
        description: "",
        initDate: "",
        limitDate: "",
        completed: 0,
        deleted: 0,
        editMode: true,
      };
      this.tasks.push(newTask);

      // Hacer focus en el último elemento de la lista
      setTimeout(() => {
        if (this.$refs.tasksList) {
          const lastTaskElement =
            this.$refs.tasksList.children[this.tasks.length - 1];
          if (lastTaskElement) {
            lastTaskElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 5);
      console.log(this.tasks[this.tasks.length - 1]);
    },
    toggleEditMode(index) {
      this.tasks.forEach((task, i) => {
        task.editMode = i === index;
      });
    },
    async saveTask(index) {
      if (this.tasks[index].title === "") {
        alert("Task title is required!");
        return;
      }
      if (this.tasks[index].initDate === "") {
        alert("Init date is required!");
        return;
      }
      if (this.tasks[index].limitDate === "") {
        alert("Limit date is required!");
        return;
      }
      if (this.tasks[index].id === "") {
        // Crear nueva tarea
        console.log("Creating new task...", this.tasks[index]);
        console.log("User id:", this.user.id);
        console.log("Task list:", this.tasks);
        this.tasks[index].userId = this.user.id;
        this.tasks[index].editMode = false;
        console.log("Task list:", this.tasks);
        console.log("New Task:", this.tasks[index]);
        await fetch(`${this.server}/task/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.tasks[index]),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      } else {
        // Actualizar tarea existente
        console.log("Updating task...", this.tasks[index]);
        this.tasks[index].userId = this.user.id;
        this.tasks[index].editMode = false;
        await fetch(`${this.server}/task/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.tasks[index]),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      }
      await this.fetchTasks();
    },
    async completeTask(index) {
      //this.tasks[index].completed = !this.tasks[index].completed;
      await fetch(`${this.server}/task/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.tasks[index]),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
      await this.fetchTasks();
    },
    async deleteTask(index) {
      await fetch(`${this.server}/task/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.tasks[index].id,
          userId: this.user.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
      this.tasks.splice(index, 1);
      await this.fetchTasks();
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    user() {
      return this.$store.state.user;
    },
    tasks() {
      return this.$store.state.tasks;
    },
    server() {
      return this.$store.state.server;
    },
  },
};
</script>
<style scoped>
#dashboard-wrapper {
  background-color: var(--color-primary);
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
  height: 95%;
  width: auto;
  overflow-y: auto;
  /* Añade una barra de desplazamiento vertical cuando sea necesario */
  /*Estilo para el scroll */
  scrollbar-width: thin;
  scrollbar-color: var(--color-secondary) var(--color-primary);
}

#header-dashboard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

#header-dashboard-title {
  grid-area: t;
}

#create-task {
  grid-area: c;
}

#tasks-list {
  list-style: none;
}

.button-create-task {
  background-color: var(--color-secondary);
  border-color: var(--color-border);
}

.button-create-task:hover {
  background-color: var(--color-secondary-hover);
  border-color: var(--color-border);
}

.task {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: var(--color-secondary);
  color: var(--color-text);
}

.head-task {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
}

.body-task {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

.wrapper-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.btn-task {
  width: 100px;
}

.edit-input {
  width: 100%;
  background-color: var(--color-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: 4px;
  border-radius: 10px;
  margin-bottom: 4px;
}
/*-------------------*/
.do {
  cursor: pointer;
}

.do input {
  display: none;
}

.do svg {
  overflow: visible;
}

.path {
  fill: none;
  stroke: white;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
}

.do input[type="checkbox"]:checked + svg .path {
  stroke-dasharray: 70.5096664428711 9999999;
  stroke-dashoffset: -262.2723388671875;
}
</style>
