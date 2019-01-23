import Vue from 'vue'
import filter from '@/filter'
import { Button, Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.filter('pipe', filter)
Vue.use(Button, Input)
