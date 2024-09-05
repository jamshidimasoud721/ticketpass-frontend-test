<template>
  <div class="border rounded-lg shadow-md p-4">
    <div class="mb-4">
        <img :src="'/'+ event.image" alt="Event image" class="w-full  object-cover mb-4">
    </div>
    <div class="text-center">
      <h3 class="text-lg font-semibold mb-2">{{ event.title }}</h3>
      <p class="my-4">
        Start date: <span class="text-gray-500">{{ formatDate(event.start) }}</span>
      </p>
      <p class="mb-4">
        End date: <span class="text-gray-500">{{ formatDate(event.end) }}</span>
      </p>
      <router-link :to="{ name: 'eventDetail', params: { id: event.id } }"
                   class="inline-block bg-green-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:bg-transparent hover:text-black hover:border border-green-500">
        View
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import {formatDate} from "@/utils/dateFormatter";

const props = defineProps({
  event: Object
});


</script>
