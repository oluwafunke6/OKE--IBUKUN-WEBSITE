<template>
  <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-sky-700 flex items-center justify-center px-6">
        <!-- Background Blur -->
        <div
        class="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
        ></div>

        <div
        class="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse"
        ></div>

        <!-- Floating Circles -->
        <div
        class="absolute top-20 right-20 w-6 h-6 rounded-full bg-white/40 animate-bounce"
        ></div>

        <div
        class="absolute bottom-32 left-24 w-4 h-4 rounded-full bg-cyan-300 animate-ping"
        ></div>

        <!-- Content -->
        <div
            class="relative z-10 text-center max-w-3xl"
            data-aos="zoom-in"
            >
            <!-- Logo
            <img
                src="cac logo.png"
"
                alt="cac Logo"
                class="w-24 h-24 mx-auto mb-6"
            /> -->

            <!-- Error Number -->
            <h1
                class="text-8xl md:text-[180px] font-extrabold text-white tracking-wider drop-shadow-lg"
            >
                404
            </h1>

            <h2
                class="text-3xl md:text-5xl font-bold text-white mt-4"
            >
                Page Not Found
            </h2>

            <p
                class="text-blue-100 mt-6 text-lg leading-relaxed"
            >
                Oops! The page you're looking for doesn't exist,
                has been moved, or the link may be incorrect.

                <br /><br />

                But don't worry—you can always return home and continue exploring
                CAC Oke-Ibukun.
            </p>

            <!-- Scripture -->
            <div
                class="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20"
            >
                <p class="italic text-blue-100">
                "Trust in the Lord with all your heart and lean not on your own understanding."
                </p>

                <p class="mt-2 font-semibold text-white">
                Proverbs 3:5
                </p>
            </div>

            <!-- Buttons -->
            <div
                class="mt-10 flex flex-col sm:flex-row justify-center gap-5"
            >
                <RouterLink
                to="/"
                class="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-200 transition duration-300 shadow-lg"
                >
                ⬅ Back Home
                </RouterLink>

                <RouterLink
                to="/contact"
                class="border border-white px-8 py-4 rounded-full text-white hover:bg-white hover:text-blue-900 transition duration-300"
                >
                Contact Us
                </RouterLink>
            </div>
        </div>
  </section>
</template>

<script setup>
    import { RouterLink } from "vue-router";
    import logo from "../assets/cac logo.png"

</script>