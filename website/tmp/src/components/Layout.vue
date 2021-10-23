<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import { computed, defineProps } from 'vue'

import ExternalLink from '../components/ExternalLink.vue'
import Header from '../components/HeaderSmall.vue'
import Link from '../components/Link.vue'

const props = defineProps(['frontmatter'])
useHead({
  ...props.frontmatter,
  title: computed(() =>
    props.frontmatter?.title
      ? `${props.frontmatter.title} — TheseMetrics`
      : 'TheseMetrics',
  ),
})
</script>

<template>
  <div class="bg-white w-full">
    <div class="max-w-6xl mx-auto px-4">
      <slot name="header">
        <Header />
      </slot>
      <slot></slot>

      <footer class="my-12">
        <div class="flex flex-row flex-wrap">
          <div class="w-full md:w-1/2 md:mb-0">
            <nav class="md:border-l border-gray-200 pl-4 pt-2">
              <header>
                <RouterLink
                  to="/"
                  class="font-display text-2xl font-black flex flex-row items-center cursor-pointer"
                >
                  <img
                    src="/logo.svg"
                    alt="TheseMetrics"
                    class="inline-block h-8 w-8 mr-4 rounded-full"
                  />
                  <span>TheseMetrics</span>
                </RouterLink>
              </header>

              <ul class="pt-1 flex flex-row md:block">
                <li class="my-4 w-1/2">
                  <ExternalLink href="https://twitter.com/@TheseMetrics"
                    >Twitter</ExternalLink
                  >
                </li>
                <li class="my-4 w-1/2 ml-4 md:ml-0">
                  <ExternalLink href="mailto:hey@thesemetrics.org"
                    >Contact</ExternalLink
                  >
                </li>
                <li class="mt-4 hidden md:block">
                  <span class="text-gray-400"
                    >&copy; 2020-{{
                      new Date().getFullYear()
                    }}
                    TheseMetrics</span
                  >
                </li>
              </ul>
            </nav>
          </div>

          <div class="w-1/2 md:w-1/4">
            <nav class="md:border-l border-gray-200 pl-4 pt-2">
              <header class="font-display font-black text-xl">Product</header>

              <ul>
                <li class="my-4">
                  <RouterLink to="/docs">Documentation</RouterLink>
                </li>

                <li class="my-4">
                  <RouterLink to="/pricing">Pricing</RouterLink>
                </li>

                <li class="my-4">
                  <a
                    href="https://app.thesemetrics.org/dashboard/thesemetrics.org"
                    >Live Demo</a
                  >
                </li>
              </ul>
            </nav>
          </div>

          <div class="w-1/2 md:w-1/4">
            <nav class="md:border-l border-gray-200 pl-4 pt-2">
              <header class="font-display font-black text-xl">Privacy</header>

              <ul>
                <li class="my-4">
                  <RouterLink to="/privacy">Privacy Policy</RouterLink>
                </li>

                <li class="my-4">
                  <RouterLink to="/what-we-collect">What we collect</RouterLink>
                </li>

                <li class="my-4">
                  <RouterLink to="/terms">Terms of use</RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          class="md:hidden text-gray-600 text-sm text-left mt-4 ml-4 md:ml-0"
        >
          &copy; 2020-{{ new Date().getFullYear() }} TheseMetrics
        </div>
      </footer>
    </div>
  </div>
</template>
