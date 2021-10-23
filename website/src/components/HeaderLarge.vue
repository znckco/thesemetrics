<script lang="ts">
import { defineComponent } from 'vue'
import SecondaryButton from '../components/SecondaryButton.vue'

export default defineComponent({
  props: ['title', 'description'],
  components: { SecondaryButton },
})
</script>

<template>
  <header class="flex flex-row justify-between items-center mt-6">
    <RouterLink
      to="/"
      class="font-display text-2xl font-black flex flex-row items-center cursor-pointer"
    >
      <img
        src="/logo.svg"
        alt="TheseMetrics"
        class="inline-block h-6 w-6 mr-4 rounded-full"
      />
      <span>TheseMetrics</span>
    </RouterLink>

    <div>
      <a
        href="https://app.thesemetrics.org/"
        class="rounded-md bg-primary-100 text-primary-600 text-xl py-2 px-2 md:px-6 font-display font-black cursor-pointer hover:text-primary-900 focus:shadow-outline inline-block"
      >
        <span class="md:hidden"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.13636 2.85597C8.87409 2.59755 8.45199 2.60068 8.19357 2.86295C7.93516 3.12522 7.93829 3.54732 8.20056 3.80573L11.7808 7.33333H2.66667C2.29848 7.33333 2 7.63181 2 8C2 8.36819 2.29848 8.66667 2.66667 8.66667H11.7764L8.20056 12.1899C7.93829 12.4483 7.93516 12.8704 8.19357 13.1327C8.45199 13.395 8.87409 13.3981 9.13636 13.1397L13.7525 8.59143C14.0838 8.26503 14.0838 7.73063 13.7525 7.40423L9.13636 2.85597Z"
              fill="#EB5757"
            />
          </svg>
        </span>
        <span class="hidden md:inline-block -mb-1">Login</span>
      </a>
    </div>
  </header>
</template>
