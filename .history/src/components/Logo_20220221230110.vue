<template>
<div class="grid grid-cols-12">
    <div class="col-span-2 h-screen bg-gray-800">
        <div>
            <Logo />
        </div>
    </div>
    <div class="col-span-10">content</div>
</div>


    <!-- <router-link :to="{ name: 'Dashboard' }"><span class="text-sm ml-2">Dashboard</span></router-link> -->
    <!-- <router-link :to="{name: 'About'}"><span class="text-sm ml-2">About</span></router-link> -->
                           
    <!-- <Content /> -->
</template>

<script>
export default {
    name: "Sidebar",
    components: {
        Logo
        // Content
    },
   
};
</script>
