<template>
  <div class="experience">
    <h2 class="experience__heading">Experience</h2>
    <div v-for="company in companies" :key="company.name">
      <h3 class="experience__subheading">
        <a :href="company.website" target="_blank">{{ company.name }}</a>
      </h3>
      <div v-for="role in company.roles" :key="role.title">
        <div class="experience__role">
          <h4 class="experience__title">{{ role.title }}</h4>
          <span class="experience__period">({{ role.from }} &hyphen; {{ role.to }})</span>
        </div>
        <ul class="experience__points">
          <li v-for="point in role.points" :key="point">{{ point }}</li>
        </ul>
        <!-- TODO: Implement technology tags -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    const deltax = {
      name: 'DeltaX, Bengaluru, India',
      website: 'https://www.deltax.com',
      roles: [{
        title: 'Intern',
        from: 'May 2015',
        to: 'June 2016',
        points: [],
        technologies: []
      }, {
        title: 'Associate Product Engineer',
        from: 'June 2016',
        to: 'December 2016',
        points: [
          'Developed a Google Chrome extension (DeltaX Pixel Helper) which helps validate online advertisements.',
          'Developed a REST API for the DeltaX Ad Server (Adjiva).',
          'Reduced Adjiva’s latency from 86ms to 15ms, and CPU utilization by 50% for average load.',
          'Redesigned the database to reduce the duration of bulk data loading (a weekly task) from 200 minutes to 30 minutes.',
          'Added functionality to support video ads (VAST).',
          'Developed a custom decision tree parser to dynamically select advertisements to be displayed.',
          'Used Test Driven Development technique and automated various tasks to provide a reliable service.',
          'Maintained public API documentation built using Swagger.',
        ],
        technologies: [
          'AWS - EC2', 'AWS - DynamoDB', 'Linux',
          'JavaScript', 'Python',
          'Node.js', 'Vogels', 'Fibers', 'Mocha',
          'Swagger',
        ]
      }]
    }
    const rakshe = {
      name: 'Rakshe, Bengaluru, India',
      website: 'https://web.archive.org/web/20180825004938/https://rakshe.com/',
      roles: [{
        title: 'Co-founder, Developer',
        from: 'August 2017',
        to: 'August 2018',
        points: [
          'Co-founded Rakshe, a smart contract insurance platform.',
          'Developed the website for issuing policies and processing claims.',
          'Added integration with third-party APIs and Ethereum nodes for confirmation of payments and automated signing of policy documents.',
          'Responsible for auditing smart contracts submitted by developers.',
          'Pitched our services to potential investors, clients and other partners.',
        ],
        technologies: [
          'AWS - EC2', 'AWS - RDS',
          'Python', 'Flask', 'Knockout.js',
          'Solidity',
        ]
      }]
    }
    const britecore = {
      name: 'BriteCore, Springfield, USA',
      website: 'https://britecore.com',
      roles: [{
        title: 'Lead Engineer - BriteAccess',
        from: 'July 2019',
        to: 'Present',
        // TODO: Add Access role points.
        points: [
        ],
        technologies: [
          'AWS - Lambda', 'AWS - API Gateway', 'AWS - Elasticache', 'AWS - X-ray', 'AWS - RDS',
          'Python', 'Django',
          'Vue.js',
          'Docker',
          'Agile',
        ]
      }, {
        title: 'Lead Engineer - Implementation',
        from: 'December 2016',
        to: 'July 2019',
        points: [
          'BriteCore is a SaaS insurance processing suite for carriers in the US and Canada.',
          'Led a team using agile software development process to successfully take a client live on time.',
          'Identified and rectified vulnerabilities such as unauthorized access, and remote code execution.',
          'Proposed and developed multiple new features to enhance the platform’s usefulness and usability.',
          'Added third-party vendor integrations with ISO, Lexis Nexis, 360 Value and e2Value.',
          'Ensured efficiency in the remote team by making effective use of written communication.',
          'Profiled and reduced latency of common API methods by 10-20%.',
          'Performed code reviews and tested peers’ changes.',
        ],
        technologies: [
          'AWS - EC2', 'AWS - S3', 'AWS - RDS',
          'Python', 'SQLAlchemy', 'Knockout.js',
          'Agile', 'JIRA',
        ]
      }]
    }
    const companies = [
      britecore,
      rakshe,
      deltax,
    ]
    return { companies }
  },
}
</script>
