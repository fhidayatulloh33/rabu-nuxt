<template>
  <div
    v-if="!article.isDone || isShow"
    :class="[
      'item-article d-flex align-items-start border-bottom pt-3 pb-4',
      isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12',
    ]"
  >
    <input
      type="checkbox"
      name="status"
      id="article"
      class="me-2 mt-2"
      :checked="article.isDone"
      v-model="article.isDone"
    />
    <div
      :class="[
        'd-flex flex-column',
        article.isDone ? 'text-decoration-line-through fst-italic' : '',
      ]"
    >
      <div class="title-article mb-1">
        <nuxt-link class="title-article mb-1" :to="'routing/detail/' + article.id">
          {{ article.title }}
        </nuxt-link>
      </div>
      <div class="description-article small text-muted">
        {{ article.content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      default: {
        id: 0,
        title: "Untitled",
        content: " Undescribe",
        isDone: false,
        img: "",
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
