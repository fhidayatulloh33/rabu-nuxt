<template>
  <div
    v-if="!task.isDone || isShow"
    :class="[
      'item-task d-flex align-items-start border-bottom pt-3 pb-4',
      isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12',
    ]"
  >
    <input
      type="checkbox"
      name="status"
      id="task"
      class="me-2 mt-2"
      :checked="task.isDone"
      v-model="task.isDone"
    />
    <div
      :class="[
        'd-flex flex-column',
        task.isDone ? 'text-decoration-line-through fst-italic' : '',
      ]"
    >
      <div class="title-task mb-1">
        <nuxt-link class="title-task mb-1" :to="'app/detail/' + task.id">
          {{ task.title }}
        </nuxt-link>
        <span class="badge bg-danger">{{ task.category }}</span>
      </div>
      <div class="description-task small text-muted">
        {{ task.description }}
      </div>
      <input class="form-control form-control-sm" type="date" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default: {
        id: 0,
        title: "Untitled",
        description: " Undescribe",
        isDone: false,
        category: "",
      },
    },
    isGrid: {
      type: Boolean,
      required: true,
      default: false,
    },
    isShow: false,
  },
};
</script>
