<script setup>
import IconCheck from './icons/IconCheck.vue'
</script>

<template>
  <div class="w-80 h-104 bg-white rounded-md">
    <div class="w-full shadow flex items-center text-black text-xl text-center font-medium px-4 py-5 sm:px-6">
      <h3 class="mx-auto"></h3>
    </div>

    <div class="h-full shadow overflow-hidden rounded-md">
      <div class="h-full overflow-scroll px-4 py-5 bg-white text-black sm:p-6">
        <div class="h-full grid content-between gap-6">
          <div class="flex flex-col place-items-center">
            <i><IconCheck class="fill-emerald-600 mb-3" /></i>
            <div class="text-gray-600 text-lg text-center font-black">Payment completed successful</div>
          </div>

          <button
            class="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Make another one
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
