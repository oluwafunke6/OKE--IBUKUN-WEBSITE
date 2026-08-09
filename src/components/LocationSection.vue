<script setup>
const churchAddress =
  "CAC Oke-Ibukun, Owode Ikirun, Osun State, Nigeria"
</script>

<template>
  <section class="py-16 px-6 bg-gray-100">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-4">
        Find Us
      </h2>

      <p class="text-center text-gray-600 mb-8">
        Visit us for worship, fellowship, and spiritual growth.
      </p>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Map -->
        <div class="rounded-lg overflow-hidden shadow-lg">
          <iframe
            class="w-full h-[400px]"
            src="https://maps.google.com/maps?q=CAC%20Oke-Ibukun%20Owode%20Ikirun%20Osun%20State&t=&z=17&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowfullscreen>
          </iframe>
        </div>
          

        <!-- Address -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">
            Church Location
          </h3>

          <p class="mb-3">
            📍 {{  }}
          </p>

          <p class="mb-3">
            📞 +234 7039422971
          </p>

          <p class="mb-3">
            ✉️ info@cacokeibukun.org
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=CAC+Oke-Ibukun+Owode+Ikirun+Osun+State"
            target="_blank"
            class="inline-block mt-4 bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  </section>
</template>