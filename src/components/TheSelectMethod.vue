<script setup>
import IconArrowLeft from '/src/components/icons/IconArrowLeft.vue'
import IconPlus from '/src/components/icons/IconPlus.vue'
import IconDotsVertical from '/src/components/icons/IconDotsVertical.vue'
</script>

<template>
  <div class="w-80 h-104">
    <div
      class="w-full shadow flex items-center text-black text-xl text-center font-medium rounded-t-md px-4 py-5 bg-gray-200 sm:px-6"
    >
      <i
        @click="$router.back()"
        class="cursor-pointer mr-auto"
        v-motion-slide-right
      >
        <IconArrowLeft />
      </i>
      <h3 class="mx-auto">Select method</h3>
      <i
        @click="$router.push('/add-card')"
        class="cursor-pointer ml-auto"
      >
        <IconPlus />
      </i>
    </div>

    <div class="h-full shadow overflow-hidden rounded-b-md">
      <div class="h-full overflow-scroll px-4 py-5 bg-white text-black sm:p-6">
        <div class="grid gap-6">
          <div class="grid gap-2">
            <div class="text-gray-400 font-medium">Credit/debit cards</div>
            <div
              v-for="(item, id) in 2"
              :key="item"
            >
              <div
                class="w-full h-36 p-2 flex flex-col justify-between border-2 group hover:bg-amber-500 hover:scale-105 ease-out duration-300 rounded-md shadow cursor-pointer overflow-hidden"
              >
                <div class="flex justify-between items-start text-gray-600">
                  <img
                    alt="logo"
                    class="w-32 h-10"
                    src="/src/assets/world-bank-logo.svg"
                  />
                  <IconDotsVertical class="cursor-pointer hover:text-white" @click="$router.push('/add-card')" />
                </div>

                <div class="flex items-center text-xs text-gray-600 group-hover:text-white uppercase">
                  <span class="mr-2">First name</span>
                  <span class="">Last name</span>
                </div>

                <div class="flex justify-between items-center text-gray-500 group-hover:text-white font-medium">
                  <span class="mr-1.5 font-black">**** **** *123</span>
                  <span class="font-black">05/22</span>
                </div>
              </div>
            </div>
          </div>

          <div class="grid gap-3">
            <div class="text-gray-400 font-medium">Bank accounts</div>
            <div
              v-for="item in 1"
              :key="item"
            >
              <div class="w-full h-36 p-2 flex flex-col justify-between border-2 group hover:bg-amber-500 hover:scale-105 ease-out duration-300 rounded-md shadow overflow-hidden">
                <div class="flex justify-between items-start">
                  <div class="flex flex-col text-gray-500 group-hover:text-white">
                    <span class="text-xs font-medium">Account name</span>
                    <span class="font-black">87687658765</span>
                  </div>

                  <div class="flex items-center text-xs text-gray-500 font-black uppercase">
                    <IconDotsVertical class="cursor-pointer hover:text-white" @click="$router.push('/add-card')" />
                  </div>
                </div>

                <div class="flex justify-end items-center text-gray-500 group-hover:text-white font-medium">
                  <span class="font-black">123-456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
