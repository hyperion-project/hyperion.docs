<template>
  <div class="text-center">
    <img ref="imgRef" style="display: inline-block" :src="withBase(src)" :alt="alt" />
    <div class="no-mp sub-text">
      <slot>{{alt}}</slot>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'
import { onMounted, ref } from 'vue'
import mediumZoom from 'medium-zoom'

defineProps({
  src: String,
  alt: String
})

const imgRef = ref(null)
onMounted(() => {
  mediumZoom(imgRef.value, { background: '#000000bf' });
})
</script>

<style>
.medium-zoom-overlay {
  z-index: 30;
}
.medium-zoom-image {
  z-index: 31;
}
</style>