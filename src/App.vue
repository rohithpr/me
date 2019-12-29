<template>
  <div id="app">
    <div class="container-fluid">
      <Introduction></Introduction>
      <Skills></Skills>
      <Experience></Experience>
    </div>
  </div>
</template>

<script>
import Introduction from './components/introduction';
import Skills from './components/skills'
import Experience from './components/experience'

export default {
  name: 'app',
  components: {
    Introduction,
    Skills,
    Experience,
  }
}
</script>
