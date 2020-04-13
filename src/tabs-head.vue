<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
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
      this.eventBus.$on('update:selected',(name,vm,parentVm)=>{
        let parentLeft = parentVm.$el.getBoundingClientRect().left
        let {width,left} =vm.$el.getBoundingClientRect()
          this.$refs.line.style.width = width+'px'
          this.$refs.line.style.left = left - parentLeft +'px'
      })
    },
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  .tabs-head{
    height: $tab-height;
    display: flex;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid #ccc;
    > .line{
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition:all 400ms;
    }
    > .actions-wrapper{
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right:1em ;
    }
  }
</style>