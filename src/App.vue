<template>
  <div id="app">
    <div class="container-fluid">
      <Introduction></Introduction>
      <Skills></Skills>
    </div>
  </div>
</template>

<script>
import Introduction from './components/introduction';
import Skills from './components/skills'

export default {
  name: 'app',
  components: {
    Introduction,
    Skills,
  }
}
</script>
