<template>
  <div class="skill u-hover-zoom">
    <div class="skill__image-container">
      <img class="skill__image" :src="image"/>
    </div>
    <p class="skill__title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: '' // TODO: Add a default/fallback image URL?
    },
  },
}
</script>

<style lang="scss" scoped>
// TODO: Change colors dynamically or just move this to the Sass file?
@import '../sass/abstracts/variables';

.skill {
  border-color: $line-color;
  color: $color-secondary;
}
</style>
