<template>
  <div
    class="w-[84%] laptop:w-[59%] laptop:mr-1 desktop:w-[47%] ml-[18%] md:w-[80%] md:ml-[10%] desktop:ml-[22%]"
  >
    <!-- Middle -->
    <div class="w-full xl:w-1/2 desktop:w-full">
      <!-- Sticky Header -->
      <!-- <div
        class="flex justify-between items-center border px-4 py-[17px] fixed w-[602px] tablet:w-[362px] bg-white dark:bg-dim-900  border-gray-200 dark:border-gray-700">
        <h4 class="text-gray-800 dark:text-gray-100 font-bold ">
          Home
        </h4>
        <i class="fa-brands fa-twitter  text-lg  text-blue-400"></i>
      </div> -->
      <div
        class="bg-black-rgba h-16 fixed laptop:w-[37.7rem] w-[37.6rem] top-0 flex items-center md:w-[38.4rem] sm:w-[32.8rem] tablet:w-[23rem]"
      >
        <div
          class="flex flex-col items-center px-24 hover:bg-gray-300 py-5 relative md:px-[104px] sm:px-[84px] tablet:px-[48px]"
        >
          <h4 class="text-gray-800 dark:text-gray-100 font-bold">For you</h4>
          <div class="w-14 h-1 bg-blue-600 rounded-xl absolute bottom-0"></div>
        </div>
        <div
          class="px-24 hover:bg-gray-300 py-5 md:px-[104px] sm:px-[84px] tablet:px-[46px]"
        >
          <h4 class="text-gray-800 dark:text-gray-100 font-bold">Following</h4>
        </div>
        <i
          class="fa-solid fa-gear px-[35px] hover:bg-gray-300 py-6 sm:px-[20px] tablet:px-4"
        ></i>
      </div>

      <!-- Tweet Box -->
      <div class="border pb-3 border-gray-200 dark:border-dim-200 mt-16">
        <div class="flex p-4">
          <img
            class="w-10 h-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1444753598328496128/hCCopfyz_400x400.jpg"
            alt=""
          />
          <textarea
            class="p-2 dark:text-white text-gray-900 w-full h-16 bg-transparent focus:outline-none resize-none"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div class="flex p-4 w-full">
          <a href="" class="text-blue-400 rounded-full p-2">
            <i class="fa-solid fa-image text-lg"></i>
          </a>
          <a href="" class="text-blue-400 rounded-full p-2">
            <i class="fa-solid fa-image text-lg"></i>
          </a>
          <a href="" class="text-blue-400 rounded-full p-2">
            <i class="fa-solid fa-image text-lg"></i>
          </a>
          <a href="" class="text-blue-400 rounded-full p-2">
            <i class="fa-solid fa-image text-lg"></i>
          </a>
          <a href="" class="text-blue-400 rounded-full p-2">
            <i class="fa-solid fa-image text-lg"></i>
          </a>
          <a
            href=""
            class="font-bold bg-blue-400 text-white rounded-full px-6 ml-auto mr-1 flex items-center"
          >
            Post
          </a>
        </div>
      </div>
      <!-- Show tweets -->
      <div
        class="text-center py-4 bg-white dark:bg-dim-900 border border-gray-200 dark:border-dim-200 cursor-pointer text-blue-400 text-sm"
      >
        Show 9 Posts
      </div>

      <!-- show post -->
      <div
        class="border border-gray-200 dark:border-dim-200 cursor-pointer pb-4 hover:bg-slate-100 px-3 py-3"
      >
        <div class="w-full flex justify-between">
          <div class="w-[9%] tablet:w-10">
            <img
              class="h-10 w-10 rounded-full "
              src="https://pbs.twimg.com/profile_images/1444753598328496128/hCCopfyz_400x400.jpg"
              alt=""
            />
          </div>
          <div class="w-[91%] tablet:px-1">
            <div class="w-full flex flex-col ">
              <div class="flex justify-between">
                <div class=" flex md:flex-row sm:flex-row tablet:flex-col">
                  <p class=" tablet:text-sm">
                   {{ getCurrentUser.username }}
                  </p>
                  <span class="ml-1 text-sm leading-5 text-gray-400">
                   {{ getCurrentUser.email }}  {{  }}
                    </span>
                </div>
                <div><i class="fa-solid fa-ellipsis text-xl text-gray-400"></i></div>
              </div>
            </div>
            <div class="">
              <p class="text-gray-500">{{getTweets.text }}</p>
            </div>
            <div class="flex items-center w-full justify-between mt-3">
              <div
                class="flex items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400"
              >
                <i class="fa-solid fa-comment mr-2 text-lg"></i>
                12.3 k
              </div>
              <div
                class="flex items-center dark:text-white text-xs text-gray-400 hover:text-green-400 dark:hover:text-green-400"
              >
                <i class="fa-solid fa-retweet mr-2 text-lg"></i>
                14 k
              </div>
              <div
                class="flex items-center dark:text-white text-xs text-gray-400 hover:text-red-600 dark:hover:text-red-600"
              >
                <i class="fa-solid fa-heart mr-2 text-lg"></i>
                14 k
              </div>
              <div
                class="flex items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400"
              >
                <i class="fa-solid fa-share mr-2 text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Toggler -->
      <div
        class="py-2 border border-gray-200 dark:border-dim-200 bg-gray-50 dark:bg-dim-300"
      >
        <div
          class="text-center p-6 bg-white dark:bg-dim-900 border-b border-t border-gray-200 dark:border-dim-200"
        >
          <h3 class="dark:text-white text-gray-900 text-2xl font-bold mb-2">
            Customize your view
          </h3>
          <p class="text-gray-500 mb-5 text-sm">
            Manage your font size, color and background. These settings affect
            all the Twitter accounts on this browser.
          </p>
          <a
            href="javascript:void(0)"
            onclick="document.querySelector('html').classList.toggle('dark')"
            class="mx-auto w-11 h-11 xl:w-48 flex items-center justify-center bg-blue-400 py-3 rounded-full text-white font-bold"
          >
            <i class="fa-solid fa-cloud-moon block xl:hidden text-lg"></i>
            <span class="hidden xl:block font-bold">Toggle Dark Mode</span>
          </a>
        </div>
      </div>
      <!-- Spinner -->
      <div class="p-4 border border-gray-200 dark:border-gray-700">
        <svg class="w-8 h-8 mx-auto animate-spin-fast">
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            stroke-width="4"
            style="stroke: rgb(29, 161, 242); opacity: 0.2"
          ></circle>
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            stroke-width="4"
            style="
              stroke: rgb(29, 161, 242);
              stroke-dasharray: 80;
              stroke-dashoffset: 60;
            "
          ></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useTweetStore } from "@/store/tweets";
import { useUserStore } from '@/store/user';
export default {
  computed: {
    ...mapState(useTweetStore, ["getTweets"]),
    ...mapState(useUserStore, ["getCurrentUser"])
  },
};
</script>
