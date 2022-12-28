<template>
  <div class="dropdown">
    <div type="div" data-bs-toggle="dropdown" aria-expanded="false">
      <i :class="icon" class="p-2 rounded-circle"></i>
    </div>
    <ul class="dropdown-menu shadow mt-2">
      <slot name="account-items"></slot>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
});
</script>

<style scoped>
i {
  font-size: 20px;
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

i:hover {
  background-color: #e3e8ecb4;
}
.dropdown-menu {
  width: 250px;
}
</style>
