<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({})

const submitForm = () => {
  errors.value = {}

  if (!form.value.name) {
    errors.value.name = 'Name required'
  }

  if (!form.value.email) {
    errors.value.email = 'Email required'
  }

  if (!form.value.message) {
    errors.value.message = 'Message required'
  }

  if (Object.keys(errors.value).length === 0) {
    alert('Message sent successfully')

    form.value = {
      name: '',
      email: '',
      message: ''
    }
  }
}
</script>

<template>
  <section class="py-16 md:py-24 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h2 class="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-14">
        Contact Us
      </h2>

      <div class="grid lg:grid-cols-2 gap-12">

        <!-- LEFT COLUMN -->
        <div class="bg-white rounded-2xl shadow-lg p-8">

          <h3 class="text-2xl font-bold text-blue-900 mb-6">
            Send Us a Message
          </h3>

          <div class="space-y-5">

            <div>
              <input
                v-model="form.name"
                type="text"
                placeholder="Full Name"
                class="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-700 outline-none"
              />
              <p
                v-if="errors.name"
                class="text-red-500 text-sm mt-1"
              >
                {{ errors.name }}
              </p>
            </div>

            <div>
              <input
                v-model="form.email"
                type="email"
                placeholder="Email Address"
                class="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-700 outline-none"
              />
              <p
                v-if="errors.email"
                class="text-red-500 text-sm mt-1"
              >
                {{ errors.email }}
              </p>
            </div>

            <div>
              <textarea
                v-model="form.message"
                rows="6"
                placeholder="Your Message"
                class="w-full border rounded-lg p-4 resize-none focus:ring-2 focus:ring-blue-700 outline-none"
              ></textarea>
              <p
                v-if="errors.message"
                class="text-red-500 text-sm mt-1"
              >
                {{ errors.message }}
              </p>
            </div>

            <button
              @click="submitForm"
              class="w-full bg-blue-900 hover:bg-blue-800 transition text-white py-4 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </div>

        </div>

        <!-- RIGHT COLUMN -->
        <div class="bg-blue-900 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">

          <div>

            <h3 class="text-2xl font-bold mb-8">
              Church Information
            </h3>

            <div class="space-y-6">

              <div class="flex items-start gap-4">
                <div class="text-3xl">📍</div>
                <div>
                  <h4 class="font-semibold">Address</h4>
                  <p class="text-blue-100">
                    CAC Oke-Ibukun,<br>
                    Owode, Ikirun,<br>
                    Osun State, Nigeria.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="text-3xl">📞</div>
                <div>
                  <h4 class="font-semibold">Phone</h4>
                  <p class="text-blue-100">
                    +234 7039422971
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="text-3xl">✉️</div>
                <div>
                  <h4 class="font-semibold">Email</h4>
                  <p class="text-blue-100">
                    info@cacokeibukunmob49@gmail.com
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="text-3xl">⏰</div>
                <div>
                  <h4 class="font-semibold">Service Times</h4>

                  <ul class="space-y-2 text-blue-100 mt-2">
                    <li>Sunday Worship – 7:00 AM</li>
                    <li>Bible Study – Tuesday 5:00 PM</li>
                    <li>Prayer Meeting – Thursday 5:00 PM</li>
                    <li>Choir Rehearsal – Saturday 4:00 PM</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

          <!-- SOCIALS -->
          <div class="mt-10">

            <h4 class="font-semibold mb-4">
              Follow Us
            </h4>

            <div class="flex gap-5 text-3xl">

              <a
                href="#"
                class="hover:scale-110 transition"
              >
                📘
              </a>

              <a
                href="#"
                class="hover:scale-110 transition"
              >
                ▶️
              </a>

              <a
                href="#"
                class="hover:scale-110 transition"
              >
                📷
              </a>

              <a
                href="#"
                class="hover:scale-110 transition"
              >
                🎵
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
