---
page: true
title: 指南
sidebar: false
aside: true
footer: true
returnToTop: false
---

# 指南

## 使用场景

社区有很多关于新手引导的组件，比如优秀的 [driver.js](https://github.com/kamranahmedse/driver.js)、[shepherd](https://github.com/shipshapecode/shepherd)、[introjs](https://introjs.com/) ...

但这些组件主要解决的还是`静态页面`的引导，试用与需要引导的功能都在静态页面上呈现出来的场景。

而 `web-guide` 主要解决的是`动态页面`的引导，即需要引导的组件可以动态的按照先后顺序出现的场景。

## 如何使用

### 1. 安装

```sh
npm i @liuyahui666/web-guide -S
```

或者

```sh
yarn  add  @liuyahui666/web-guide -S

```

### 2. 使用

```js
import webGuide from "web-guide";

new webGuide({
  target: document.querySelector("#app"), // 页面的跟元素
  props: {
    settings: {
      immediate: true, // 是否立即开始引导
      stepArr: [ // 每一步的配置
        {
          element: () => document.querySelector("#addDiv"), // 在那个元素上触发
          trigger: "click", // 如何触发
          popover: {
            title:"请点击div", // 标题
            description:"点击div有惊喜哦", // 详情
          },
        },
        ...
      ],
    },
  },
});
```
