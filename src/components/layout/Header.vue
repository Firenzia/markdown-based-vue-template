<template>
    <ul>
        <router-link :to="item.link" tag="li" v-for="(item, index) in navLink" :key="index">{{item.category| pipe}}</router-link>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      navLink: [
        {
          'category': 'specifications',
          'link': '/doc/specifications/install'
        },
        {
          'category': 'components',
          'link': '/doc/components/input'
        },
        {
          'category': 'resouce',
          'link': '/doc/resource/icon'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
