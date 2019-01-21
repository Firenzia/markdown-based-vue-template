<template>
    <div class="doc-area">This is doc area
        <article v-html="content"></article>
    </div>
</template>

<script>
const markDownFile = require.context('../../markdown', true, /.md$/)

export default {
  data () {
    return {
    }
  },
  computed: {
    content () {
      let path = this.$route.path.replace('/doc', '')
      return markDownFile(`.${path}.md`)
    }
  },
  created () {
    console.log(this.$route.path)
  }
}
</script>
<style lang="scss" scoped>
    .doc-area{
        width:600px;
        float: left;
    }
</style>
