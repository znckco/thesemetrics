<script lang="ts">
import { defineComponent, onMounted, watchEffect } from 'vue'
import Layout from '../components/Layout.vue'

export default defineComponent({
  components: { Layout },
})
</script>

<template>
  <Layout>
    <main class="mt-20 md:mt-32 mb-8 prose mx-auto">
      <slot />
    </main>
  </Layout>
</template>
