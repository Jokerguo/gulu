<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name:'GuluTabs',
    props:{
      selected:{
        type: String,
        require : true
      },
      direction:{
        type: String,
        default : 'Horizontal',
        validator(value){
          return ['Horizontal','vertical'].indexOf(value) >= 0
        }
      },
    },
    data(){
      return{
        eventBus : new Vue()
      }
    },
    provide(){
      return{
        eventBus: this.eventBus
      }
    },
    mounted() {
        if( this.$children.length === 0){
          console && console.warn && console.warn('tabs的子组件应该是tabs-head tabs-body')
        }
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'GuluTabsHead'){
          vm.$children.forEach((childVm)=>{
            if(childVm.$options.name === 'GuluTabsItem'
              && childVm.name === this.selected){
              this.eventBus.$emit('update:selected',this.selected,childVm,this)
            }
          })
        }
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>