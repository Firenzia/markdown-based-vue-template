<template>
    <div class="demo">
        <!-- <iframe src="/#/demo/components/button" frameborder="0" class="iframe"></iframe> -->
        <div class="content">
          <component :is="module" v-if="module.length>0"></component>
        </div>
    </div>
</template>

<script>
//  使用异步组件
const button = () => import('../../views/components/button.vue')
export default {
  data () {
    return {
    }
  },
  components: {
    buttonS: button
  },
  computed: {
    iframeSrc () {
      return this.$route.fullPath.replace('doc', 'demo')
    },
    module () {
      if (/show/.test(window.location.href)) {
        return window.location.href.split('/').pop().split('?')[0] + 'S'
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .demo{
        width:343px;
        height: 700px;
        margin:200px 0 0 100px;
        float: left;
        background: url('../../assets/img/iphone.png');
        background-size: cover
    }
    .content{
        position: relative;
        left:20px;
        top:90px;
        width: 300px;
        height: 533px;
        padding: 30px 10px;
        box-sizing: border-box;
    }
</style>
