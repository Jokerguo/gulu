<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'GuluPopover',
    data() {
      return {visible: false}
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        if (this.visible === true) {
          this.$nextTick(() => {
            document.body.appendChild(this.$refs.contentWrapper)
            let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left+window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top+window.scrollY + 'px'
            const x = () => {
              this.visible = false
              console.log('document隐藏')
              document.removeEventListener('click', x)
            }
            document.addEventListener('click', x)
          })
        } else {
          console.log('vm隐藏')
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
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid blue;
    transform: translateY(-100%);
  }
</style>