<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GuluCollapseItem',
    props: {
      title: {
        type: String,
        required: true
      },
      name:{
        type : String,
      }
    },
    data() {
      return {
        open: false,
      }
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (name) => {
        if(name === this.name){
          this.show()
        }else{
          this.close()
        }
      })
    },
    methods: {
      toggle() {
        if (this.open) {
          this.open = false
        } else {
          this.eventBus.$emit('update:selected', this.name)
        }
      },
      show(){
        this.open = true
      },
      close(){
        this.open = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  $grey: grey;
  $border-radius: 4px;
  .collapseItem {
    > .title {
      border: 1px solid $grey;
      background: #ddd;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }

    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }

    > .content {
      padding: 8px;
    }
  }
</style>