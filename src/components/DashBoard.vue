<template>
    <div id="dashboard-wrapper">
        <h3>DashBoard</h3>
        <div>
            <div id="header-dashboard">
                <h4 id="header-dashboard-title">Tasks</h4>
                <CreateTask />
            </div>

            <ul id="tasks-list">
                <template v-if="logged">
                    <li class="task" v-for="(task, index) in tasks" :key="index">
                        <div class="head-task">
                            <h5>{{ task.title }}</h5>
                            <p>{{ task.initDate }}</p>
                            |
                            <p>{{ task.limitDate }}</p>
                            <label class="do">
                                <input type="checkbox">
                                <svg viewBox="0 0 64 64" height="2em" width="2em">
                                    <path
                                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                        pathLength="575.0541381835938" class="path"></path>
                                </svg>
                            </label>
                        </div>
                        <div class="body-task">
                            <p class="d-inline-flex gap-1">
                                <a class="btn btn-outline-secondary btn-sm" data-bs-toggle="collapse"
                                    :href="'#' + 'task-description' + item" role="button" aria-expanded="false"
                                    aria-controls="task-description">
                                    Description
                                </a>
                            </p>
                            <div class="collapse" :id="'task-description' + item">
                                <div>
                                    <p>{{ task.description }}</p>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline-danger">Delete</button>
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
                                        pathLength="575.0541381835938" class="path"></path>
                                </svg>
                            </label>
                        </div>
                        <div class="body-task">
                            <p class="d-inline-flex gap-1">
                                <a class="btn btn-outline-secondary btn-sm" data-bs-toggle="collapse"
                                    :href="'#' + 'task-description' + item" role="button" aria-expanded="false"
                                    aria-controls="task-description">
                                    Description
                                </a>
                            </p>
                            <div class="collapse" :id="'task-description' + item">
                                <div>
                                    <p>Task description</p>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline-danger">Delete</button>
                    </li>
                </template>

            </ul>
        </div>
    </div>
</template>
<script>
import CreateTask from "@/components/CreateTask.vue";
export default {
    name: "DashBoard",
    components: {
        CreateTask,
    },
    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        };
    },
    props: {
        logged: Boolean,
        tasks: Array,
    },
    methods: {
        createTask() {
            console.log("createTask");
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

.do input:checked~svg .path {
    stroke-dasharray: 70.5096664428711 9999999;
    stroke-dashoffset: -262.2723388671875;
}
</style>
