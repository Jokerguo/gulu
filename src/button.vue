<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`] : true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href=`#i-${icon}`></use>
    </svg>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
  export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
      iconPosition:{
        type: String,
        default: 'left',
        validator(value) {
          return !(value !== 'left' && value !== 'right')
        }
      }
    }
  }

</script>

<style lang="scss">
  .g-button {
    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      border-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
      order: 1;
      margin-right: .2em;
    }

    > .content {
      order: 2;
    }

    &.icon-right {
      .icon {
        order: 2;
        margin-right: 0;
        margin-left: .2em;
      }

      .content {
        order: 1;
      }
    }
  }

</style>