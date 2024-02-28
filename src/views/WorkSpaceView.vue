<template >
    <div id="workSpace-grid">
        <Menu class="menu" ></Menu>
        <DashBoard class="dashboard" :tasks="tasks"></DashBoard>
    </div>
</template>
<script>
import DashBoard from '@/components/DashBoard.vue'
import Menu from '@/components/Menu.vue'
export default {
    name: 'WorkSpace',
    components: {
        DashBoard,
        Menu
    },
    data() {
        return {
            tasks: [
                {
                    title: 'Task 1',
                    description: 'Description 1',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                },
                {
                    title: 'Task 2',
                    description: 'Description 2',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                },
                {
                    title: 'Task 3',
                    description: 'Description 3',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                },
                {
                    title: 'Task 4',
                    description: 'Description 4',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                },
                {
                    title: 'Task 5',
                    description: 'Description 5',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                },
                {
                    title: 'Task 6',
                    description: 'Description 6',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                },
                {
                    title: 'Task 7',
                    description: 'Description 7',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                },
                {
                    title: 'Task 8',
                    description: 'Description 8',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                },
                {
                    title: 'Task 9',
                    description: 'Description 9',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                },
                {
                    title: 'Task 10',
                    description: 'Description 10',
                    initDate: '2021-10-10',
                    limitDate: '2021-10-20'
                }
            ],
            logged: true
        }
    },
    methods: {
        getTasks() {
            console.log('getTasks')
        }
    }
    
}
</script>
<style scoped>
    #workSpace-grid {
        width: 95%;
        margin: 8px;
        display: grid;
        height: 500px;
        grid-template-columns: 200px auto;
        grid-template-areas: "menu dashboard";
        gap: 16px;
    }
    .menu {
        grid-area: menu;
    }
    .dashboard {
        grid-area: dashboard;
    }
</style>