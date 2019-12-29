<template>
  <div id="app">
    <div class="container-fluid">
      <Introduction></Introduction>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  </div>
</template>

<script>
import Contact from './components/contact'
import Experience from './components/experience'
import Education from './components/education'
import Resume from './components/resume'
import Skills from './components/skills'
import Introduction from './components/introduction';

export default {
  name: 'app',
  components: {
    Contact,
    Education,
    Experience,
    Introduction,
    Resume,
    Skills,
  }
}
</script>
