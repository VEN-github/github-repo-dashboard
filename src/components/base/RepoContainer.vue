<template>
  <Card>
    <CardHeader class="flex flex-row items-center border-b">
      <div class="grid gap-0.5">
        <CardTitle class="group flex items-center gap-2 text-lg"> Repositories </CardTitle>
      </div>
      <div class="relative ml-auto flex items-center">
        <Search class="absolute left-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          v-model.trim="search"
          type="search"
          placeholder="Search repo..."
          class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
    </CardHeader>
    <CardContent class="p-5">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <template v-if="formattedRepos.length === 0"> No repositories found. </template>
        <template v-else>
          <RepoCard v-for="repo in formattedRepos" :key="repo.id" :repo="repo" />
        </template>
      </div>
      <div v-if="formattedRepos.length > 0" class="flex justify-center mt-5">
        <Button @click="showAll = !showAll">
          {{ showAll ? 'Show less' : 'Show all' }}
        </Button>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRepoStore } from '@/stores/repo'

import { Search } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import RepoCard from './RepoCard.vue'
import { Button } from '@/components/ui/button'

const repoStore = useRepoStore()
const search = ref('')
const showAll = ref(false)

const formattedRepos = computed(() => {
  const filteredRepos = repoStore.repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.value.toLowerCase())
  )

  return showAll.value ? filteredRepos : filteredRepos.slice(0, 9)
})
</script>
