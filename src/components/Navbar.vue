<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const menus = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Donate", path: "/donate" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
  { name: "Location", path: "/location" },
  { name: "Sermons", path: "/sermons" },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script><template>
  <nav class="bg-white shadow-md sticky top-0 z-50">

    <div class="max-w-7xl mx-auto px-6">

      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <RouterLink
          to="/"
          class="text-2xl font-extrabold text-blue-900"
        >
          OKE-IBUKUN
        </RouterLink>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex items-center gap-8">

            <li
              v-for="menu in menus"
              :key="menu.path"
            >
              <RouterLink
                :to="menu.path"
                class="font-medium text-gray-700 hover:text-blue-700 transition"
                active-class="text-blue-700 font-bold border-b-2 border-blue-700"
              >
                {{ menu.name }}
              </RouterLink>
            </li>

        </ul>

        <!-- Mobile Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden text-blue-900"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >

            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />

            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />

          </svg>

        </button>

      </div>

    </div>

    <!-- Mobile Menu -->

    <transition
      enter-active-class="transition duration-300 ease-out"
      leave-active-class="transition duration-300 ease-in"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >

      <div
        v-if="isOpen"
        class="lg:hidden bg-white shadow-lg"
      >

        <ul class="flex flex-col py-4">

          <li
            v-for="menu in menus"
            :key="menu.path"
          >

            <RouterLink
              :to="menu.path"
              @click="isOpen = false"
              class="block px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              active-class="bg-blue-50 text-blue-700 font-bold"
            >
              {{ menu.name }}
            </RouterLink>

          </li>

        </ul>

      </div>

    </transition>

  </nav>
</template>