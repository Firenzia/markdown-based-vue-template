<template>
    <div class="demo">
        <iframe src="http://localhost:8080/#/demo/components/button" frameborder="0" class="iframe"></iframe>
    </div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
    .demo{
        width:343px;
        height: 700px;
        float: left;
        background: url('../../assets/img/iphone.png');
        background-size: cover
    }
    .iframe{
        position: relative;
        left:20px;
        top:80px;
    }
</style>
