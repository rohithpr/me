<template>
  <div id="app">
    <div class="container-fluid">
      <Introduction></Introduction>
    </div>
  </div>
</template>

<script>
import Introduction from './components/introduction';

export default {
  name: 'app',
  components: {
    Introduction,
  }
}
</script>
