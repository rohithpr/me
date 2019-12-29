<template>
  <div class="skills">
    <h2 class="skills__heading">Skills</h2>
    <div v-for="skill in skills" :key="skill.heading">
      <SkillSection
        :heading=skill.heading
        :skills=skill.skills
      >
      </SkillSection>
    </div>
  </div>
</template>

<script>
import SkillSection from './skillSection'

export default {
  name: 'Skills',
  components: {
    SkillSection,
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
      name: 'Git',
      logo: 'images/git.svg',
    }, {
      name: 'Amazon Web Services',
      logo: 'images/aws.png',
    }, {
      name: 'AWS - Lambda',
      logo: 'images/lambda.svg',
    }, {
      name: 'AWS - API Gateway',
      logo: 'images/apig.svg',
    }, {
      name: 'AWS - EC2',
      logo: 'images/ec2.svg',
    }, {
      name: 'AWS - IAM',
      logo: 'images/iam.svg',
    }, {
      name: 'AWS - X-ray',
      logo: 'images/xray.svg',
    }, {
      name: 'AWS - DynamoDB',
      logo: 'images/dynamodb.svg',
    }, {
      name: 'AWS - RDS',
      logo: 'images/rds.svg',
    }, {
      name: 'AWS - Elasticache',
      logo: 'images/elasticache.svg',
    }, {
      name: 'AWS - S3',
      logo: 'images/s3.svg',
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
    // }, {
    //   name: 'Semantic UI',
    //   logo: 'images/semantic.svg',
    }, {
      name: 'SQLAlchemy',
      logo: 'images/pypi.svg',
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
    const skills = [{
      heading: 'Languages',
      skills: languages
    }, {
      heading: 'Tools, Environments and Services',
      skills: tools
    }, {
      heading: 'Libraries & Frameworks',
      skills: frameworks
    }]
    return { skills }
  }
}
</script>
