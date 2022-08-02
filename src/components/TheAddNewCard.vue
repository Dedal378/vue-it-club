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
      <h3 class="mx-auto">New card</h3>
    </div>

    <div class="h-full shadow overflow-hidden rounded-b-md">
      <div class="h-full overflow-scroll px-2 py-3 bg-white text-black sm:p-6">
        <div class="h-full grid content-between gap-6">
          <div class="flex gap-0.5">
            <button
              class="flex w-1/2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-gray-100 font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:bg-amber-500 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Card
            </button>

            <button
              class="flex w-1/2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-gray-100 font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:bg-amber-500 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Bank Account
            </button>
          </div>

          <div class="grid gap-4">
            <div class="">
              <label
                class="block text-sm font-medium text-gray-400"
                for="full-name"
              >
                Full name
              </label>
              <input
                class="mt-1 uppercase focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="full-name"
                name="full-name"
                type="text"
              />
            </div>

            <div class="">
              <label
                class="block text-sm font-medium text-gray-400"
                for="card-number"
              >
                Card number
              </label>
              <input
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="card-number"
                name="card-number"
                type="number"
              />
            </div>

            <div class="">
              <label
                class="block text-sm font-medium text-gray-400"
                for="date"
              >
                Expiry date
              </label>
              <input
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="date"
                name="date"
                type="date"
              />
            </div>
          </div>

          <!--<div class="grid gap-4">
            <div class="">
              <label
                class="block text-sm font-medium text-gray-400"
                for="account-name"
              >
                Account name
              </label>
              <input
                class="mt-1 uppercase focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="account-name"
                name="account-name"
                type="text"
              />
            </div>

            <div class="">
              <label
                class="block text-sm font-medium text-gray-400"
                for="account-number"
              >
                Account number
              </label>
              <input
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="account-number"
                name="account-number"
                type="number"
              />
            </div>

            <div class="">
              <label
                class="block text-sm font-medium text-gray-400"
                for="date"
              >
                BSB
              </label>
              <input
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id="date"
                name="date"
                type="number"
              />
            </div>
          </div>-->

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
