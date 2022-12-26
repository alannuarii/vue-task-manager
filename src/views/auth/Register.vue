<template>
  <main id="login" class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col col-md-4 offset-md-4">
          <div class="card p-3">
            <Alert v-if="status" :color="color" :message="message" />
            <form @submit.prevent="register">
              <div class="input-group input-group-lg mb-1">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="bi-person-circle"></i></span>
                <input type="text" class="form-control" v-model="post.name" />
              </div>
              <div class="input-group input-group-lg mb-1">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="bi-envelope-at"></i></span>
                <input type="email" class="form-control" v-model="post.email" />
              </div>
              <div class="input-group input-group-lg mb-1">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="bi-key"></i></span>
                <input type="password" class="form-control" v-model="post.password" />
              </div>
              <div class="input-group input-group-lg mb-1">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="bi-diagram-2"></i></span>
                <input type="text" class="form-control" v-model="post.division" />
              </div>
              <div class="mt-3 d-flex justify-content-center">
                <button class="btn btn-outline-secondary me-1" type="reset">Reset</button>
                <button class="btn btn-primary" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
// import Alert from "../../components/Alert.vue";

const post = reactive({
  name: "",
  email: "",
  password: "",
  division: "",
});

const message = ref();
const status = ref(false);
const color = ref();

const register = () => {
  axios
    .post("http://localhost:3000/register", {
      name: post.name,
      email: post.email,
      password: post.password,
      division: post.division,
    })
    .then((result) => {
      console.log(result);
      status.value = true;
      message.value = "Registration successfull";
      color.value = "alert-success";
      post.name = "";
      post.email = "";
      post.password = "";
      post.division = "";
      setTimeout(() => {
        status.value = false;
      }, 5000);
    })
    .catch((error) => {
      console.log(error);
      status.value = true;
      message.value = error.message;
      color.value = "alert-danger";
      setTimeout(() => {
        status.value = false;
      }, 5000);
    });
};
</script>

<style scoped>
#login {
  height: 100vh;
}
</style>
