<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>

    </div>
  </div>
</template>

<script>
  export default {
    inject:['eventBus'],
    created() {
    },
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  .tabs-head{
    border: 1px solid black;
    height: $tab-height;
    display: flex;
    justify-content: flex-start;
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>