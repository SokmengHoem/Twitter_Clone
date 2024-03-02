<template>
    <div class=" bg-white">
        <div class="container mx-auto h-screen ">
            <div class="flex flex-row w-full justify-cent mx-auto overflow-auto">
                
                <SideNav/>
                <Middle/>
                <RightNav/>
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue'
import  Middle  from "@/components/Middle.vue";
import RightNav from "@/components/RightNav.vue"
export default {
    components: {
        SideNav,
        Middle,
        RightNav
    }
}
</script>