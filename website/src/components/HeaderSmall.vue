<script lang="ts">
import { defineComponent } from 'vue';
import SecondaryButton from '../components/SecondaryButton.vue';

export default defineComponent({
  props: ['title', 'description'],
  components: { SecondaryButton },
});
</script>

<template>
  <header class="flex flex-row justify-between items-center mt-6">
    <div class="flex-1">
      <RouterLink
        to="/"
        class="font-display text-sm font-black flex flex-row items-center cursor-pointer px-6 p-4 text-gray-700 hover:text-black"
      >
        <svg class="w-4 h-4 mr-2" viewBox="0 0 16 16">
          <path
            d="M6.86361 13.144C7.12588 13.4024 7.54798 13.3993 7.80639 13.137C8.06481 12.8748 8.06168 12.4527 7.79941 12.1943L4.21917 8.66666H13.3333C13.7015 8.66666 14 8.36818 14 7.99999C14 7.6318 13.7015 7.33333 13.3333 7.33333H4.22358L7.79941 3.81007C8.06168 3.55165 8.06481 3.12955 7.80639 2.86728C7.54798 2.60501 7.12588 2.60189 6.86361 2.8603L2.24748 7.40856C1.9162 7.73497 1.9162 8.26936 2.24748 8.59577L6.86361 13.144Z"
            fill="currenColor"
          />
        </svg>
        <span class="inline-block -mb-px">Back</span>
      </RouterLink>
    </div>

    <div class="flex-1 flex justify-center">
      <RouterLink to="/" class="font-display text-3xl font-black flex flex-row items-center cursor-pointer">
        <img src="/logo.svg" alt="TheseMetrics" class="inline-block rounded-full h-6 w-6" />
      </RouterLink>
    </div>

    <div class="flex-1 text-right">
      <a
        href="https://app.thesemetrics.org/"
        class="border-2 border-primary-600 rounded-md text-primary-600 py-1 px-2 md:px-6 font-display font-black cursor-pointer hover:text-primary-900 hover:border-primary-900 focus:shadow-outline inline-block"
      >
        <span class="md:hidden"
          ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.13636 2.85597C8.87409 2.59755 8.45199 2.60068 8.19357 2.86295C7.93516 3.12522 7.93829 3.54732 8.20056 3.80573L11.7808 7.33333H2.66667C2.29848 7.33333 2 7.63181 2 8C2 8.36819 2.29848 8.66667 2.66667 8.66667H11.7764L8.20056 12.1899C7.93829 12.4483 7.93516 12.8704 8.19357 13.1327C8.45199 13.395 8.87409 13.3981 9.13636 13.1397L13.7525 8.59143C14.0838 8.26503 14.0838 7.73063 13.7525 7.40423L9.13636 2.85597Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span class="hidden md:inline-block -mb-px">Get started for free</span>
      </a>
    </div>
  </header>
</template>
