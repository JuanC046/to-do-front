<template lang="">
    <div id="menu-wrap">
        <!-- Button trigger modal -->
        <button id="button-create-task" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-task">
            New Task +
        </button>
        <!-- Modal -->
        <div class="modal fade" id="create-task" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="staticBackdropLabel">New Task</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="task-title" aria-describedby="nameHelp">
                        <label for="task-descriotion">Description</label>
                        <input type="text" class="form-control" id="task-description" aria-describedby="idHelp">
                        <label for="init-date">Init date</label>
                        <input type="date" class="form-control" id="init-date" aria-describedby="init-dateHelp">
                        <label for="limit-date">Limit date</label>
                        <input type="date" class="form-control" id="limit-date" aria-describedby="limit-dateHelp">
                    </div>
                    <div id="modal-footer" class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CreateTask',
    data() {
        return {
            title: '',
            description: '',
            initDate: '',
            limitDate: ''
        }
    },
    methods: {
        createTask() {
            console.log('createTask')
        }
    }
    
}
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
</style>