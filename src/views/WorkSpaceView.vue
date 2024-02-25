<template >
    <div id="workSpace-grid">
        <Menu id="menu"></Menu>
        <DashBoard id="dashboard"></DashBoard>
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
            tasks: []
        }
    },
    methods: {
        getTasks() {
            console.log('getTasks')
        }
    }
    
}
</script>
<style>
    #workSpace-grid {
        display: grid;
        grid-template-columns: 200px 1fr;
        grid-template-rows: 100%;
        grid-template-areas: "menu dashboard";
        background-color: var(--color-primary);
    }
    #menu {
        grid-area: menu;
    }
    #dashboard {
        grid-area: dashboard;
    }
</style>