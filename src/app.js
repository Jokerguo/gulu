import Vue from 'vue'
import Button from './button'
import Icon from './svg'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import Plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(Plugin)
new Vue({
    el: '#app',
    data: {
      loading1: false,
      loading2: true,
      loading3: false,
      message: 'hi'
    },
    methods: {
      showToast(){
        this.$toast('我是message')
      }
    },
  }
)
