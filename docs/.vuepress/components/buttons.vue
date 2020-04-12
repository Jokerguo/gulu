<template>
  <div>
    <hr>
    <h3><strong>按钮展示</strong></h3>

    <h4><strong>默认按钮</strong></h4>
    <g-button>默认按钮</g-button>
    <pre><code>{{button1}}</code></pre>


    <h4><strong>图标按钮</strong></h4>
    <g-button icon="settings">图标按钮</g-button>
    <g-button icon="info">图标按钮</g-button>
    <g-button icon="error">图标按钮</g-button>
    <g-button icon="thumbs-up">图标按钮</g-button>
    <g-button icon="download">图标按钮</g-button>
    <g-button icon="down" icon-position="right">图标按钮</g-button>
    <pre><code>{{button2}}</code></pre>

    <h4><strong>按钮组</strong></h4>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <pre><code>{{button3}}</code></pre>

    <h4><strong>禁用按钮</strong></h4>
    <g-button disabled>禁用按钮</g-button>
    <pre><code>{{button4}}</code></pre>

    <h4><strong>加载中</strong></h4>
    <g-button :loading="true">加载中</g-button>
    <pre><code>{{button5}}</code></pre>


  </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      'g-button': Button,
      'g-button-group':ButtonGroup
    },
    data() {
      return {
        button1: `
<g-button>默认按钮</g-button>
      `,
        button2:`
<g-button icon="settings">图标按钮</g-button>
<g-button icon="info">图标按钮</g-button>
<g-button icon="error">图标按钮</g-button>
<g-button icon="thumbs-up">图标按钮</g-button>
<g-button icon="download">图标按钮</g-button>
<g-button icon="down" icon-position="right">图标按钮</g-button>
        `,
        button3:`
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>更多</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
        `,
        button4:`
<g-button disabled>禁用按钮</g-button>
        `,
        button5:`
<g-button :loading="true">默认按钮</g-button>
        `
      }
    }
  }
</script>