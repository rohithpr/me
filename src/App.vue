<template>
  <div id="app">
    <div class="container-fluid">
      <Introduction></Introduction>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  </div>
</template>

<script>
import Contact from './components/contact'
import Experience from './components/experience'
import Education from './components/education'
import Introduction from './components/introduction';
import Projects from './components/projects'
import Resume from './components/resume'
import Skills from './components/skills'

export default {
  name: 'app',
  components: {
    Contact,
    Education,
    Experience,
    Introduction,
    Projects,
    Resume,
    Skills,
  }
}
</script>
