<template>
  <h2 class="section-heading">
    {{ heading }}
  </h2>
</template>

<script>
export default {
  name: 'SectionHeading',
  props: {
    heading: {
      type: String,
      default: ''
    }
  },
}
</script>
