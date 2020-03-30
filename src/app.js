import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-icon',Icon)
new Vue({
  el: '#app',
  data : {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

import chai from 'chai'
const expect = chai.expect
//单元测试
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon : 'settings'
    }
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings');
  button.$el.remove();
  button.$destroy();
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon : 'settings',
      loading: true
    }
  })
  vm.$mount()
  const useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading');
  vm.$el.remove();
  vm.$destroy();
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon : 'settings',
      iconPosition : 'right'
    }
  })
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  const {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2');
  vm.$el.remove();
  vm.$destroy();
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon : 'settings',
    }
  })
  vm.$mount()
  vm.$on('click',()=>{
    console.log(1)
  })
  //希望函数被执行
  const button = vm.$el
  button.click();
}