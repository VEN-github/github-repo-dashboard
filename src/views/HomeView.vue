<template>
  <div class="grid auto-rows-max items-start gap-4 lg:col-span-2">
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <ProfileCard />
      <StatsCard>
        <template #title>
          <div class="flex items-center justify-between gap-2">
            <p>Total Repositories</p>
            <BookCopy />
          </div>
        </template>
        <template #default>
          <p class="font-semibold">{{ totalRepos }}</p>
        </template>
        <template #footer>
          <div class="flex justify-end ml-auto">
            <a
              :href="repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center bg-gray-200 rounded-full p-2"
            >
              <ExternalLink class="w-4 h-4" />
            </a>
          </div>
        </template>
      </StatsCard>
      <StatsCard>
        <template #title>
          <div class="flex items-center justify-between gap-2">
            <p>Total Stars Collected</p>
            <Star />
          </div>
        </template>
        <template #default>
          <p class="font-semibold">{{ totalStars }}</p>
        </template>
      </StatsCard>
    </div>
    <div>
      <RepoContainer />
    </div>
  </div>
  <div class="space-y-4">
    <ProgrammingLanguageCard />
    <GlobeCard />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRepoStore } from '@/stores/repo'

import ProfileCard from '@/components/base/ProfileCard.vue'
import StatsCard from '@/components/base/StatsCard.vue'
import RepoContainer from '@/components/base/RepoContainer.vue'
import ProgrammingLanguageCard from '@/components/base/ProgrammingLanguageCard.vue'
import GlobeCard from '@/components/base/GlobeCard.vue'
import { BookCopy, Star, ExternalLink } from 'lucide-vue-next'

const repoStore = useRepoStore()

const totalRepos = computed(() => {
  return repoStore.repos.length
})

const repoUrl = computed(() => {
  return `https://github.com/${repoStore.user?.login}?tab=repositories`
})

const totalStars = computed(() => {
  return repoStore.repos.reduce((prev, curr) => {
    return prev + curr?.stargazers_count
  }, 0)
})
</script>
