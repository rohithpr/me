<template>
  <div class="projects">
    <SectionHeading heading="Projects" />
    <div class="row">
      <div
        v-for="project in projects"
        :key="project.name"
        class="col-md-6 col-lg-4 projects__project"
      >
        <h3 class="projects__name">
          <a target="_blank" :href="project.link">{{ project.name }}</a>
        </h3>
        <p>{{ project.description }}</p>
        <Tags
          :tags="project.tags"
        ></Tags>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeading from './sectionHeading'
import Tags from './tags'

export default {
  name: 'Projects',
  components: {
    SectionHeading,
    Tags,
  },
  data () {
    const projects = [{
      name: 'Reddit Scrubber',
      link: 'https://github.com/rohithpr/reddit-scrubber',
      description: 'A serverless app that runs periodically on AWS Lambda to delete old content from Reddit.',
      tags: ['Serverless', 'AWS - Lambda', 'Python', 'PRAW'],
    }, {
      name: 'AS-SORT',
      link: 'https://github.com/rohithpr/AS-SORT/blob/master/ASSORT-FULLPAPER.pdf',
      description: 'A sorting algorithm with a best case efficiency class of O(n) and a worst case efficiency class of O(n log(n)).',
      tags: ['Algorithm'],
    }, {
      name: 'Voice based Human Computer Interface',
      link: 'https://github.com/rohithpr/vhci/',
      description: 'A simple voice based assistant to communicate with a Ubuntu laptop using voice commands.',
      tags: ['Python', 'Flask', 'JavaScript', 'jQuery', 'Bootstrap'],
    }, {
      name: 'Bookmark Manager',
      link: 'https://github.com/rohithpr/bookmark-manager/',
      description: 'A responsive site that stores bookmarks in an easily accessible way and makes efficient use of screen space.',
      tags: ['Python', 'Django', 'JavaScript'],
    }, {
      name: 'py-web-search',
      link: 'https://github.com/rohithpr/py-web-search/',
      description: 'A Python package to fetch search results from different search engines programmatically.',
      tags: ['Python', 'Requests', 'BeautifulSoup'],
    }, {
      name: 'Maze solver',
      link: 'https://github.com/rohithpr/genetic-algorithms/',
      description: 'A maze solver built using a genetic algorithm that can be configured to achieve different goals without making code changes.',
      tags: ['Genetic Alogrithm', 'Python'],
    }, {
      name: 'timeout-async',
      link: 'https://github.com/rohithpr/timeout-async/',
      description: 'A node.js package that calls the callback function with default arguments if the async function takes too long.',
      tags: ['JavaScript', 'Node.js'],
    }, {
      name: 'ipc-messenger',
      link: 'https://github.com/rohithpr/ipc-messenger',
      description: 'A package that simplifies communication between workers in a node.js application.',
      tags: ['JavaScript', 'Node.js'],
    }, {
      name: 'Clouder-lite',
      link: 'https://github.com/rohithpr/clouder-lite/',
      description: 'A Flask app that helps transfer files to and from your computer through a browser.',
      tags: ['Python', 'Flask', 'JavaScript', 'jQuery', 'Bootstrap'],
    }, {
      name: 'py-timed-dialog',
      link: 'https://github.com/rohithpr/py-timed-dialog/',
      description: 'A Python package that helps create dialog boxes that self-destruct after a timeout.',
      tags: ['Python', 'Tk'],
    }, {
      name: 'reactive',
      link: 'https://github.com/rohithpr/reactive/',
      description: 'A Python package to write functional reactive programs.',
      tags: ['Python'],
    }, {
      name: 'pyquora',
      link: 'https://github.com/rohithpr/pyquora/',
      description: 'Contributed to the development of an unofficial Quora SDK.',
      tags: ['Python', 'BeautifulSoup'],
    },]

    return { projects }
  }
}
</script>
