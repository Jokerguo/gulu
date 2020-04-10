<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluPopover',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        if (this.visible === true) {
          this.$nextTick(() => {
            const x = ()=>{
              this.visible = false
              console.log('document')
              document.removeEventListener('click',x)
            }
            document.addEventListener('click', x)
          })
        }else{
          console.log('vm')
        }

      },

    },
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid blue;
    }
  }
</style>