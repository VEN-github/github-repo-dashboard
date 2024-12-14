<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useRepoStore } from '@/stores/repo'

import AppHeader from '@/layouts/AppHeader.vue'

const repoStore = useRepoStore()

onMounted(() => {
  repoStore.fetchUser()
  repoStore.fetchRepos()
})
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <div class="flex flex-col sm:gap-4 sm:py-4">
      <AppHeader />
      <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 lg:grid-cols-3 xl:grid-cols-3">
        <RouterView />
      </main>
    </div>
  </div>
</template>
