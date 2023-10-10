# 自动开启

<div class="wapper" id="app">
    <button id="addRole">创建一个div</button>
    <div id="content">
      <div class="header">
        <button id="addInput" class="btn">新增</button>
      </div>
      <div id="input">
        <div>
          <span>姓名：</span>
          <input type="text" placeholder="请输入您的姓名" />
        </div>
        <button class="btn" style="margin-top: 20px">提交</button>
      </div>
    </div>
  </div>

```js
<div class="wapper" id="app">
  <button id="addRole">创建一个div</button>
  <div id="content">
    <div class="header">
      <button id="addInput" class="btn">
        新增
      </button>
    </div>
    <div id="input">
      <div>
        <span>姓名：</span>
        <input type="text" placeholder="请输入您的姓名" />
      </div>
      <button class="btn" style="margin-top: 20px">
        提交
      </button>
    </div>
  </div>
</div>;

function init() {
  document.querySelector("#addRole").addEventListener("click", () => {
    document.querySelector("#content").style.display = "block";
  });
  document.querySelector("#addInput").addEventListener("click", () => {
    document.querySelector("#input").style.display = "block";
  });
  new webGuide({
    target: document.querySelector("#app"),
    props: {
      settings: {
        immediate: true,
        stepArr: [
          {
            element: () => document.querySelector("#addRole"),
            trigger: "click",
            popover: {
              title: "点击这里",
              description: "点击这里可创建一个全新的div哦",
            },
          },
          {
            element: () => document.querySelector("#addInput"),
            trigger: "click",
            popover: {
              title: "点击这里",
              description: "点击这里可创建一个Input框哦！",
            },
          },
          {
            element: () => document.querySelector("#input"),
            trigger: "click",
            popover: {
              title: "输入姓名",
              description: "请输入姓名，以便系统可以找到您！",
            },
          },
        ],
      },
    },
  });
}
init();
```
