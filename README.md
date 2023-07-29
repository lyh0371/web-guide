# web-guide(开发中)

于框架无关的 前端动态新手引导插件

## 参数

```ts
[
  {
    step: 1,
    element: "dom",
    trigger: "click",
    speech: "...mp3",
    popover: {
      title: "Title",
      description: "Description",
    },
    isFinish: () => {
      // 返回true 表示步骤1 彻底结束
      return true;
    },
  },
];
```

## 如何让 vscode 格式化 .svelte 文件

prettier-plugin-svelte
