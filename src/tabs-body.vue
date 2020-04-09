<template>
  <div class="tabs">
    <slot></slot>
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
  
</style>