<template>
  <div class="education">
    <h2 class="education__heading">Education &amp; Certification</h2>
    <div
      v-for="certificate in certificates"
      :key="certificate.title"
      class="u-padding-tb-lg"
    >
      <h3 class="education__title">{{ certificate.title }}</h3>
      <span>({{ certificate.from }} - {{ certificate.to }})</span>
      <p class="education__issuer">{{ certificate.issuer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    const be = {
      title: 'Bachelor of Engineering in Information Science',
      issuer: 'Visvesvaraya Technological University',
      from: 'August 2012',
      to: 'June 2016'
    }
    const devAssociate = {
      title: 'AWS Certified Developer - Associate (DVA-C01)',
      issuer: 'AWS Training and Certification',
      from: 'Octber 2019',
      to: 'October 2022'
    }
    const certificates = [ be, devAssociate ]
    return { certificates }
  },
}
</script>
