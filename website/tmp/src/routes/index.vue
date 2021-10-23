<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { frameworks } from '../instructions'
import Layout from '../components/Layout.vue'
import LoginForm from '../components/LoginForm.vue'
import Header from '../components/HeaderLarge.vue'

const active = ref('HTML')
const instructions = computed(() => {
  const title = active.value

  return frameworks.find((framework) => framework.title === title)?.instructions
})
const domain = ref('')
const router = useRouter()
function onSubmit() {
  router.push({
    name: 'dashboard',
    params: {
      domain: domain.value.replace(/^https?:\/\/|\/$/gi, ''),
    },
  })
}
</script>

<template>
  <Layout>
    <template #header>
      <Header />
    </template>

    <template #default>
      <main class="mb-4 mt-16">
        <section class="flex flex-col md:flex-row gap-6 md:gap-14 px-4 py-6">
          <section class="w-full flex-shrink-0 md:w-1/2 md:order-2">
            <h1
              class="font-display font-bold text-left text-4xl md:text-5xl leading-tight"
            >
              <span>Simpler</span><br />
              <span>Affordable</span><br />
              <span>Privacy focused</span><br />
              <span class="font-black text-6xl md:text-7xl">Analytics</span>
            </h1>

            <div class="mt-6">
              <a
                class="bg-primary-600 text-white rounded-lg px-6 py-2 whitespace-pre mr-4 mb-4 inline-block"
                href="https://app.thesemetrics.org"
                >Get started for free</a
              >
              <a
                class="bg-gray-200 text-black rounded-lg px-6 py-2 whitespace-pre inline-block"
                href="https://app.thesemetrics.org/dashboard/thesemetrics.org"
                >View Live Demo</a
              >
            </div>
          </section>

          <section class="w-full flex-shrink-0 md:w-1/2">
            <div class="bg-black rounded-2xl overflow-auto h-60 mt-4 w-full">
              <pre
                class="whitespace-pre m-4 font-mono font-light text-left text-white"
              ><code>{{ instructions }}</code></pre>
            </div>
            <ul
              class="flex flex-row justify-around md:justify-center flex-wrap mt-4"
            >
              <li
                v-for="framework of frameworks"
                class="px-4 py-1 mx-2 font-semibold text-sm cursor-pointer"
                :class="{
                  'rounded-2xl text-primary-600 bg-primary-100':
                    framework.title === active,
                  'rounded-2xl text-gray-600 hover:bg-gray-200':
                    framework.title !== active,
                }"
                :key="framework.title"
                @click="active = framework.title"
              >
                {{ framework.title }}
              </li>
            </ul>
          </section>
        </section>

        <section class="md:mt-16 bg-gray-200 rounded-lg p-4 md:p-14 md:pb-8">
          <h2 class="text-3xl md:text-4xl font-bold">Privacy built-in</h2>

          <p class="text-xl mt-2">
            We are focused on privacy for website visitors, we don't track them
            or save their personal information. We do not use cookies (or
            localStorage or fingerprinting or any other privacy-invasive
            technique), so you don't need a cookie notice.
          </p>

          <iframe
            src="https://app.thesemetrics.org/dashboard/thesemetrics.org"
            class="w-full rounded-lg bg-white mt-8"
            style="height: 488px"
            scrolling="no"
          ></iframe>

          <div
            class="bg-gradient-to-t rounded-lg from-gray-900 relative flex flex-col justify-end"
            style="height: 400px; margin-top: -400px"
          >
            <div class="mb-6 px-6 flex flex-col items-start md:flex-row md:justify-between md:items-end">
              <div class="text-white">
                <div class="text-lg font-bold">Simple Dashboard</div>
                <div class="text-gray-50">Your website performance at a glance.</div>
              </div>
              <a
                class="bg-white text-black rounded-lg px-6 py-2 mt-4"
                href="https://app.thesemetrics.org/dashboard/thesemetrics.org"
                >View Live Demo</a
              >
            </div>
          </div>
        </section>

        <section class="my-16 bg-primary-100 rounded-lg px-4 md:px-14 py-6">
          <h2 class="text-3xl md:text-4xl font-bold">
            Single plan; Unlimited websites; Starts $4/month
          </h2>
          <p class="text-xl mt-2">
            All of our pricing plans include unlimited websites. That means you
            can track your company site, weekend project, and personal blog, all
            from the same account.
          </p>
          <div class="mt-6">
            <a
              class="bg-primary-600 text-white rounded-lg px-6 py-2 whitespace-pre mr-4 mb-4 inline-block"
              href="https://app.thesemetrics.org"
              >Get started for free</a
            >
            <a
              class="bg-white text-black rounded-lg px-6 py-2 whitespace-pre inline-block"
              href="https://app.thesemetrics.org/dashboard/thesemetrics.org"
              >View Live Demo</a
            >
          </div>

          <p class="mt-4">
            No accounts. No credit cards. Just drop a link on your website and
            get started.
          </p>
        </section>
      </main>
    </template>
  </Layout>
</template>

<style>
@screen sm {
  .features {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
  }

  .features > *:nth-child(4) {
    grid-row: 1 / 4;
    grid-column: 2 / 3;
  }
}
</style>
