<template>
  <header class="d-flex justify-content-end me-4 mt-3">
    <Account class="me-4" :icon="icon[0]">
      <template #account-items>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </template>
    </Account>
    <Account :icon="icon[1]">
      <template #account-items>
        <li class="border-bottom">
          <div class="row">
            <div class="col-4 text-end">
              <i class="bi-person-circle"></i>
            </div>
            <div class="col d-flex flex-column justify-content-center">
              <h5>{{ dataUser.name }}</h5>
              <h6>{{ dataUser.division }}</h6>
            </div>
          </div>
        </li>
        <li class="ms-3 py-2 mt-2"><i class="bi-person me-2"></i> Profile</li>
        <li class="ms-3 py-2" @click="logout">
          <i class="bi-box-arrow-right me-2"></i> Logout
        </li>
      </template>
    </Account>
  </header>
</template>

<script setup>
import { ref, reactive } from "vue";
import Account from "./childs/AccountInfo.vue";
import { useRouter } from "vue-router";
import decodeToken from "../../../utils/decodeToken.js";

const router = useRouter();

const icon = ref(["bi-bell", "bi-person-circle"]);

const dataUser = reactive({
  id_user: decodeToken().id_user,
  name: decodeToken().name,
  email: decodeToken().email,
  division: decodeToken().division,
  position: decodeToken().position,
  task_code: decodeToken().task_code,
});

const logout = () => {
  localStorage.removeItem("accessToken");
  router.push({
    name: "login",
  });
};
</script>

<style scoped>
.bi-person-circle {
  font-size: 50px;
}
h5 {
  font-size: 18px;
  font-weight: 900;
}
h6 {
  font-size: 12px;
  font-weight: 400;
}
li {
  cursor: pointer;
}
</style>
