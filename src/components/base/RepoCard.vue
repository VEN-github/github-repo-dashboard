<template>
  <div class="border flex h-full flex-col rounded-md p-4">
    <div class="flex-1">
      <h1 class="font-semibold flex items-center gap-2">
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
          {{ repo.name }}
        </a>
        <ExternalLink class="w-4 h-4" />
      </h1>
      <p class="text-sm text-gray-500 mt-1.5">{{ repo.description || 'No description' }}</p>
      <div v-if="repo.topics.length > 0" class="mt-3 flex items-center gap-2 flex-wrap">
        <Badge variant="secondary" v-for="topic in repo.topics" :key="topic">{{ topic }}</Badge>
      </div>
    </div>
    <div class="flex gap-2 justify-end">
      <div class="flex items-center gap-2 mt-3">
        <Star class="w-4 h-4 text-gray-500" />
        <span class="text-sm text-gray-500">{{ repo.stargazers_count }} stars</span>
      </div>
      <div class="flex items-center gap-2 mt-3">
        <Eye class="w-4 h-4 text-gray-500" />
        <span class="text-sm text-gray-500">{{ repo.watchers_count }} watchers</span>
      </div>
      <div class="flex items-center gap-2 mt-3">
        <GitFork class="w-4 h-4 text-gray-500" />
        <span class="text-sm text-gray-500">{{ repo.forks_count }} forks</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExternalLink, Star, Eye, GitFork } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'

defineProps({
  repo: {
    type: Object,
    required: true
  }
})
</script>
