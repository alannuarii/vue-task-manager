<template>
  <main id="login" class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col col-md-4 offset-md-4">
          <div class="card p-3 rounded-0">
            <form @submit.prevent="login">
              <div class="input-group input-group-lg mb-1">
                <span class="input-group-text rounded-0" 
                  ><i class="bi-envelope-at"></i
                ></span>
                <input type="email" class="form-control rounded-0" v-model="post.email" />
              </div>
              <div class="input-group input-group-lg">
                <span class="input-group-text rounded-0" 
                  ><i class="bi-key"></i
                ></span>
                <input
                  type="password"
                  class="form-control rounded-0"
                  v-model="post.password"
                />
              </div>
              <div class="position-relative py-4 mt-3">
                <div
                  class="text-center w-50 position-absolute top-50 start-50 translate-middle"
                >
                  <button
                    type="reset"
                    class="btn btn-outline-secondary w-50 rounded-0"
                  >
                    Reset
                  </button>
                  <button type="submit" class="btn btn-primary w-50 rounded-0">
                    Submit
                  </button>
                </div>
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
import { useRouter } from "vue-router";

const router = useRouter();

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
      localStorage.setItem("accessToken", result.data.data);
      router.push({
        name: "home",
      });
      // post.email = "";
      // post.password = "";
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
