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
  created(){
  },
    methods: {
      showToast1(){
        this.showToast('top')
      },
      showToast2(){
        this.showToast('middle')
      },
      showToast3(){
        this.showToast('bottom')
      },
      showToast(position){
        this.$toast(`${parseInt(Math.random() * 100)}你的余额需要充值`,{
          position,
          enableHtml: false,
          closeButton: {text:'已充值',callback(){console.log('他说已经充值了')}},
          autoClose: 3
        })
      }
    },
  }
)
