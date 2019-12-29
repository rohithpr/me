<template>
  <div class="skill-section">
    <h3 class="skill-section__subheading">{{ heading }}</h3>
    <div class="row skill-section__list">
      <div class="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4" v-for="skill in skills" v-bind:key="skill.name">
        <SkillCard
          :title=skill.name
          :image=skill.logo
        >
        </SkillCard>
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from './skillCard'

export default {
  name: 'SkillSection',
  components: {
    SkillCard,
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    skills: {
      type: Array,
      default: () => []
    },
  },
}
</script>
