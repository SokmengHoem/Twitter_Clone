<template>
  <div class="hidden laptop:block w-[30%] desktop:w-[30%] overflow-hidden">
    <div class="w-full flex flex-col items-center overflow-hidden px-3">
      <div class="w-[26%] bg-white h-[63px] flex justify-center fixed">
        <div class="w-full h-[50px] mt-1">
          <!-- Search -->
          <div class="relative px-2">
            <i
              class="fa-solid fa-magnifying-glass text-gray-600 absolute left-6 top-1/2 -translate-y-1/2"
            ></i>
            <input
              type="text"
              class="w-full bg-bgcontent dark:bg-dim-400 border-gray-200 dark:border-dim-400 text-gray-500 focus:outline-none font-normal h-14 pl-12 text-sm rounded-full"
              placeholder="Search "
            />
          </div>
        </div>
      </div>
      <div class="w-full mt-[70px] bg-bgcontent rounded-xl px-5 h-auto">
        <h1 class="text-xl font-bold mt-3">Subscribe to Premium</h1>
        <p class="mt-2 text-gray-600">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <div class="mt-5 mb-4">
          <a
            href="#"
            class="bg-black text-white font-bold px-4 py-2 rounded-full"
            >Subscribe</a
          >
        </div>
      </div>

      <div class="w-full mt-4 bg-bgcontent rounded-xl pt-4 h-auto">
        <h1 class="text-xl font-bold px-5 mb-2">Trends for you</h1>
        <div class="px-5 py-3 hover:bg-gray-300">
          <div class="flex flex-row justify-between">
            <p class="text-sm text-gray-500">Trending in Cambodia</p>
            <i
              class="fa-solid fa-ellipsis text-xs hidden xl:flex items-center xl:ml-4 text-gray-800 dark:text-white"
            >
            </i>
          </div>
          <h1 class="font-bold text-l">Cambodia</h1>
          <p class="text-sm text-gray-500">4,401 posts</p>
        </div>

        <div class="py-3 rounded-b-xl hover:bg-gray-300">
          <a href="" class="text-sm text-blue-400 px-5">Show more</a>
        </div>
      </div>

      <div class="w-full mt-4 bg-bgcontent rounded-xl pt-4 h-auto">
        <h1 class="text-xl font-bold px-5 mb-2">Who to follow</h1>
        <div class="px-5 py-3 hover:bg-gray-300">
          <div class="flex flex-row justify-between items-center">
            <div>
              <img
                src="../assets/images/phone.png"
                alt=""
                class="w-12 rounded-full"
              />
            </div>
            <div>
              <h1 class="font-bold">
                Science Magazine
                <span
                  ><i class="fa-solid fa-circle-check text-blue-400"></i
                ></span>
              </h1>
              <p class="text-sm text-gray-500">@ScienceMagazine</p>
            </div>
            <div>
              <a
                href="#"
                class="bg-black text-white font-bold px-4 py-2 rounded-full"
                >Follow</a
              >
            </div>
          </div>
        </div>

        <div class="px-5 py-3 hover:bg-gray-300">
          <div class="flex flex-row justify-between items-center">
            <div>
              <img
                src="../assets/images/real.png"
                alt=""
                class="w-12 rounded-full"
              />
            </div>
            <div>
              <h1 class="font-bold">
                Real Madrid C.F.
                <span
                  ><i class="fa-solid fa-circle-check text-orange-400"></i
                ></span>
              </h1>
              <p class="text-sm text-gray-500">@realmadrid</p>
            </div>
            <div>
              <a
                href="#"
                class="bg-black text-white font-bold px-4 py-2 rounded-full"
                >Follow</a
              >
            </div>
          </div>
        </div>

        <div class="py-3 rounded-b-xl hover:bg-gray-300">
          <a href="" class="text-sm text-blue-400 px-5">Show more</a>
        </div>
      </div>

      <div class="py-3 flex flex-wrap space-x-5 space-y-1 items-center justify-center">
        <a href="#" class=" text-xs hover:underline text-gray-500">Terms of Service</a>
        <a href="#" class=" text-xs hover:underline text-gray-500"> Privacy Policy</a>
        <a href="#" class=" text-xs hover:underline text-gray-500"> Cookie Policy</a>
        <a href="#" class=" text-xs hover:underline text-gray-500">Accessibility</a>
        <a href="#" class=" text-xs hover:underline text-gray-500"> Ads info</a>
       
          <a href="#" class=" text-xs hover:underline text-gray-500"> More <i class="fa-solid fa-ellipsis text-xs">
        </i></a>
         
        
        <a href="#" class=" text-xs hover:underline text-gray-500"> © 2024 X Corp.</a>
      </div>
    </div>
  </div>
</template>
