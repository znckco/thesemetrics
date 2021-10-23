<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '../components/Layout.vue'

export default defineComponent({
  components: {
    Layout,
  },
})
</script>

<template>
  <Layout :frontmatter="{ title: 'Pricing' }">
    <main class="mt-20 mb-40 max-w-2xl mx-auto">
      <h1 class="text-lg uppercase font-display font-bold text-gray-400">
        Pricing
      </h1>

      <p class="my-4 text-5xl leading-tight font-bold font-display">
        Discover key insights <span class="font-normal italic">without comprosing you customers' data</span>
      </p>

      <!-- <section class="max-w-2xl mx-auto text-center">
        <p>
          Life is simpler with TheseMetrics. Stop wasting your time with bloated
          dashboards and start focusing on the stats that matter.
        </p>
      </section> -->

      <article
        class="flex flex-row overflow-x-auto mt-16 mx-auto max-w-2xl"
        style="scroll-snap-type: x mandatory"
      >
        <article
          class="border border-gray-300 rounded flex-1 mx-2"
          style="min-width: 235px; scroll-snap-align: center"
        >
          <section class="p-4 text-center border-b border-gray-300">
            <div class="uppercase text-primary-600 text-xs">Starter</div>
            <div class="font-black text-3xl">Free</div>
            <div class="text-gray-600 text-xs">forever</div>
          </section>

          <section class="px-4">
            <ul class="text-gray-800 text-center">
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Page views
                </div>
                <span>&lt; 10k</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Websites
                </div>
                <span>Unlimited</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Dashboard
                </div>
                <span>Private</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Reports
                </div>
                <span>-</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Export data
                </div>
                <span>Yes</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Support
                </div>
                <span>GitHub issues</span>
              </li>
            </ul>
          </section>
        </article>

        <article
          class="border border-gray-300 rounded flex-1 mx-2"
          style="min-width: 235px; scroll-snap-align: center"
        >
          <section class="p-4 text-center border-b border-gray-300">
            <div class="uppercase text-primary-600 text-xs">Pro</div>
            <div class="font-black text-3xl">
              $4 <span class="text-gray-400">/mo</span>
            </div>
            <div class="text-gray-600 text-xs">billed monthly</div>
          </section>

          <section class="px-4">
            <ul class="text-gray-800 text-center">
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Page views
                </div>
                <span>&lt; 50k</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Dashboard
                </div>
                <span>Shareable</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Websites
                </div>
                <span>Unlimited</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Reports
                </div>
                <span>Email, Webhook</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Events
                </div>
                <span>Yes</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Export data
                </div>
                <span>Yes</span>
              </li>
              <li class="my-4">
                <div class="uppercase text-gray-600" style="font-size: 10px">
                  Support
                </div>
                <span>Email support</span>
              </li>
            </ul>
          </section>
        </article>
      </article>
    </main>
  </Layout>
</template>
