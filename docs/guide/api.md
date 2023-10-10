---
page: true
title: 指南
sidebar: true
aside: true
footer: true
returnToTop: false
---

# API

## 属性

| 属性名    |                 说明 |   类型   | Default |
| --------- | -------------------: | :------: | :-----: |
| immediate |         是否立即触发 | `boolen` | `false` |
| logo      | 引导组件的 logo 地址 | `string` |         |
| stepArr   |  见下方`stepArr`文档 | `array`  |         |

## stepArr

| 属性名  |                                   说明 |                   类型                   | Default  |
| ------- | -------------------------------------: | :--------------------------------------: | :------: |
| element |                要在哪个 dom 元素上触发 |                 DOM 元素                 |
|         |
| trigger | 事假如何触发 `immediate=false`时可不传 | `"click" 、 "hover" 、 "focus" 、"blur"` | `click`  |
| name    |             非必传，对于此条数据的说明 |                 `string`                 |          |
| id      |                       必传，且不可重复 |             `string、number`             |          |
| delayed |                       时间延时触发时间 |                 `number`                 | 300 毫秒 |
| popover |                    见下方`popover`文档 |                 `object`                 |          |

## popover

| 属性名      | 说明 |   类型   | Default |
| ----------- | ---: | :------: | :-----: |
| title       | 标题 | `string` |         |
| description | 描述 | `string` |         |

## 事件

| 事件名 |             说明 |        类型         | Default |
| ------ | ---------------: | :-----------------: | :-----: |
| start  | 手动开始触发引导 |     `Function`      |         |
| next   |     执行分步引导 | 入参 见 `NextProps` |         |
| end    |         引导结束 | 入参 见 `NextProps` |         |

## NextProps

| 参数   |                     说明 |             类型             | Default |
| ------ | -----------------------: | :--------------------------: | :-----: |
| name   | 非必填 对应 `stepArr` id |           `string`           |         |
| id     |  必填，对应 `stepArr` id |       `string、number`       |         |
| status |             执行分步引导 | 开始："start" 、 结束："end" |         |
