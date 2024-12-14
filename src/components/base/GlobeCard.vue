<template>
  <div>
    <div
      class="relative flex flex-col h-[400px] w-full max-w-full items-center justify-center overflow-hidden rounded-lg border pb-40 pt-8 md:pb-48"
    >
      <span
        class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b pb-1 from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
      >
        {{ githubUsername }}
      </span>
      <div class="flex items-center gap-4 mt-2">
        <p class="flex text-xs items-center gap-2">
          <span>Followers:</span>
          <span>{{ followers }}</span>
        </p>
        <p class="flex text-xs items-center gap-2">
          <span>Following:</span>
          <span>{{ following }}</span>
        </p>
      </div>
      <div class="mt-1">
        <p class="flex text-xs items-center gap-1">
          <Link class="w-3 h-3" />
          <a :href="website" target="_blank" rel="noopener noreferrer">{{ website }}</a>
        </p>
      </div>
      <Globe />
      <div
        class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRepoStore } from '@/stores/repo'

import Globe from '@/components/ui/globe/Globe.vue'
import { Card } from '@/components/ui/card'
import { Link } from 'lucide-vue-next'

const repoStore = useRepoStore()

const githubUsername = computed(() => {
  return repoStore.user?.login
})

const followers = computed(() => {
  return repoStore.user?.followers
})

const following = computed(() => {
  return repoStore.user?.following
})

const website = computed(() => {
  return repoStore.user?.blog
})
</script>
