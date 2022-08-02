<script setup>
import IconArrowLeft from '/src/components/icons/IconArrowLeft.vue'
import IconPlus from '/src/components/icons/IconPlus.vue'
</script>

<template>
  <div class="w-80 h-104">
    <div
      class="w-full shadow flex items-center text-black text-xl text-center font-medium rounded-t-md px-4 py-5 bg-gray-200 sm:px-6"
    >
      <i
        @click="$router.back()"
        class="cursor-pointer mr-auto">
        <IconArrowLeft />
      </i>
      <h3 class="mx-auto">Select contact</h3>
      <i
        @click="$router.push('/contact')"
        class="cursor-pointer ml-auto"><IconPlus />
      </i>
    </div>

    <div class="h-full shadow overflow-hidden rounded-b-md">
      <div class="h-full overflow-scroll px-4 py-5 bg-white text-black sm:p-6">
        <div class="grid gap-6">
          <div
            v-for="item in 3"
            :key="item"
          >
            <button
              class="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-gray-100 font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contact Name
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
