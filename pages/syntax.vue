<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom">
        <h5 class="biru">Task</h5>
      </div>
      <div class="list-task">
        <div
          class="item-task d-flex align-items-center border-bottom pt-3 pb-4"
        >
          <input type="checkbox" name="status" id="task" class="me-2" />
          <div class="title-task">Tugas 1</div>
        </div>
      </div>
      <div class="action py-2">
        <a href="#" class="add-button">Add Task</a>
      </div>
      {{ number + 1 }}
      hb{{ ok ? "YES" : "NO" }}
      <div v-bind:id="'list-' + id"></div>
      <div>
        <a v-bind:href="url"> google </a>
      </div>
      <div>
        <a v-on:click="doSomething"> rabu </a>
      </div>
      <div>
        <a v-bind:[attributeName]="url">attributeNama</a>
      </div>
      <hr />

      <a v-bind:href="url"> coba 1 </a>
      <a :href="url"> coba 2 </a>
      <a :[key]="url"> coba 3 </a>
      <br />
      <!-- full syntax -->
      <a v-on:click="doSomething"> coba 1 </a> <br />
      <!-- shorthand -->
      <a @click="doSomething"> coba 2 </a> <br />
      <!-- shorthand dengan argumen dinamis (2.6.0+) -->
      <a @[event]="doSomething"> coba 3 </a> <br />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 100,
      ok: false,
      id: 13,
      url: "www.google.com",
    };
  },

  methods: {
    doSomething() {
      alert("hai rabu");
    },
  },
};
</script>
<style></style>
