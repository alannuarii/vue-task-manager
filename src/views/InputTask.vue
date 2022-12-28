<template>
  <Main>
    <template #content>
      <div class="row">
        <div class="col-10 offset-1">
          <h1 class="mb-4">INPUT TASK</h1>
          <form @submit.prevent="submitTask">
            <div class="row mb-4">
              <label class="col-sm-3 col-form-label">Task Name</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-model="post.taskName"
                />
              </div>
            </div>
            <div class="row mb-4">
              <label class="col-sm-3 col-form-label">Executor</label>
              <div class="col-sm-9">
                <select class="form-select rounded-0" v-model="post.index">
                  <option
                    v-for="(user, index) in users.list"
                    :key="index"
                    :value="index"
                  >
                    {{ user.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row mb-4">
              <label class="col-sm-3 col-form-label">Target Finish</label>
              <div class="col-sm-9">
                <input
                  type="datetime-local"
                  class="form-control"
                  v-model="post.datetime"
                />
              </div>
            </div>
            <div class="row mb-4">
              <label class="col-sm-3 col-form-label"
                >Attachment (Optional)</label
              >
              <div class="col-sm-9">
                <input type="file" class="form-control" ref="file" />
              </div>
            </div>
            <div class="row mb-4">
              <label class="col-sm-3 col-form-label">Notes (Optional)</label>
              <div class="col-sm-9">
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="post.notes"
                ></textarea>
              </div>
            </div>
            <div class="position-relative mt-5">
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
    </template>
  </Main>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Main from "../components/layouts/Main.vue";

const router = useRouter();

const post = reactive({
  taskName: "",
  index: "",
  datetime: "",
  notes: "",
});

const users = reactive({
  list: [{}],
});

const file = ref();

// const fileUpload = () => {
//   console.log(file.value.files[0]);
//   return file.value.files[0];
// };

const submitTask = () => {
  const formData = new FormData();
  formData.append("task_name", post.taskName);
  formData.append("executor", users.list[post.index].kode_task);
  formData.append("time_finish", post.datetime);
  formData.append("notes", post.notes);
  formData.append("user_id", users.list[post.index].id_user);
  formData.append("attachment", file.value.files[0]);
  axios
    .post("http://localhost:3000/input", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      console.log(result);
      router.push({
        name: "home",
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUsers = () => {
  axios
    .get("http://localhost:3000/user")
    .then((result) => {
      users.list = result.data.data;
      console.log(users.list);
    })
    .catch((error) => {
      users.list = error.response.data.message;
      console.log(users.list)
    });
};

onMounted(() => {
  getUsers();
});
</script>
