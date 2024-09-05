<template>
  <div v-if="event" class="flex flex-col items-center">
    <img :src="event.image" alt="Event image" class="w-full h-64 object-cover mb-4">
    <h1 class="text-3xl font-bold">{{ event.title }}</h1>
    <p class="my-4">
      Start date: <span class="text-gray-500">{{ formatDate(event.start) }}</span>
    </p>
    <p class="mb-4">
      End date: <span class="text-gray-500">{{ formatDate(event.end) }}</span>
    </p>
    <div v-html="event.description"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import eventData from '../assets/data/events-data.json';
import {formatDate} from "@/utils/dateFormatter";

const route = useRoute();
const event = ref(null);

onMounted(() => {
  const eventId = route.params.id;
  event.value = eventData.find(event => event.id == eventId);
});

</script>
