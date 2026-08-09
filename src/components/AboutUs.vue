<script setup>
import { ref, onMounted, onUnmounted } from "vue"

import church1 from "../assets/church image 1 (1).jpg"
import church2 from "../assets/church image 2.jpg"
import church3 from "../assets/praise worship.jpg"
import pastor from "../assets/Pastor Olaiya 2.jpg"
import logo from "../assets/cac logo.png"

const slides = [
  {
    image: church1,
    verse: "Come unto me, all ye that labour and are heavy laden...",
    reference: "Matthew 11:28"
  },
  {
    image: church2,
    verse: "I was glad when they said unto me, Let us go into the house of the Lord.",
    reference: "Psalm 122:1"
  },
  {
    image: church3,
    verse: "They that wait upon the Lord shall renew their strength.",
    reference: "Isaiah 40:31"
  }
]

const current = ref(0)

let interval

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const scrollToAbout = () => {
  document.getElementById("about")?.scrollIntoView({
    behavior: "smooth"
  })
}
</script>

<template>
  <!-- HERO -->
  <section class="relative h-screen overflow-hidden">

    <img
      :src="slides[current].image"
      :alt="'Church image ' + (current + 1)"
      class="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
    />

    <div
      class="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-black/60"
    ></div>

    <div class="relative z-10 h-full flex items-center">

      <div class="container mx-auto px-6">

        <div class="max-w-3xl" data-aos="fade-right">

          <img
            :src="logo"
            class="w-28 mb-6"
          />

          <p class="uppercase tracking-[6px] text-blue-200">
            About Our Church
          </p>

          <h1 class="text-6xl font-black text-white mt-3">
            Christ Apostolic Church
          </h1>

          <h2 class="text-4xl font-bold text-yellow-400 mt-2">
            OKE-IBUKUN
          </h2>

          <p class="text-xl text-gray-200 mt-6 leading-relaxed">
            A Christ-centered family committed to raising disciples,
            proclaiming the Gospel, and transforming lives through
            prayer, holiness, and the power of God's Word.
          </p>

          <div class="mt-8 border-l-4 border-yellow-400 pl-5">

            <p class="italic text-xl text-white">
              "{{ slides[current].verse }}"
            </p>

            <p class="text-yellow-300 mt-2">
              {{ slides[current].reference }}
            </p>

          </div>

          <button
            @click="scrollToAbout"
            class="mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl transition"
          >
            Learn More
          </button>

        </div>

      </div>

    </div>

  </section>
     <!-- PASTOR'S WELCOME -->
  <section class="py-30 bg-white">

      <div class="max-w-7xl mx-auto px-10 mt-20 mb-10">

        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <!-- Pastor Image -->
          <div
              data-aos="fade-right"
              class="relative flex justify-center lg:justify-start"
            >
            <!-- Decorative Background -->
            <div
                class="absolute -top-6 -left-6 w-full h-full rounded-[2rem] bg-blue-100 -z-10">
             </div>

               <!-- Pastor Image -->
                <img
                    src="../assets/Pastor Olaiya 2.jpg"
                    alt="Pastor S.O. Olaiya"
                    class="w-full max-w-xl h-[650px] object-cover rounded-[2rem] shadow-2xl border-8 border-white">
                    <!-- Floating Badge -->
            <div class="absolute bottom-8 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4">
                  <h4 class="text-lg font-bold text-blue-900">
                      CAC OKE-IBUKUN
                  </h4>
                  <p class="text-sm text-gray-600">
                    A Place of Worship & Transformation
                  </p>
            </div>
          </div>

          <!-- Welcome Message -->
          <div data-aos="fade-left">

            <span class="uppercase tracking-[6px] text-blue-700 font-semibold">
              Pastor's Welcome
            </span>

            <h2 class="text-5xl font-bold text-blue-900 mt-3">
              A Message From Our Pastor
            </h2>

            <div class="w-28 h-1 bg-yellow-500 rounded-full my-6"></div>

              <p class="text-gray-700 leading-8">

                <strong>Grace and peace be unto you in the name of our Lord and
                Saviour Jesus Christ.</strong>

                On behalf of the ministers, workers and the entire family of
                Christ Apostolic Church OKE-IBUKUN, I warmly welcome you to our
                church and to our online home.

                We are grateful to God for directing you here. Whether you are
                visiting for the first time, searching for a place to worship,
                or returning to fellowship with us, know that you are loved,
                valued and warmly received.

                It is our prayer that your visit will bring you closer to God,
                strengthen your faith, and inspire you to experience His power
                in every area of your life.

                At Christ Apostolic Church OKE-IBUKUN, we are committed to
                proclaiming the undiluted Word of God through prayer, worship,
                biblical teaching, evangelism and compassionate service.

                We invite you to worship with us and become part of this growing
                family of believers.

              </p>

            <div class="mt-8">

                <h3 class="text-2xl font-bold text-blue-900">
                  Pastor S.O. Olaiya
                </h3>

                <p class="text-yellow-600 font-semibold">
                  District Coordinating Superintendent
                </p>

              </div>

          </div>

        </div>

      </div>

  </section>
  <!-- CHURCH HISTORY -->
  <section class="py-24 bg-gray-50">

    <div class="max-w-6xl mx-auto px-6">

      <div class="text-center mb-20">

        <p class="uppercase tracking-[6px] text-blue-700">
          Our Journey
        </p>

        <h2 class="text-5xl font-bold text-blue-900 mt-3">
          Church History
        </h2>

        <p class="mt-5 text-gray-600">
          Celebrating God's faithfulness through the years.
        </p>

      </div>

      <div class="relative border-l-4 border-blue-700 ml-6 space-y-14">

        <!-- Timeline Item -->
        <div class="relative pl-10">

          <div class="absolute -left-[18px] w-8 h-8 rounded-full bg-blue-700 border-4 border-white"></div>

          <h3 class="text-2xl font-bold text-blue-900">
            Church Founded
          </h3>

          <span class="text-yellow-600 font-semibold">
            In 1935
          </span>

          <p class="text-gray-600 mt-3">
            Christ Apostolic Church OKE-IBUKUN was established
            through God's divine direction to spread the Gospel
            and serve the Owode Ikirun community through Late Pa Idowu and Late Pa Ojo.
          </p>

        </div>

        <!-- Timeline Item -->
        <div class="relative pl-10">

          <div class="absolute -left-[18px] w-8 h-8 rounded-full bg-blue-700 border-4 border-white"></div>

          <h3 class="text-2xl font-bold text-blue-900">
            Church Expansion
          </h3>

          <span class="text-yellow-600 font-semibold">
            In 2020
          </span>

          <p class="text-gray-600 mt-3">
            The church experienced significant growth through the youth fellowship
            evangelism,group and joint prayer,bible study, prayer revival, and discipleship.
          </p>

        </div>

        <!-- Timeline Item -->
        <div class="relative pl-10">

          <div class="absolute -left-[18px] w-8 h-8 rounded-full bg-blue-700 border-4 border-white"></div>

            <h3 class="text-2xl font-bold text-blue-900">
              Church Planting Mission
            </h3>

            <span class="text-yellow-600 font-semibold">
             In  2026
            </span>

            <p class="text-gray-600 mt-3">
              In March 2026, God enabled the church to establish mission outreaches
              and church planting efforts across nearby communities which planted the new three churches.
            </p>

        </div>

        <!-- Timeline Item -->
        <div class="relative pl-10">

            <div class="absolute -left-[18px] w-8 h-8 rounded-full bg-blue-700 border-4 border-white"></div>

            <h3 class="text-2xl font-bold text-blue-900">
              Today
            </h3>

            <span class="text-yellow-600 font-semibold">
              Presently
            </span>

            <p class="text-gray-600 mt-3">
              We continue to raise disciples, proclaim the Gospel,
              and transform lives through the power of the Holy Spirit.
            </p>

        </div>

      </div>

    </div>

  </section>

    <!-- ABOUT CONTENT -->
    <section id="about"
      class="py-24 bg-white"
    >

      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">

          <h2 class="text-5xl font-bold text-blue-900">
            Who We Are
          </h2>

          <p class="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Christ Apostolic Church OKE-IBUKUN exists to proclaim the Gospel of Jesus Christ,
            nurture believers in faith, and demonstrate God's love through worship,
            prayer, evangelism, and compassionate service.
          </p>

        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition">

            <div class="text-5xl mb-4">
              🎯
            </div>

              <h3 class="text-2xl font-bold text-blue-900">
                Our Mission
              </h3>

              <p class="mt-4 text-gray-600">
                To spread the Gospel of Jesus Christ and make disciples of all nations.
              </p>

          </div>

          <div class="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition">

                <div class="text-5xl mb-4">
                  👁️
                </div>

                  <h3 class="text-2xl font-bold text-blue-900">
                    Our Vision
                  </h3>

                  <p class="mt-4 text-gray-600">
                    Raising believers who are deeply rooted in God's Word and empowered by the Holy Spirit.
                  </p>

          </div>

          <div class="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition">

              <div class="text-5xl mb-4">
                ❤️
              </div>

                <h3 class="text-2xl font-bold text-blue-900">
                  Our Values
                </h3>

                <p class="mt-4 text-gray-600">
                  Faith, Prayer, Holiness, Love, Service, Evangelism, and Integrity.
                </p>

          </div>

        </div>

      </div>

    </section>

</template>