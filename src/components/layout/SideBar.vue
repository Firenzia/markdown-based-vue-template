<template>
    <div class="side-bar">
        <ul v-for="(item, index) in menu" :key="index" class="menu">
            {{item.category | pipe}}
            <li v-for="(sub, index) in item.modules" :key="index">
                <router-link :to= "'/doc/'+item.category+'/'+sub.link">
                {{sub.name | pipe}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { 'category': 'specifications',
          'modules':
          [
            { name: 'install',
              link: 'install' },
            { name: 'use',
              link: 'use' }
          ]
        },
        { 'category': 'components',
          'modules':
         [
           { name: 'input',
             link: 'input' },
           { name: 'button',
             link: 'button?showDemo=true' },
           { name: 'popup',
             link: 'popup' }
         ]
        },
        { 'category': 'resource',
          'modules':
         [
           { name: 'icon',
             link: 'icon' },
           { name: 'color',
             link: 'color' }
         ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
    .side-bar{
        width:20%;
        float: left;
        padding:20px 20px 0 200px;
        box-sizing: border-box;
        .menu{
            margin-bottom: 22px;
            font-size:16px;
            li{
                padding:8px 0 2px 10px;
                font-size:18px;
            }
        }
    }
</style>
