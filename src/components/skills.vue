<template>
  <div class="skills">
    <h2 class="skills__heading">Skills</h2>
    <h3 class="skills__subheading">Languages</h3>
    <div class="row">
      <div class="skills__languages col-xs-6 col-lg-3" v-for="language in languages" v-bind:key="language.name">
        <SkillCard
          :title=language.name
          :image=language.logo
        >
        </SkillCard>
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from './skillCard'

export default {
  name: 'Skills',
  components: {
    SkillCard,
  },
  data: function () {
    // TODO: Move to store?
    const languages = [{
      name: 'Python',
      logo: 'images/python.svg',
    }, {
      name: 'JavaScript',
      logo: 'images/javascript.svg',
    }, {
      name: 'SQL',
      logo: 'images/db.png'
    }, {
      name: 'HTML',
      logo: 'images/html5.svg',
    }, {
      name: 'CSS',
      logo: 'images/css3.png',
    }, {
      name: 'Sass',
      logo: 'images/sass.svg',
    }, {
      name: 'C',
      logo: 'images/c.svg'
    }]
    const skills = { languages }
    return skills
  }
}
</script>
