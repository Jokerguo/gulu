<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper"
         :class="`position-${position}`" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
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
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        const {height: height2} = contentWrapper.getBoundingClientRect()
        let positions = {
          top: {top: top + window.scrollY, left: left + window.scrollX},
          bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
          left: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX},
          right: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX + width},
        }
        if (contentWrapper) {
          contentWrapper.style.left = positions[this.position].left + 'px'
          contentWrapper.style.top = positions[this.position].top + 'px'
        }
      },
      onClickDocument(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) {return}
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) {return}
        this.close()
        console.log('document')
      },
      open() {
        this.visible = true
        setTimeout(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        }, 0)
      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
            console.log('click')
          } else {
            this.open()
          }
        }
      }

    },
  }
</script>

<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    /*box-shadow: 0 0 3px rgba(0,0,0,.5);*/
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
    background: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0px;
      height: 0px;
      position: absolute;
      left: 10px;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before {border-top-color: $border-color;top: 100%;}

      &::after {border-top-color: white;top: calc(100% - 1px);}
    }

    &.position-bottom {
      margin-top: 10px;
      &::before {border-bottom-color: $border-color;bottom: 100%;}
      &::after {border-bottom-color: white;bottom: calc(100% - 1px);}
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {border-left-color: $border-color;left: 100%;}
      &::after {border-left-color: white;left: calc(100% - 1px)}
    }

    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        transform: translateY(-50%);
        right: 150%;
        top: 50%;
      }
      &::before {border-right-color: $border-color;}
      &::after {border-right-color: white;}
    }

  }
</style>