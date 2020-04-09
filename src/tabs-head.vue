<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'GuluTabsHead',
    inject:['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected',(name,vm)=>{
        console.log(vm.$el)
        // let {width,height,top,left} =vm.$el.getBoundingClientRect()
        // console.log(width,height,top,left)
      })
    },
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  .tabs-head{
    border: 1px solid black;
    height: $tab-height;
    display: flex;
    justify-content: flex-start;
    position: relative;
    > .line{
      position: absolute;
      bottom: 0;
      width: 100px;
      border-bottom: 1px solid $blue;
    }
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>