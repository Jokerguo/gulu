<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
    @change="$emit('change',$event)"
    @input="$emit('input',$event)"
    @focus="$emit('focus',$event)"
    @blur="$emit('blur',$event)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './icon'

  export default {
    components: {Icon},
    name: '',
    props: {
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String,
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;

  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    > :not(:last-child){
      margin-right: 0.5em;
    }
    > input {
      height: 32px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:hover {border-color: $border-color-hover;}

      &:focus {box-shadow: inset 0px 1px 3px $box-shadow-color;outline: none;}

      &[disabled] {
        border-color: #aaa;
        color: #aaa;
        cursor: not-allowed;
      }
    }
    &.error {
      > input {
        border-color: $red;
        &:focus{
          box-shadow: inset 0px 1px 3px rgba(241,69,61,0.5)
        }
      }
    }
    .icon-error {fill: $red}
    .errorMessage {color: $red}
  }
</style>