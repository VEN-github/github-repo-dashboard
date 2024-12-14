<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-vue-next'
import { useColorMode } from '@vueuse/core'

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()
</script>

<template>
  <Button v-if="mode === 'dark'" variant="ghost" size="icon" @click="mode = 'light'">
    <Sun />
  </Button>
  <Button v-if="mode === 'light'" variant="ghost" size="icon" @click="mode = 'dark'">
    <Moon />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
