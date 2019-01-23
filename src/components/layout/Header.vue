<template>
  <div class="wrapper">
    <ul class="header-wrapper">
      <router-link :to="item.link" tag="li" v-for="(item, index) in navLink" :key="index" :class="currentCategory === item.category?'hightlight':''">{{item.category| pipe}}</router-link>
    </ul>
  </div>
</template>

<script>
import menu from '@/config/menu'
export default {
  data () {
    return {
      navLink: menu
    }
  },
  computed: {
    currentCategory () {
      var reg = /\/(\w+)\/(\w+)\//
      return reg.exec(this.$route.path)[2]
    }
  }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        background: #efe9e9;
    }
    .header-wrapper {
      width:1200px;
      margin-left:360px;
      display:flex;
      flex-direction:row;
      height: 90px;
      background: #ccc;
      li{
          height: 100%;
          flex-grow:1;
          line-height: 90px;
          text-align: center;
          box-sizing: border-box;
      }
    }
    .hightlight{
      border-bottom:4px solid #409eff;
      color: #fff;
    }
     .router-link-exact-active, .router-link-active{
         color: #fff;
    }
</style>
