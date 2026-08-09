<template>
  <footer class="bg-blue-950 text-white py-12">

    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">

        <!-- Church Info -->
        <div>
          <h3 class="text-2xl font-bold">
            CAC Oke-Ibukun
          </h3>

          <p class="mt-4 text-gray-300 leading-7">
            Building lives through faith, prayer, worship, and the Word of God.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold">
            Quick Links
          </h3>

          <ul class="mt-4 space-y-3">

            <li>
              <RouterLink
                to="/"
                class="hover:text-yellow-400 transition"
              >
                Home
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/about"
                class="hover:text-yellow-400 transition"
              >
                About
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/events"
                class="hover:text-yellow-400 transition"
              >
                Events
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/donate"
                class="hover:text-yellow-400 transition"
              >
                Donate
              </RouterLink>
            </li>

          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xl font-bold">
            Contact
          </h3>

          <div class="mt-4 space-y-3 text-gray-300">

            <p>
              📧 info@cacokeibukunmob49@gmail.com
            </p>

            <p>
              📞 +234 7039422971
            </p>

            <p>
              📍 Owode, Ikirun, Osun State, Nigeria
            </p>

          </div>

        </div>

      </div>

      <!-- Bottom -->
      <div class="mt-10 border-t border-blue-700 pt-6">

        <p class="text-center text-sm sm:text-base text-gray-300">
          © 2026 CAC Oke-Ibukun. All Rights Reserved.
        </p>

      </div>

    </div>

  </footer>
</template>