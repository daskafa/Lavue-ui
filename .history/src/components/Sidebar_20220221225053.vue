<template>
p 


   <router-link :to="{ name: 'Dashboard' }"><span class="text-sm ml-2">Dashboard</span></router-link> -->
   <router-link :to="{name: 'About'}"><span class="text-sm ml-2">About</span></router-link> -->
                           
    <!-- <Content /> -->
</template>

<script>
import Content from './Content.vue'

export default {
    name: "Sidebar",
    components: {
        Content
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
