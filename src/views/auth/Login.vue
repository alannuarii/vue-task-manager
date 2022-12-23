<template>
  <main id="login" class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col col-md-4 offset-md-4">
          <div class="card p-3">
            <form @submit.prevent="login">
              <div class="input-group input-group-lg mb-1">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="bi-envelope-at"></i></span>
                <input type="email" class="form-control" v-model="post.email" />
              </div>
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="bi-key"></i></span>
                <input type="password" class="form-control" v-model="post.password" />
              </div>
              <div class="mt-3 d-flex justify-content-center">
                <button class="btn btn-outline-secondary me-1" type="reset">Reset</button>
                <button class="btn btn-primary" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

const post = reactive({
  email: "",
  password: "",
});

const login = () => {
  axios
    .post("http://localhost:3000/login", {
      email: post.email,
      password: post.password,
    })
    .then((result) => {
      console.log(result);
      post.email = "";
      post.password = "";
    })
    .catch((error) => {
      console.log(error);
      post.email = "";
      post.password = "";
    });
};
</script>

<style scoped>
#login {
  height: 100vh;
}
</style>
