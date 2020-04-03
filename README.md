轱辘 - Vue UI 组件

[![Build Status](https://travis-ci.org/Jokerguo/gulu.svg?branch=master)](https://travis-ci.org/Jokerguo/gulu)

## 介绍

学习Vue的过程中做的一个UI框架，希望对你有用

## 开始使用

1. 安装
使用本框架前，css设置border-box
```
*,*::before,*::after{box-sizing: border-box}
```
IE８及以上浏览器都支持此样式

还需要设置颜色等变量 （后续会改为scss变量）
```
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
IE 15 及以上浏览器都支持此样式

2. 安装 gulu
```
    npm i --save gulu-testing
```

3. 引入 gulu

```
    import {Button} from 'gulu-testing'
    import 'gulu-testing/dist/index.css'

    export default {
      name: 'App',
      components: {
        'g-button' : Button
      }
    }
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
