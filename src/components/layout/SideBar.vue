<template>
    <div class="side-bar">
        <ul v-for="(item, index) in menu" :key="index" class="menu">
            {{item.category | pipe}}
            <li v-for="(sub, index) in item.modules" :key="index">
                <!-- <router-link :to= "'/doc/'+item.category+'/'+sub.link"> -->
                 <router-link :to= sub.link>
                {{sub.name | pipe}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import menu from '@/config/menu'
export default {
  data () {
    return {
      menu: menu
    }
  }
}
</script>
<style lang="scss" scoped>
    a{color: #888}
    .side-bar{
        width:360px;
        float: left;
        padding:40px 20px 0 200px;
        box-sizing: border-box;
        .menu{
            margin-bottom: 22px;
            font-size:18px;
            width: 132px;
            li{
                padding:8px 0 0px 20px;
                font-size:16px;
                line-height:40px;
                height: 40px;
                a:hover{
                  color:#409eff;
                }
            }
        }
    }
     .router-link-exact-active, .router-link-active{
      color:#409eff;
    }
</style>
