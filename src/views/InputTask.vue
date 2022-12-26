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
                <input
                  type="text"
                  class="form-control"
                  v-model="post.executor"
                />
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
              <label class="col-sm-3 col-form-label">Source (Optional)</label>
              <div class="col-sm-9">
                <input
                  type="file"
                  class="form-control"
                  ref="file"
                  @change="fileUpload"
                />
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Main from "../components/layouts/Main.vue";

const router = useRouter();

const post = reactive({
  taskName: "",
  executor: "",
  datetime: "",
  notes: "",
});

const file = ref();

const fileUpload = () => {
  return file.value.files[0];
};

const submitTask = () => {
  let source = new FormData();
  source.append("source", fileUpload());
  axios
    .post(
      "http://localhost:3000/input",
      {
        task_name: post.taskName,
        executor: post.executor,
        target_finish: post.datetime,
        notes: post.notes,
        source,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((result) => {
      console.log(result);
      router.push({
        name: "home",
      });
    })
    .catch((error) => {
      console.log(error);
      console.log(fileUpload());
    });
};
</script>
