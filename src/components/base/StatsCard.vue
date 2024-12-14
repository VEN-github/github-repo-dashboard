<template>
  <Card>
    <CardHeader class="pb-2">
      <CardDescription>
        <slot name="title"></slot>
      </CardDescription>
    </CardHeader>
    <CardContent class="text-3xl"><slot></slot></CardContent>
    <CardFooter>
      <slot name="footer"></slot>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardDescription, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
</script>
