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

## 手动触发逻辑

插件对外暴露一个函数 `next` 可以传参数，如果传参数就自动跳转到哪一个步走

## 如何让 vscode 格式化 .svelte 文件

prettier-plugin-svelte

// 在线文字转语音
// https://ttsmaker.com/zh-cn

```js
let utter = new SpeechSynthesisUtterance("非常方便");
utter.volume = 1;
// utter.pitch = 0.5; //音调
utter.rate = 1;
speechSynthesis.speak(utter);
```
