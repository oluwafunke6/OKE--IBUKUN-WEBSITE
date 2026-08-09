<script setup>
const sermons = [
  {
    id: 1,
    title: "Walking by Faith",
    preacher: "Evangelist Femi",
    date: "July 13, 2026",
    scripture: "Hebrews 11:1",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600",
  },
  {
    id: 2,
    title: "Unleashing the power of the flesh",
    preacher: "Brother Adeyemi sodiq Paul",
    date: "July 18, 2026",
    scripture: "James 5:16",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600",
  },
  {
    id: 3,
    title: "Living a Holy Life",
    preacher: "Pastor John   Bada",
    date: "June 29, 2026",
    scripture: "1 Peter 1:15-16",
    image: "https://images.unsplash.com/photo-1514894786527-3b3e85f0d2e1?w=600"
  }
]

const watchSermon = (title) => {
  alert(`Opening "${title}" sermon...`)
}
</script>

<template>
  <section class="bg-gray-50 py-20 px-6">
    <div class="max-w-7xl mx-auto">

      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-blue-900">
          Recent Sermons
        </h2>

        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Be encouraged through God's Word. Watch or listen to our latest sermons
          and grow in your faith.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="sermon in sermons"
          :key="sermon.id"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
        >
          <img
            :src="sermon.image"
            :alt="sermon.title"
            class="w-full h-56 object-cover"
          >

          <div class="p-6">

            <h3 class="text-2xl font-bold text-blue-900">
              {{ sermon.title }}
            </h3>

            <p class="text-gray-600 mt-2">
              <strong>Preacher:</strong> {{ sermon.preacher }}
            </p>

            <p class="text-gray-600">
              <strong>Date:</strong> {{ sermon.date }}
            </p>

            <p class="text-gray-600">
              <strong>Scripture:</strong> {{ sermon.scripture }}
            </p>

            <button
              @click="watchSermon(sermon.title)"
              class="mt-6 w-full bg-blue-900 hover:bg-blue-700 text-white py-3 rounded-lg transition"
            >
              Watch Sermon
            </button>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>