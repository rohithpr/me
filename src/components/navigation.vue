<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal">
      <el-menu-item index="1">Rohith P R</el-menu-item>
    </el-menu>
    <div @click="toggle">toggle</div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      activeIndex2: "1",
      collapsed: true
    }
  },
  methods: {
    handleSelect (e) {
      console.warn(e)
    },
    toggle () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
