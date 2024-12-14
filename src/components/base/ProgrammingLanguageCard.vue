<template>
  <Card class="overflow-hidden">
    <CardHeader class="flex flex-row items-start border-b">
      <div class="grid gap-0.5">
        <CardTitle class="group flex items-center gap-2 text-lg">
          Most used programming language
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent class="p-6">
      <div v-if="repoStore.repos.length" class="flex justify-center items-center">
        <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRepoStore } from '@/stores/repo'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const repoStore = useRepoStore()

const languageCount = computed(() => {
  const languageCount = repoStore.repos.reduce((acc, repo) => {
    const lang = repo.language
    if (lang) {
      acc[lang] = (acc[lang] || 0) + 1
    }
    return acc
  }, {})

  return languageCount
})

const series = computed(() => {
  return Object.values(languageCount.value)
})

const chartOptions = computed(() => {
  return {
    chart: {
      width: 380,
      type: 'pie'
    },
    colors: ['#F0DB4F', '#41B883', '#8993be', '#cc6699', '#007acc'],
    labels: Object.keys(languageCount.value),
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
