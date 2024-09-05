<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <EventCard v-for="event in paginatedEvents" :key="event.id" :event="event" />
    </div>
    <div class="mt-8 flex justify-center gap-1">
      <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg"
      >
        Previous
      </button>
      <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import EventCard from '../components/EventCard.vue';
import eventData from '../assets/data/events-data.json';

const events = ref(eventData);
const currentPage = ref(1);
const eventsPerPage = 8;

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * eventsPerPage;
  return events.value.slice(start, start + eventsPerPage);
});

const totalPages = computed(() => Math.ceil(events.value.length / eventsPerPage));

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}
</script>

