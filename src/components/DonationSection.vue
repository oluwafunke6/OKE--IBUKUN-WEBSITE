<script setup>
import { ref } from "vue"
import PaystackPop from "@paystack/inline-js"
import logo from "../assets/cac logo.png"

const email = ref("")
const amount = ref("")

const payWithPaystack = () => {
  const paystack = new PaystackPop()

  paystack.newTransaction({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email: email.value,
    amount: Number(amount.value) ,
    currency: "NGN",

    onSuccess: (transaction) => {
      alert(`Payment Successful: ${transaction.reference}`)
    },

    onCancel: () => {
      alert("Payment Cancelled")
    }
  })
}
</script>
<template>
  <section class="py-16 md:py-24 bg-blue-900">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- LEFT SIDE -->
        <div class="text-white">

          <!-- Church Logo -->
          <img
            src="../assets/cac logo.png"
            alt="CAC Logo"
            class="w-28 h-28 mb-6"
          />

          <h2 class="text-4xl md:text-5xl font-bold leading-tight">
            Support God's Work
          </h2>

          <p class="mt-6 text-lg text-blue-100 italic">
            "Each of you should give what you have decided in your heart to give,
            not reluctantly or under compulsion, for God loves a cheerful giver."
          </p>

          <p class="mt-2 font-semibold">
            — 2 Corinthians 9:7
          </p>

          <p class="mt-8 text-blue-100 leading-8">
            Your generous giving helps support evangelism, church planting,
            community outreach, children's ministry, worship services,
            missions, and ongoing building projects.
            Every donation contributes to spreading the Gospel and impacting lives
            for Christ.
          </p>

          <!-- Church Account -->
          <div class="mt-10 bg-white/10 rounded-xl p-6">

            <h3 class="text-2xl font-bold mb-4">
              Bank Transfer
            </h3>

            <div class="space-y-2 text-blue-100">

              <p>
                <span class="font-semibold text-white">
                  Bank:
                </span>
                First Bank Nigeria
              </p>

              <p>
                <span class="font-semibold text-white">
                  Account Name:
                </span>
                CAC No 1 Oke-Ibukun, Ikirun.
              </p>

              <p>
                <span class="font-semibold text-white">
                  Account Number:
                </span>
                2017223630
              </p>

            </div>

          </div>

        </div>

        <!-- RIGHT SIDE -->
        <div class="bg-white rounded-2xl shadow-xl p-8">

          <h3 class="text-3xl font-bold text-blue-900 text-center">
             Online Donation
          </h3>

          <p class="text-center text-gray-500 mt-3 mb-8">
            Givers never lack, never withold whatever God has place in your heart
          </p>

          <div class="space-y-5">

            <input
              v-model="email"
              type="email"
              placeholder="Email Address"
              class="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-700 outline-none"
            />

            <input
              v-model="amount"
              type="number"
              min="100"
              placeholder="Enter Amount (₦)"
              class="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-700 outline-none"
            />

            <button
              @click="payWithPaystack"
              class="w-full bg-blue-900 hover:bg-blue-800 transition text-white py-4 rounded-lg font-semibold"
            >
              Donate Now
            </button>

          </div>

          <!-- Payment Methods -->
          <div class="mt-8 border-t pt-6">

            <h4 class="font-semibold text-gray-700 mb-3">
              Accepted Payment Methods
            </h4>

            <div class="flex flex-wrap gap-3">

              <span class="bg-gray-100 px-4 py-2 rounded-lg">
                💳 Card
              </span>

              <span class="bg-gray-100 px-4 py-2 rounded-lg">
                🏦 Bank Transfer
              </span>

              <span class="bg-gray-100 px-4 py-2 rounded-lg">
                📱 USSD
              </span>

              <span class="bg-gray-100 px-4 py-2 rounded-lg">
                💰 Mobile Money
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>