<template>
  <div class="alert text-center" :class="color" role="alert">{{ message }}</div>
</template>

<script setup>
const props = defineProps({
  message: String,
  color: String,
});
</script>

<style scoped></style>
