<template>
  <div class="h-screen flex justify-center items-center">
    <div class="w-430 md:w-600 shadow-lg border-2 rounded-xl">
      <div class="w-full flex flex-col mb-10 justify-center items-center">
        <div class="mt-2">
           <i
          class="fa-brands fa-x-twitter text-3xl px-2 py-1 rounded-full hover:bg-slate-200"
        ></i>
        </div>
        <div class=" w-80 mt-4">
         <h1 class="text-xl font-bold"> Sign in to X</h1>
        </div>
        <div class=" w-80 mt-4 py-2 rounded-3xl px-2 hover:bg-slate-100 flex justify-between items-center border border-gray-300">
          <p class="text-sm "> Sign in with Google</p>
          <i class="fa-brands fa-google text-orange-300 "></i>
        </div>
        <div class=" w-80 mt-4 py-2 rounded-3xl px-2 hover:bg-slate-100 flex justify-center items-center border border-gray-300">
          <i class="fa-brands fa-apple"></i>
          <p class="text-sm ml-1"> Sign in with apple</p>
        </div>
        <div class=" w-80 mt-3 flex justify-between items-center">
          <div class=" w-36 bg-gray-300 h-[1px]"></div>
          <div>or</div>
           <div class=" w-36 bg-gray-300 h-[1px]"></div>
        </div>
        <div class=" w-80 mt-3">
          <form @submit.prevent="handleLogin">
          <div class=" w-full flex justify-between items-center">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" class=" border-2 rounded-sm"/>
          </div>
          <div class="w-full flex justify-between items-center mt-3">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password"  class=" border-2 rounded-sm"/>
          </div>
         
           <div class="mt-5">
             <button type="submit" class=" bg-slate-900 text-white px-14 py-1 rounded-2xl w-full">Login</button>
           </div>
        </form>
        </div>
        <div class=" px-24 py-1 rounded-2xl  mt-4 border border-gray-300 hover:bg-slate-200">
          <router-link to>Forgot password?</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import {useUserStore} from '../store/user'
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if(this.checkLogin(this.username, this.password)){
        this.$router.push('/home')
      }
      this.username = "";
      this.password = "";
    },
    checkLogin(username, password){
        let check = false;
        this.getUser.forEach( (item) => {
            if(item.username === username && item.password === password){
                this.setCurrentUser(item);
                check = true
            }
        });
        return check
    },
    ...mapActions(useUserStore, ["setCurrentUser"]),
  },
  //use pull add from other component
  computed: {
    ...mapState(useUserStore, ["getUser"])
  },
};
</script>
