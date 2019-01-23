<template>
    <div>
      <Header/>
      <side-bar/>
      <Doc/>
      <Demo v-show="showDemo"/>
    </div>
</template>

<script>
import SideBar from './SideBar'
import Demo from './Demo'
import Header from './Header'
import Doc from './Doc'

export default {
  data () {
    return {
    }
  },
  computed: {
    showDemo () {
      return /showDemo/g.test(this.$route.fullPath)
    }
  },
  components: {
    Header,
    SideBar,
    Demo,
    Doc
  }
}
</script>
