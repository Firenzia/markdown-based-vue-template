<template>
  <div class="wrapper">
    <ul class="header-wrapper">
      <router-link :to="item.link" tag="li" v-for="(item, index) in navLink" :key="index">{{item.category| pipe}}</router-link>
    </ul>
  </div>
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
          'category': 'resource',
          'link': '/doc/resource/icon'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        background: #efe9e9;
    }
    .header-wrapper {
      width:60%;
      margin: 0 auto;
      display:flex;
      flex-direction:row;
      padding:20px 0;
      height: 50px;
      background: #ccc;
      li{
          height: 100%;
          flex-grow:1;
          line-height: 50px;
          text-align: center;
      }
    }

</style>
