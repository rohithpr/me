<template>
  <div class="skills">
    <h2 class="skills__heading">Skills</h2>
    <h3 class="skills__subheading">Languages</h3>
    <div class="row skills__section">
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-2" v-for="language in languages" v-bind:key="language.name">
        <SkillCard
          :title=language.name
          :image=language.logo
        >
        </SkillCard>
      </div>
    </div>
    <h3 class="skills__subheading u-margin-top-md">Environments, Tools and Services</h3>
    <div class="row skills__section">
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-2" v-for="tool in tools" v-bind:key="tool.name">
        <SkillCard
          :title=tool.name
          :image=tool.logo
        >
        </SkillCard>
      </div>
    </div>
    <h3 class="skills__subheading u-margin-top-md">Libraries &amp; Frameworks</h3>
    <div class="row skills__section">
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-2" v-for="framework in frameworks" v-bind:key="framework.name">
        <SkillCard
          :title=framework.name
          :image=framework.logo
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
      name: 'HTML',
      logo: 'images/html5.svg',
    }, {
      name: 'CSS',
      logo: 'images/css3.png',
    }, {
      name: 'SQL',
      logo: 'images/db.png'
    }, {
      name: 'C',
      logo: 'images/c.svg'
    }]
    const tools = [{
      name: 'Linux',
      logo: 'images/linux.png',
    }, {
      name: 'Amazon Web Services',
      logo: 'images/aws.png',
    }]
    const frameworks = [{
      name: 'Django',
      logo: 'images/dj.png',
    }, {
      name: 'Serverless',
      logo: 'images/serverless.png',
    }, {
      name: 'Vue.js',
      logo: 'images/vue.png',
    }, {
      name: 'Sass',
      logo: 'images/sass.svg',
    }, {
      name: 'Flask',
      logo: 'images/flask.svg',
    }, {
      name: 'Node.js',
      logo: 'images/node.png',
    }, {
      name: 'Bootstrap',
      logo: 'images/bootstrap.png',
    }, {
      name: 'Semantic UI',
      logo: 'images/semantic.svg',
    }, {
      name: 'SQLAlchemy',
      logo: 'images/sqla.png',
    }, {
      name: 'Beautiful Soup',
      logo: 'images/pypi.svg',
    }, {
      name: 'Knockout.js',
      logo: 'images/knockout.png',
    }, {
      name: 'jQuery',
      logo: 'images/jquery.svg',
    }, {
      name: 'OpenAPI',
      logo: 'images/openapi.png',
    },]
    const skills = { languages, tools, frameworks }
    return skills
  }
}
</script>
