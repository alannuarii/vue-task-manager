<template>
  <main>
    <div class="row">
      <div class="col-2">
        <Sidebar></Sidebar>
      </div>
      <div class="col-10">
        <Header></Header>
        <div class="content mt-3 px-5 py-4 shadow"><slot name="content"></slot></div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Sidebar from "./sidebar/Sidebar.vue";
import Header from "./header/Header.vue";
</script>

<style scoped>
main {
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}

.content {
  background-color: #ced4da;
  height: 100vh;
  border-radius: 30px 0 0 0;
}
</style>
