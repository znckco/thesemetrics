<template>
  <RouterLink
    v-bind="$attrs"
    class="border-2 border-primary-600 rounded-md text-primary-600 py-2 px-6 font-display font-black cursor-pointer hover:text-primary-900 hover:border-primary-900 focus:shadow-outline inline-block"
  >
    <span class="inline-block -mb-px mt-px"><slot>Need text here</slot></span>
  </RouterLink>
</template>
