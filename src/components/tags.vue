<template>
  <div class="tags">
    <div
      v-for="tag in tags"
      :key="tag"
      class="tags__tag"
    >
      <span>{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default: () => []
    },
  },
}
</script>
