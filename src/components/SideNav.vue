<template>
  <div  class="w-[16%] fixed z-10 h-screen flex flex-col justify-between items-center md:w-[10%] desktop:w-[19%]">
    <div class="w-full h-[88%] flex flex-col items-center">
      <div class="h-[9%] flex justify-center items-center w-full">
        <i
          class="fa-brands fa-x-twitter text-xl px-2 py-1 rounded-full hover:bg-slate-200"
        ></i>
      </div>
      <div class="h-[80%] flex flex-col justify-around items-center xl:flex xl:justify-around xl:items-start">
        <router-link to="" class="link">
          <i class="fa-solid fa-house text-xl"></i>
          <span class="icon">Home</span>
        </router-link>
         <router-link to="" class="link">
          <i class="fa-solid fa-magnifying-glass text-xl"></i>
          <span class="icon">Search</span>
        </router-link>
        <router-link to="" class="link">
          <i class="fa-solid fa-hashtag text-xl"></i>
          <span class="icon">Explore</span>
        </router-link>
         <router-link to="" class="link">
         <i class="fa-solid fa-bell text-xl"></i>
          <span class="icon">Notifications</span>
        </router-link>
         <router-link to="" class="link">
          <i class="fa-solid fa-envelope text-xl"></i>
          <span class="icon">Messages</span>
        </router-link>
         <router-link to="" class="link" >
          <i class="fa-solid fa-bookmark text-xl"></i>
          <span class="icon">Bookmarks</span>
        </router-link>
         <router-link to="" class="link">
          <i class="fa-solid fa-list-ul text-xl"></i>
          <span class="icon">Lists</span>
        </router-link>
         <router-link to="/profile" class="link">
           <i class="fa-solid fa-user text-xl"></i>
          <span class="icon">Profile</span>
        </router-link>
          <router-link to="" class="link">
           <i class="fa-solid fa-ellipsis text-xl"></i>
          <span class="icon">More</span>
        </router-link>
      </div>
      <div class="h-[11%]  w-[80%] ">
      <i class="fa-solid fa-feather text-xl block xl:hidden px-2 py-3 text-center bg-blue-600 rounded-full text-white desktop:px-1"></i>
        <span class="icon xl:ml-0 bg-blue-500 text-center py-3  rounded-full text-white">Post</span>
      </div>
    </div>
    <div class="xl:w-[85%] h-[10%] flex justify-between items-center" >
      <img class="w-10 h-10 rounded-full"
          src="https://pbs.twimg.com/profile_images/1444753598328496128/hCCopfyz_400x400.jpg" alt="" />
        <div class="hidden xl:flex flex-col">
          <h4 class="text-gray-800 dark:text-white font-bold text-sm">{{ store.getCurrentUser.username }} </h4>
          <p class="text-gray-400 text-sm">{{store.getCurrentUser.email}}</p>
        </div>

        <i @click="isModalOpen = true" class="fa-solid fa-ellipsis text-xs hidden xl:flex items-center xl:ml-4  text-gray-800 dark:text-white">
        </i>
        <teleport to='body'>
          <div class=" bg-gray-200 top-[75%] left-24 fixed z-20 w-72 h-[103px] rounded-xl shadow-md" v-if="isModalOpen" >
              <div class="" ref="modal">
                  <div class=" w-full hover:bg-gray-300 mt-3 py-2">
                    <router-link to="" class=" px-5 font-bold">Add an existing account</router-link>
                  </div>
                   <div class=" w-full hover:bg-gray-300 py-2">
                    <router-link to="/" class=" px-5 font-bold">Log out {{store.getCurrentUser.email}}</router-link>
                  </div>
              </div>
          </div>
        </teleport>
    </div>
  </div>
  
</template>


<script setup>
import {ref} from 'vue'
import { onClickOutside } from '@vueuse/core'
import {useUserStore} from '../store/user'

const store = useUserStore()

const isModalOpen = ref(false)
const modal = ref(null)

onClickOutside(modal, () => {
  isModalOpen.value = false
})

</script>