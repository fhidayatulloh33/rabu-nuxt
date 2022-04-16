<template>
  <div class="container">
    <div class="list-task row">
      <div
        class="title border-bottom d-flex align-items-center justify-content-between py-2"
      >
        <h5>Task</h5>

        <!-- <div class="dropdown">
          <b-dropdown v-model="resultCategory">
            <b-dropdown-item
              v-for="(item, i) in resultCategory"
              :key="i"
              @click="cat = item"
            >
              {{ item }}
            </b-dropdown-item>
          </b-dropdown>

          <select v-model="resultCategory">
            <option key="1">rumah</option>
            <option key="2">kantor</option>
          </select> -->

        <button
          class="btn btn-outline-secondary py-1 px-3"
          @click="isCreating = !isCreating"
        >
          {{ isCreating ? "Hilang" : "ADA" }}
        </button>

        <button class="btn btn-outline-primary py-1 px-3 me-4" @click="shuffle">
          Shuffle!
        </button>
      </div>

      <div class="d-flex align-items-center ms-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          v-model="searchQuery"
        />

        <div class="d-flex align-items-center justify-content-end w-100">
          <span class="me-2">View As</span>
          <button
            class="btn btn-outline-secondary py-1 px-3"
            @click="isGrid = !isGrid"
          >
            {{ isGrid ? "Grid" : "List" }}
          </button>
        </div>
      </div>
    </div>

    <transition-group name="tasks" tag="div" class="list-task row">
      <CardItem
        v-for="tasks in resultQuery"
        :key="tasks.id"
        :task="tasks"
        :isGrid="isGrid"
        @click="isCreating = !isCreating"
      />
    </transition-group>

    <div class="action py-2">
      <a
        href="#"
        class="add-button"
        v-if="!isCreating"
        @click="isCreating = !isCreating"
        >Add Task</a
      >
      <div class="add-card" v-else>
        <form v-on:submit.prevent="submitForm">
          <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
              <input
                class="form-control border-0 mb-2"
                placeholder="Title"
                type="text"
                v-model="form.title"
              />
              <input
                class="form-control border-0 mb-2"
                placeholder="Kategori"
                type="text"
                v-model="form.kategori"
              />
              <textarea
                class="form-control border-0 small"
                placeholder="Description"
                rows="3"
                v-model="form.desk"
              ></textarea>
              <input
                class="form-control border-0 mb-2"
                placeholder="Kategori"
                type="date"
                v-model="form.date"
              />
            </div>
          </div>
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2" type="submit">Save</button>
            <button
              class="btn btn-outline-secondary"
              @click="isCreating = !isCreating"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/Card/CardItem.vue";

export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log(
      "created"
    );
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log(
      "mounted"
    );
  },
  beforeUpdate() {
    console.log(
      "beforeUpdate"
    );
  },
  updated() {
    console.log("beforeUpdate");
  },
  beforeDestroy() {
    console.log(
      "beforeDestroy"
    );
  },
  destroyed() {
    console.log(
      "destroyed"
    );
  },
  components: {
    CardItem,
  },
  data() {
    return {
      form: {
        title: "",
        kategori: "",
        desk: "",
        date: "",
      },
      searchQuery: "",
      cat: "",
      isCreating: false,
      isGrid: false,
      tasks: [
        {
          id: 1,
          title: "a Task 1",
          category: "rumah",
          description: "ini deskripsi",
          isDone: false,
        },
        {
          id: 2,
          title: "b Task 2",
          category: "rumah",
          description: "ini deskripsi 2",
          isDone: false,
        },
        {
          id: 3,
          title: "c Task 3",
          category: "kantor",
          description: " ini deskripsi 3",
          isDone: false,
        },
        {
          id: 4,
          title: "d Task 4",
          category: "kantor",
          description: " ini deskripsi 4",
          isDone: false,
        },
      ],
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        console.log(this.tasks);
        return this.tasks;
      }
    },
  },
  methods: {
    submitForm() {
      console.log(this.form);
    },
    shuffle() {
      this.tasks = _.shuffle(this.tasks);
    },
  },
};
</script>
<style>
.tasks-move {
  transition: 0.4s;
}
</style>

