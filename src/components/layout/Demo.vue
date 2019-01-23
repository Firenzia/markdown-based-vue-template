<template>
    <div class="demo">
        <!-- <iframe src="/#/demo/components/button" frameborder="0" class="iframe"></iframe> -->
        <div class="content">
          <demo/>
        </div>
    </div>
</template>

<script>
let module = window.location.href.split('/').pop().split('?')[0]
const demo = () => import('../../views/components/' + module + '.vue')
export default {
  data () {
    return {
    }
  },
  components: {
    demo
  },
  computed: {
    iframeSrc () {
      return this.$route.fullPath.replace('doc', 'demo')
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
