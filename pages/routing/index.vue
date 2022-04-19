<template>
  <div class="py-4">
    <div v-if="isLoading" class="container text-center">
      <img src="/loading.gif" />
    </div>
    <div class="container" v-else>
      <div
        class="title border-bottom d-flex align-items-center justify-content-between py-2"
      >
        <h5>Task</h5>
        <div class="d-flex align-items-center ms-auto">
          <!-- <div>
            <button
              class="btn btn-outline-primary py-1 px-3 me-4"
              @click="shuffle"
            >
              Shuffle!
            </button>
          </div> -->

          <!-- <div>
            <select @change="sortBy($event)" v-model="sort">
              <option value="">SortBy</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div> -->

          <!-- <div>
            <select id="dropdown-1" text="Category" class="m-md-2">
              <option
                v-for="(item, i) in resultCategory"
                :key="i"
                @click="cat = item"
              >
                {{ item == "" ? "Nothing selected" : item }}
              </option>
            </select>
          </div> -->

          <!-- <button class="btn btn-danger me-2" @click="isShow = !isShow">
            {{ !isShow ? "Show" : "Hide" }}
          </button> -->
          
          <!-- <input
            type="text"
            class="form-control"
            placeholder="Search"
            v-model="searchQuery"
          /> -->

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
          v-for="articles in resultQuery"
          :key="articles.id"
          :article="articles"
          :isGrid="isGrid"
        />
      </transition-group>

    </div>
  </div>
</template>
<script>
import CardItem from "@/components/Card/Card.vue";
export default {
  components: {
    CardItem,
  },
  data() {
    return {
      articles: [
        {
            id:1,
            title: "Judul Artikel 1",
            content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
            img: "https://images.unsplash.com/photo-1649282806617-c51bb282899c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id:2,
          title: "Judul Artikel 2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
          img: "https://images.unsplash.com/photo-1635732646038-0a1a2fe3f2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        },
        {
            id:3,
          title: "Judul Artikel 3",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",
          img: "https://images.unsplash.com/photo-1640006807976-a6127e9d6fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
      ],
      //status saat menambah task
      //isCreating: false,
      // Tipe layout daftar task
      isGrid: false,
      //cat: "Nothing selected",
      //isShow: false,
      isLoading: true,
      //sort: "",
    };
  },
  computed: {
    resultQuery() {
    //   if (this.cat != "Nothing selected")
    //     return this.articles.filter((i) => i.img == this.cat);
    //   else if (this.cat == "Nothing selected") return this.articles;
      if (this.searchQuery) {
        return this.articles.filter((i) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => i.title.toLowerCase().includes(v));
        });
      } else {
        console.log(this.articles);
        return this.articles;
      }
    },
    // resultCategory() {
    //   let a = this.articles
    //     .map((item) => item.title)
    //     .filter((value, index, self) => self.indexOf(value) === index);
    //   a.push("Nothing selected");
    //   console.log(a);
    //   return a;
    // },
  },
  methods: {
    // handleSubmit() {
    //   console.log(this.form);
    //   this.tasks.push(this.form);
    //   this.isCreating = false;
    // },
    // shuffle() {
    //   this.tasks = _.shuffle(this.tasks);
    // },
    // sortBy(event) {
    //   this.tasks = _.orderBy(this.tasks, ["title"], [event.target.value]);
    // },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style>
/* .tasks-move {
  transition: 0.4s;
} */
</style>
