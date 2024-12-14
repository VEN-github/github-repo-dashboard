<template>
  <Card class="sm:col-span-2">
    <CardHeader class="pb-3">
      <CardTitle>Hi, {{ name }}</CardTitle>
      <CardDescription class="max-w-lg text-balance leading-relaxed">
        Introducing Our Github Repo Dashboard, where you can easily manage and track your GitHub
        repositories.
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button as-child>
        <a :href="profileUrl" target="_blank" rel="noopener noreferrer">View Profile</a>
      </Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRepoStore } from '@/stores/repo'

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const repoStore = useRepoStore()

const name = computed(() => {
  return repoStore.user?.name
})

const profileUrl = computed(() => {
  return repoStore.user?.html_url
})
</script>
