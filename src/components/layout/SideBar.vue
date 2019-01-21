<template>
    <div class="side-bar">
        <ul v-for="(item, index) in menu" :key="index" >
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
        width:300px;
        float: left;
    }
</style>
