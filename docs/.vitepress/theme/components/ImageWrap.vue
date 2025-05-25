<template>
  <div :style="{'text-align': imgAlign ? imgAlign : undefined}" style="margin: 20px">
    <img
      ref="imgRef"
      :style="{'max-width': maxWidth ? maxWidth : undefined}"
      class="zoomImage"
      :src="withBase(src)"
      :alt="alt"
    />
    <div class="sub-text">
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
  alt: String,
  maxWidth: { type: String, default: '100%' },
  imgAlign: { type: String, default: 'center' }
})

const imgRef = ref(null)
onMounted(() => {
  mediumZoom(imgRef.value, { background: '#000000bf' });
})
</script>

<style>
.zoomImage {
  display: inline-block;
  margin-bottom: 10px;
  filter: drop-shadow(0 10px 20px #000000bf);
}

.medium-zoom-overlay {
  z-index: 30;
}

.medium-zoom-image {
  z-index: 31;
}

.sub-text {
  color: var(--vp-c-text-2);
  font-size: 90%;
}
</style>