<script setup>
import { ref } from 'vue'

const title = ref('')

const events = ref([])

const addEvent = () => {
  if (!title.value.trim()) return

  events.value.push({
    id: Date.now(),
    title: title.value
  })

  title.value = ''
}

const removeEvent = (id) => {
  events.value = events.value.filter(
    event => event.id !== id
  )
}
</script>

<template>
  <div class="max-w-lg mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">
      Admin Dashboard
    </h2>

    <div class="flex gap-3">
      <input
        v-model="title"
        @keyup.enter="addEvent"
        placeholder="Event Name"
        class="border rounded px-3 py-2 flex-1"
      />

      <button
        @click="addEvent"
        class="bg-blue-700 text-white px-4 py-2 rounded"
      >
        Add Event
      </button>
    </div>

    <ul class="mt-6 space-y-3">
      <li
        v-for="event in events"
        :key="event.id"
        class="flex justify-between items-center border rounded p-3"
      >
        <span>{{ event.title }}</span>

        <button
          @click="removeEvent(event.id)"
          class="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>