<template>
<div class="grid grid-cols-12">
    <div class="col-span-2 h-screen bg-gray-800">
        <div class="mt-5">
            <Logo />
        </div>
        <div class="mt-20 flex justify-center sidebar-menu-items">
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <span>Anasayfa</span>
                </li>
                <li class="mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    <span>Yazılar</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-span-10 p-50">content</div>
</div>


    <!-- <router-link :to="{ name: 'Dashboard' }"><span class="text-sm ml-2">Dashboard</span></router-link> -->
    <!-- <router-link :to="{name: 'About'}"><span class="text-sm ml-2">About</span></router-link> -->
                           
    <!-- <Content /> -->
</template>

<script>
// import Content from './Content.vue'
import Logo from './Logo'
export default {
    name: "Sidebar",
    components: {
        Logo
        // Content
    },
    data() {
        return {
            moved: true,
        };
    },
    methods: {
        sidebarHandler() {
            var sideBar = document.getElementById("mobile-nav");
            sideBar.style.transform = "translateX(-260px)";
            if (this.$data.moved) {
                sideBar.style.transform = "translateX(0px)";
                this.$data.moved = false;
            } else {
                sideBar.style.transform = "translateX(-260px)";
                this.$data.moved = true;
            }
        },
    },
};
</script>
<style scoped>
    .sidebar-menu-items li{
        display: flex;
    }
    .sidebar-menu-items li svg,
    .sidebar-menu-items li span{
        color: #e5e7eb;
    }
</style>