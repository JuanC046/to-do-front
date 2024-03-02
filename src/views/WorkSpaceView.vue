<template >
    <div id="workSpace-grid">
        <Menu class="menu" ></Menu>
        <DashBoard class="dashboard"></DashBoard>
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