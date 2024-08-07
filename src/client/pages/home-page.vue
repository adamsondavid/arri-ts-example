<script setup lang="ts">
import { ref, watch } from "vue";
import { useServer } from "../composables/server";
import { Icon } from "@iconify/vue";
import githubIcon from "@iconify-icons/uil/github";
import spinnerIcon from "@iconify-icons/uil/spinner-alt";
import { Button } from "../components/ui/button";

const server = useServer();

const names = [
  "Tap Water",
  "Vue",
  "Cloudflare",
  "ts-rest",
  "Tailwind",
  "Vercel",
  "Cypress",
  "Docker",
  "e2e Typesafety",
  "Netlify",
  "Heroku",
];
const name = ref(-1);

const greeting = ref("");
const loading = ref(false);

watch(name, async (name) => {
  try {
    loading.value = true;
    const { message } = await server.greet({ name: names[name % names.length] });
    greeting.value = message;
  } catch (_) {
    greeting.value = "some unexpected error occurred 😰";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="flex min-h-full justify-center items-center">
    <div class="flex flex-col gap-6 w-10/12 sm:w-8/12 2xl:w-6/12 py-6">
      <div class="text-3xl lg:text-6xl font-bold">
        <h1 class="inline-block bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
          arri-ts-example
        </h1>
        <p>A simple example on how to use Arri RPC (ts server, ts + vue client). Based on the tapw template.</p>
      </div>
      <div>
        <Button @click="name++" :disabled="loading" data-cy="submit">
          <span v-if="loading" class="flex justify-center">
            <Icon :icon="spinnerIcon" width="20" class="animate-spin" />
          </span>
          <span v-else-if="greeting" class="font-mono" data-cy="greeting">{{ greeting }}</span>
          <span v-else>Demonstrate Typesafe Backendcall</span>
        </Button>
      </div>
      <div class="flex gap-2 flex-col sm:flex-row">
        <Button variant="secondary" as="a" href="https://github.com/adamsondavid/arri-ts-example" target="_blank">
          Source Code on
          <Icon :icon="githubIcon" width="20" class="inline align-text-bottom" />
          <span class="font-bold">GitHub</span>
        </Button>
        <Button variant="secondary" as="a" href="https://github.com/modiimedia/arri" target="_blank">
          Arri on
          <Icon :icon="githubIcon" width="20" class="inline align-text-bottom" />
          <span class="font-bold">GitHub</span>
        </Button>
        <Button variant="secondary" as="a" href="https://github.com/adamsondavid/tapw" target="_blank">
          Tapwater on
          <Icon :icon="githubIcon" width="20" class="inline align-text-bottom" />
          <span class="font-bold">GitHub</span>
        </Button>
      </div>
    </div>
  </div>
</template>
