const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props',function () {
    it('接收autoClose',(done)=>{
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData :{
          autoClose : true,
          autoCloseDelay: 1
      }
      }).$mount(div)
      vm.$on('close',()=>{
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('接收closeButton',()=>{
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData :{
          closeButton:{
            text:'测试',
            callback
          }
        }
      }).$mount()
      let closeElement = vm.$el.querySelector('.close')
      expect(closeElement.textContent.trim()).to.eq('测试')
      closeElement.click()
      expect(callback).to.have.been.called
    })
    it('接收enableHtml',()=>{
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData :{
          enableHtml: true
          }
      })
      vm.$slots.default = ['<strong id="xixi">嘻嘻</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#xixi')
      expect(strong).to.exist
    })
    it('接收position',()=>{
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData :{position: 'bottom'}
      }).$mount()
      console.log(vm.$el)
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })

  })
})