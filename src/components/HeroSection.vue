<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { RouterLink } from 'vue-router'
import { PlayCircle, ChevronDown } from "lucide-vue-next"

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
      },5000)
      })

      onUnmounted(()=>{
      clearInterval(interval)
      })

      const scrollToAbout=()=>{
      document.getElementById("about")
      ?.scrollIntoView({
      behavior:"smooth"
      })
   }
</script>
<template>

   <section class="relative min-h-screen overflow-hidden pt-4 pb-10 lg:pt-8 lg:pb-12">
      <img
         :src="slides[current].image"
         class="absolute inset-0 h-full w-full object-cover duration-1000 transition-all"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-black/60"></div>

       <div class="relative z-20 min-h-screen flex items-center">
            <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

               <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        <!-- LEFT SIDE -->
                        <div
                           class="max-w-2xl lg:-translate-y-14"
                           data-aos="fade-right">
                           <img
                                 :src="logo"
                                 class="w-20 sm:w-24 lg:w-28 mb-6 drop-shadow-2xl"
                           />

                           <p class="uppercase tracking-[8px] text-blue-200 mb-3">
                                 Welcome To
                           </p>

                           <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                                 Christ Apostolic Church
                           </h1>

                           <h2 class="text-2xl sm:text-3xl lg:text-4xl text-yellow-400 font-bold mt-2">
                                 OKE-IBUKUN
                           </h2>

                           <p class="text-lg sm:text-xl lg:text-2xl text-gray-200 mt-6">
                                 Raising Disciples for Christ
                           </p>

                           <div class="mt-8 border-l-4 border-yellow-400 pl-5">

                                 <p class="italic text-base sm:text-lg lg:text-xl text-gray-100">
                                    "{{ slides[current].verse }}"
                                 </p>

                                 <p class="text-yellow-300 mt-3">
                                    {{ slides[current].reference }}
                                 </p>

                           </div>

                           <div class="flex flex-col sm:flex-row gap-4 mt-10">

                                 <RouterLink
                                    to="/Contact"
                                    class="w-full sm:w-auto bg-blue-700 px-8 py-4 rounded-xl text-white text-center hover:bg-blue-800 transition"
                                 >
                                    Join Us
                                 </RouterLink>
                                 <button
                                    class="w-full sm:w-auto border border-white px-10 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition"
                                 >
                                    Watch Sermons
                                 </button>

                           </div>

                        </div>
                        <!-- RIGHT -->
                        <div
                           class="backdrop-blur-xl bg-white/10 rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl"
                           data-aos="fade-left">
                           <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">

                              <img
                                 :src="pastor"
                                 class="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-yellow-400 object-cover" />
                                 <div>

                                    <h2 class="text-2xl sm:text-3xl font-bold text-white">
                                    Pastor's Welcome
                                    </h2>

                                    <p class="text-yellow-300">
                                    Pastor S.O. Olaiya
                                 
                                    IDCC Pastor
                                    </p>

                                 </div>

                           </div>

                                 <p class="text-gray-200 text-sm sm:text-base mt-6 leading-7 sm:leading-8">


                                 <b> Grace and peace be unto you in the name of our Lord and Saviour, Jesus Christ.</b>
                                    On behalf of the ministers, workers, and the entire family of Christ Apostolic Church OKE-IBUKUN, I warmly welcome you to our church and to our online home. We are deeply grateful to God for leading you here. Whether you are visiting for the first time, searching for a place to worship, or returning to fellowship with us, know that you are loved, valued, and warmly received. It is our prayer that your visit will bring you closer to God and strengthen your faith in Jesus Christ. At Christ Apostolic Church OKE-IBUKUN, we are committed to proclaiming the undiluted Word of God, nurturing believers through fervent prayer, heartfelt worship, sound biblical teaching, and compassionate service. Our desire is to see lives transformed, families restored, and communities impacted by the power of the Holy Spirit. No matter where you are on your spiritual journey, there is a place for you here. We invite you to join us in our worship services, prayer meetings, Bible studies, and outreach programs as we grow together in the knowledge and grace of our Lord Jesus Christ. As you explore our website, we pray you will find encouragement, inspiration, and opportunities to connect with our church family. May the Lord richly bless you, guide your steps, and fill your heart with His perfect peace. We look forward to welcoming you personally to one of our services. May the grace of our Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit be with you always. Amen. 
                                    With heartfelt gratitude and Christian love, we say you are loved and welcome to the Apostolic family.
                                 </p>

                              <div
                                 class="mt-6 bg-red-600 rounded-full px-4 py-3 inline-flex items-center gap-2 animate-pulse text-sm sm:text-base" >
                                 <PlayCircle class="w-5 h-5"/>

                                 LIVE SERVICE

                              </div>

                           <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                              <div class="bg-white/10 rounded-xl p-4 sm:p-5">

                                 <h3 class="font-bold text-yellow-300">
                                 Sunday Worship
                                 </h3>

                                 <p class="text-white mt-2">
                                 7:00 AM
                                 </p>

                              </div>

                              <div class="bg-white/10 rounded-xl p-5">

                                 <h3 class="font-bold text-yellow-300">
                                 Bible Study
                                 </h3>

                                 <p class="text-white mt-2">
                                 Tuesday
                                 5:00 PM - 7:00 PM
                                 </p>

                              </div>

                              <div class="bg-white/10 rounded-xl p-5">

                                 <h3 class="font-bold text-yellow-300">
                                 Prayer Meeting
                                 </h3>

                                 <p class="text-white mt-2">
                                 Wednesday
                                 12:00 PM
                                 </p>

                              </div>

                              <div class="bg-white/10 rounded-xl p-5">

                                 <h3 class="font-bold text-yellow-300">
                                 Night Vigil
                                 </h3>

                                 <p class="text-white mt-2">
                                 Last Friday
                                 12 PM
                                 </p>

                              </div>

                        </div>

                     </div>

                  </div>

               </div>

            </div>

         <div
         class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
         >

         <ChevronDown class="text-white w-8 h-8 sm:w-10 sm:h-10"/>

      </div>

   </section>
   <section class="relative overflow-hidden bg-gradient-to-r from-yellow-950 via-blue-900 to-blue-800 py-20">

         <!-- Decorative circles -->
         <div class="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
         <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

         <div
            class="relative max-w-6xl mx-auto px-6 lg:px-10"
            data-aos="zoom-in" >
        

            <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 lg:p-14 shadow-2xl text-center">
                  <span class="inline-block bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                     Support God's Work
                  </span>

                     <h2
                     class="text-4xl md:text-5xl font-extrabold text-white mt-6"
                     >
                        Every Gift Makes a Difference
                        </h2>

                     <p
                     class="text-gray-200 max-w-3xl mx-auto mt-6 text-lg leading-8"
                     >
                        Your generous giving helps us spread the Gospel, support church
                        outreaches, care for families in need, and expand God's Kingdom.
                        Thank you for partnering with Christ Apostolic Church OKE-IBUKUN.
                     </p>

                     <div class="mt-10 flex flex-col sm:flex-row justify-center gap-5">

                        <RouterLink
                           to="/donate"
                           class="bg-yellow-400 text-blue-950 font-bold px-10 py-5 rounded-xl shadow-xl hover:bg-yellow-300 hover:scale-105 transition duration-300"
                        >
                           ❤️ Donate Now
                        </RouterLink>

                        <RouterLink
                           to="/Contact"
                           class="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-blue-900 transition duration-300"
                        >
                           Visit Our Church
                        </RouterLink>
          
                     </div>
            </div>
         </div>   
   </section>

</template>
