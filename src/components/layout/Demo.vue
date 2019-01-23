<template>
    <div class="demo">
        <iframe src="/#/demo/components/button" frameborder="0" class="iframe"></iframe>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
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
    .iframe{
        position: relative;
        left:20px;
        top:90px;
        width: 300px;
        height: 533px;
        padding: 30px 10px;
        box-sizing: border-box;
    }
</style>
