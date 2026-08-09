<script setup>
import { ref } from 'vue'

import image1 from '../assets/worship 1.jpg'
import image2 from '../assets/OUTREACH 1.jpg'
import image3 from '../assets/choir ministration.jpg'
import image4 from '../assets/EVANGELISM.jpg'
import image5 from '../assets/AGOORO 4.jpg'
import image6 from '../assets/EVANGELIST.jpg'

const gallery = [
  {
    id: 1,
    image: image1,
    title: 'Worship Service',
    description: 'A powerful time of praise, worship and the Word.'
  },
  {
    id: 2,
    image: image2,
    title: 'Outreach',
    description: 'Empowering the next generation in Christ.'
  },
  {
    id: 3,
    image: image3,
    title: 'Choir Ministration',
    description: 'Lifting hearts through spirit-filled worship.'
  },
  {
    id: 4,
    image: image4,
    title: 'Evangelism',
    description: 'Sharing the love of Christ with our community.'
  },
  {
    id: 5,
    image: image5,
    title: 'Prayer Meeting',
    description: 'Standing together in faith and prayer.'
  },
  {
    id: 6,
    image: image6,
    title: 'Evangelist',
    description: 'Growing together in unity and love.'
  }
]

// Stores the selected gallery item
const selectedItem = ref(null)

// Stores the current gallery index
const currentIndex = ref(0)

// Open lightbox
const openImage = (item) => {
  currentIndex.value = gallery.findIndex(g => g.id === item.id)
  selectedItem.value = item
}

// Close lightbox
const closeImage = () => {
  selectedItem.value = null
}

// Next image
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % gallery.length
  selectedItem.value = gallery[currentIndex.value]
}

// Previous image
const previousImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + gallery.length) % gallery.length

  selectedItem.value = gallery[currentIndex.value]
}
</script>

<template>
  <section class="bg-slate-50 py-20">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Heading -->
      <div class="text-center mb-16">
        <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
          OUR GALLERY
        </span>

        <h2 class="text-4xl md:text-5xl font-bold mt-6 text-slate-800">
          Moments of Faith & Fellowship
        </h2>

        <p class="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
          Explore memorable moments from our worship services, church events,
          outreach programmes, youth fellowship and other activities at
          CAC OKE-IBUKUN.
        </p>
      </div>

      <!-- Gallery -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <div
          v-for="item in gallery"
          :key="item.id"
          class="group relative overflow-hidden rounded-3xl shadow-lg bg-white"
        >
          <img
            :src="item.image"
            :alt="item.title"
            @click="openImage(item)"
            class="w-full h-80 object-cover transition duration-700 group-hover:scale-110 cursor-pointer"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6"
          >
            <h3 class="text-white text-2xl font-bold">
              {{ item.title }}
            </h3>

            <p class="text-gray-200 mt-2">
              {{ item.description }}
            </p>

            <button
              @click="openImage(item)"
              class="mt-5 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl transition"
            >
              View Image
            </button>
          </div>
        </div>

      </div>
      <!-- Gallery -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <!-- Gallery cards -->

      </div>

        <!-- ✅ Church Statistics -->
        <div class="mt-24">

             <h2 class="text-3xl font-bold text-center text-slate-800 mb-12">
               Our Ministry in Numbers
              </h2>

                  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">

                    <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <div class="text-5xl">📸</div>
                            <h3 class="text-4xl font-bold text-blue-700 mt-4">
                                150+
                             </h3>
                                <p class="text-gray-600 mt-2">
                                    Photos
                                 </p>
                     </div>

                   <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                     <div class="text-5xl">🎉</div>
                         <h3 class="text-4xl font-bold text-blue-700 mt-4">
                           40
                         </h3>
                         <p class="text-gray-600 mt-2">
                            Church Events
                         </p>
                     </div>

                    <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div class="text-5xl">👨‍👩‍👧‍👦</div>
                       <h3 class="text-4xl font-bold text-blue-700 mt-4">
                            1000+
                        </h3>
                        <p class="text-gray-600 mt-2">
                           Members Reached
                         </p>
                     </div>

                     <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                      <div class="text-5xl">🙏</div>
                           <h3 class="text-4xl font-bold text-blue-700 mt-4">
                               Countless
                           </h3>
                              <p class="text-gray-600 mt-2">
                               Lives Impacted
                             </p>
                   </div>

                  </div>

             </div>

            <!-- Lightbox -->
           <div
             v-if="selectedItem"
             class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
             @click="closeImage"
            >
           <div
               class="max-w-5xl w-full px-6"
               @click.stop
          >
         <img
           :src="selectedItem.image"
           :alt="selectedItem.title"
            class="w-full max-h-[80vh] object-contain rounded-xl"
         />

     <div class="bg-white rounded-b-xl p-6">

          <h3 class="text-3xl font-bold">
               {{ selectedItem.title }}
         </h3>

             <p class="text-gray-600 mt-2">
               {{ selectedItem.description }}
             </p>

      <div class="flex justify-between items-center mt-6">

        <button
          @click="previousImage"
          class="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg"
        >
          ← Previous
        </button>

        <span class="text-gray-500">
          {{ currentIndex + 1 }} / {{ gallery.length }}
        </span>

        <button
          @click="nextImage"
          class="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
        >
          Next →
        </button>

      </div>

    </div>
  </div>

  <button
    @click="closeImage"
    class="absolute top-6 right-8 text-white text-5xl hover:text-gray-300"
  >
    &times;
  </button>
</div>

    </div>
  </section>
</template>