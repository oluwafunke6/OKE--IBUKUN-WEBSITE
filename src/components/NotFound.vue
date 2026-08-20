<template>
  <section
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-sky-700 flex items-center justify-center px-6"
  >
    <!-- Background Blur -->
    <div
      class="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse"
    ></div>

    <!-- Floating Circles -->
    <div
      class="absolute top-20 right-20 w-6 h-6 rounded-full bg-yellow-300/50 animate-bounce"
    ></div>

    <div
      class="absolute bottom-32 left-24 w-4 h-4 rounded-full bg-cyan-300 animate-ping"
    ></div>

    <div
      class="absolute top-1/2 left-10 w-3 h-3 rounded-full bg-yellow-400/60 animate-pulse"
    ></div>

    <!-- Main Content -->
    <div
      class="relative z-10 text-center max-w-4xl"
      data-aos="zoom-in"
    >

      <!-- CAC LOGO -->
      <div class="mb-6 flex justify-center">
        <div
          class="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/95 backdrop-blur-sm
                 p-3 shadow-2xl border-4 border-yellow-400
                 animate-logo"
        >
          <img
            :src="logo"
            alt="CAC Oke-Ibukun Logo"
            class="w-full h-full object-contain"
          />
        </div>
      </div>

      <!-- 404 NUMBER -->
      <div class="relative flex justify-center">
        <h1
          class="text-8xl md:text-[180px] leading-none font-extrabold
                 text-yellow-400 tracking-wider
                 drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]
                 animate-float"
        >
          404
        </h1>
      </div>

      <!-- PAGE NOT FOUND -->
      <h2
        class="text-3xl md:text-5xl font-bold text-white mt-6"
      >
        Page Not Found
      </h2>

      <p
        class="text-blue-100 mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
      >
        Oops! The page you're looking for doesn't exist,
        has been moved, or the link may be incorrect.

        <br /><br />

        But don't worry—you can always return home and continue exploring
        <span class="font-bold text-yellow-300">
          CAC Oke-Ibukun.
        </span>
      </p>

      <!-- Scripture -->
      <div
        class="mt-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-md
               rounded-2xl p-6 border border-white/20 shadow-xl"
      >
        <p class="italic text-blue-100 text-lg">
          "Trust in the Lord with all your heart and lean not on your own understanding."
        </p>

        <p class="mt-3 font-bold text-yellow-300">
          Proverbs 3:5
        </p>
      </div>

      <!-- Buttons -->
      <div
        class="mt-10 flex flex-col sm:flex-row justify-center gap-5"
      >
        <RouterLink
          to="/"
          class="bg-yellow-400 text-blue-950 px-8 py-4 rounded-full
                 font-bold hover:bg-yellow-300 hover:scale-105
                 transition duration-300 shadow-lg"
        >
          ⬅ Back Home
        </RouterLink>

        <RouterLink
          to="/contact"
          class="border-2 border-white px-8 py-4 rounded-full
                 text-white font-semibold
                 hover:bg-white hover:text-blue-900
                 hover:scale-105 transition duration-300"
        >
          Contact Us
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import logo from "../assets/cac logo.png";
</script>

<style scoped>
/* 404 floating animation */
@keyframes float404 {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-18px);
  }
}

.animate-float {
  animation: float404 3s ease-in-out infinite;
}

/* Logo gentle floating animation */
@keyframes logoFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-8px) rotate(2deg);
  }
}

.animate-logo {
  animation: logoFloat 4s ease-in-out infinite;
}
</style>