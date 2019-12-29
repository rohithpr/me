<template>
  <div id="app">
    <div class="container-fluid">
      <Introduction></Introduction>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
    </div>
  </div>
</template>

<script>
import Experience from './components/experience'
import Education from './components/education'
import Skills from './components/skills'
import Introduction from './components/introduction';

export default {
  name: 'app',
  components: {
    Education,
    Experience,
    Introduction,
    Skills,
  }
}
</script>
