<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export function getBaseURL() {
  const host = window.location.host;

  if (host.endsWith('beta.thesemetrics.org') || host.endsWith('netlify.app')) {
    return 'https://api.beta.thesemetrics.org';
  } else if (host.endsWith('dev.thesemetrics.org')) {
    return `https://api.dev.thesemetrics.org${window.location.port ? ':' + window.location.port : ''}`;
  } else {
    return 'https://api.thesemetrics.org';
  }
}

export default defineComponent({
  setup() {
    const token = ref<string | null>(null);
    const isReady = computed(() => !!token.value);

    fetch(getBaseURL() + `/passwordless/csrf`, { credentials: 'include', mode: 'cors' }).then((response) => {
      token.value = response.headers.get('x-csrf-token');
    });

    return { isReady, token, getBaseURL };
  },
});
</script>

<template>
  <section class="flex flex-col items-center p-4 justify-center text-lg">
    <form :action="getBaseURL() + '/passwordless/github?_csrf=' + token" method="POST" class="my-2 w-full">
      <button
        type="submit"
        style="background-color: #000000; border-color: #000000"
        class="pl-6 pr-10 py-2 w-full rounded text-white flex flex-row items-center border-2 font-display font-black tracking-wide"
        :disabled="!isReady"
      >
        <img src="../assets/services/github.svg" class="inline-block w-8 mx-2" />
        <div class="inline-block -mb-1">Sign in with Github</div>
      </button>
    </form>

    <form :action="getBaseURL() + '/passwordless/google?_csrf=' + token" method="POST" class="my-2 w-full">
      <button
        type="submit"
        style="background-color: #ffffff; border-color: #000000"
        class="pl-6 pr-10 py-2 w-full rounded text-black flex flex-row items-center border-2 font-display font-black tracking-wide"
        :disabled="!isReady"
      >
        <img src="../assets/services/google.svg" class="inline-block w-8 mx-2" />
        <div class="inline-block -mb-1">Sign in with Google</div>
      </button>
    </form>
  </section>
</template>
