<script setup></script>

<template>
  <div class="w-80 h-104 bg-white rounded-md">
    <div class="w-full shadow flex items-center text-black text-xl text-center font-medium px-4 py-5 sm:px-6">
      <h3 class="mx-auto font-black text-gray-600 uppercase">Make payment</h3>
    </div>

    <div class="h-full shadow overflow-hidden rounded-md">
      <div class="h-full overflow-scroll px-4 py-5 bg-white text-black sm:p-6">
        <div class="h-full grid content-between gap-6">
          <div class="grid gap-5">
            <div class="">
              <small class="block mb-1 text-sm font-medium text-gray-400">Select contact</small>
              <button
                @click="$router.push('/select')"
                class="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-100 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Select contact
              </button>
            </div>

            <div class="">
              <small class="block mb-1 text-sm font-medium text-gray-400">Select payment method</small>
              <button
                @click="$router.push('/method')"
                class="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-100 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Select payment method
              </button>
            </div>

            <div class="">
              <small class="block mb-1 text-sm font-medium text-gray-500">Enter amount</small>
              <input
                class="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                type="number"
              />
            </div>
          </div>

          <button
            class="w-full flex justify-center p-4 border border-transparent shadow-sm text-sm font-black uppercase rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
