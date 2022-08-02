<script setup>
import IconArrowLeft from '/src/components/icons/IconArrowLeft.vue'
</script>

<template>
  <div class="w-80 h-104">
    <div
      class="w-full flex shadow items-center text-black text-xl text-center font-medium rounded-t-md px-4 py-5 bg-gray-200 sm:px-6"
    >
      <i
        @click="$router.back()"
        class="absolute cursor-pointer"
      >
        <IconArrowLeft />
      </i>
      <h3 class="mx-auto">New contact</h3>
    </div>

    <div class="h-full shadow overflow-hidden rounded-b-md">
      <div class="h-full overflow-scroll px-2 py-3 bg-white text-black sm:p-6">
        <div class="h-full grid content-between gap-6">
          <div class="grid gap-4">
            <div class="">
              <label
                class="block text-sm font-medium text-gray-400"
                for="first-name"
              >
                First name
              </label>
              <input
                autocomplete="given-name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="first-name"
                name="first-name"
                type="text"
              />
            </div>

            <div class="">
              <label
                class="block text-sm font-medium text-gray-400"
                for="last-name"
              >
                Last name
              </label>
              <input
                autocomplete="family-name"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="last-name"
                name="last-name"
                type="text"
              />
            </div>

            <div class="">
              <label
                class="block text-sm font-medium text-gray-400"
                for="email-address"
              >
                Email address
              </label>
              <input
                autocomplete="email"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="email-address"
                name="email-address"
                type="text"
              />
            </div>
          </div>

          <button
            class="w-full flex justify-center p-4 border border-transparent shadow-sm text-sm font-black rounded-md uppercase text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
