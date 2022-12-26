<template>
  <section>
    <div
      class="d-flex flex-column flex-shrink-0 p-3"
      style="width: 100%; height: 100vh"
    >
      <RouterLink
        to="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg class="bi pe-none me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-5">TASK MANAGER</span>
      </RouterLink>
      <ul class="nav nav-pills flex-column mt-4" v-for="(item, index) in items">
        <SidebarItem
          :item="item"
          :icon="icons[index]"
          :link="links[index]"
        ></SidebarItem>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import { RouterLink } from "vue-router";
import SidebarItem from "./childs/SidebarItem.vue";

const items = ref(["Home", "Input Task", "Completed Task"]);
const icons = ref(["bi-house-door", "bi-vr", "bi-check2-circle"]);
const links = ref(["/", "/input", "/login"]);
</script>

<style scoped>
section {
  background-color: #edf6f9;
}
</style>
