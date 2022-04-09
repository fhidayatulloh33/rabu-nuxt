<template>
  <div class="container">
    <div class="list-task row">
      <div
        class="title border-bottom d-flex align-items-center justify-content-between py-2"
      >
        <h5>Task</h5>

        <div class="dropdown">
          <b-dropdown v-model="resultCategory">
          <b-dropdown-item
           v-for="(item, i) in resultCategory"
          :key="i"
          @click = "cat = item" >
          {{ item }}
          </b-dropdown-item>
          </b-dropdown>


          <!-- pake select -->

          <select v-model="resultCategory">
          <option key="1" > rumah </option>
          <option key="2"> kantor </option>
          </select>

          <button
              class="btn btn-outline-secondary py-1 px-3"
              @click="isCreating = !isCreating"
            >
              {{ isCreating ? "Hilang" : "ADA" }}
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

      <div class="list-task row">
        <CardItem
          v-for="(tasks, i) in resultQuery"
          :key="i"
          :task="tasks"
          :isGrid="isGrid"
          @click="isCreating = !isCreating"
       />
      </div>

      <div class="action py-2">
        <a
          href="#"
          class="add-button"
          v-if="!isCreating"
          @click="isCreating = !isCreating"
          >Add Task</a
        >
        <div class="add-card" v-else>
          <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
              <input
                class="form-control border-0 mb-2"
                placeholder="Title"
                type="text"
              />
              <textarea
                class="form-control border-0 small"
                placeholder="Description"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2">Save</button>
            <button
              class="btn btn-outline-secondary"
              @click="isCreating = !isCreating"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/Card/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      searchQuery: "",
      cat: "",
      isCreating: false,
      isGrid: false,
      tasks: [
        {
          title: "Task 1",
          category: "rumah",
          description: "ini deskripsi",
          isDone: false,
        },
        {
          title: "Task 2",
          category: "rumah",
          description: "ini deskripsi 2",
          isDone: false,
        },
        {
          title: "Task 3",
          category: "kantor",
          description: " ini deskripsi 3",
          isDone: false,
        },
      ],
    };
  },
  computed: {
    resultQuery(){ 
      // if(this.cat != ""){
      //   return this.tasks.filter((i) => i.category == this.cat);}
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
    resultCategory() {
      let a = this.tasks
      .map((item) => item.category)
      .filter((value, index, self) => self.indexOf(value) === index);
      console.log(a);
      return;
    }
  },
  methods : {},
};
</script>
<style></style>
