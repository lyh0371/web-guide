# 手动开启

<div class="wapper" id="app">
    <div class="btnWap">
      <button id="addRole">创建一个div</button>
      <span class="startGuide" id="startGuide">开启新手引导</span>
    </div>
    <div id="content">
      <div class="header">
        <button id="addInput" class="btn">新增</button>
      </div>
      <div id="input2">
        <div>
          <span>姓名：</span>
          <input type="text" id="input" placeholder="请输入您的姓名" />
        </div>
        <button class="btn" style="margin-top: 20px">提交</button>
      </div>
    </div>
  </div>

```js
<div class="wapper" id="app">
  <div class="btnWap">
    <button id="addRole">创建一个div</button>
    <span class="startGuide" id="startGuide">
      开启新手引导
    </span>
  </div>
  <div id="content">
    <div class="header">
      <button id="addInput" class="btn">
        新增
      </button>
    </div>
    <div id="input2">
      <div>
        <span>姓名：</span>
        <input type="text" id="input" placeholder="请输入您的姓名" />
      </div>
      <button class="btn" style="margin-top: 20px">
        提交
      </button>
    </div>
  </div>
</div>;
function init() {
  let webguide;
  document.querySelector("#addRole").addEventListener("click", () => {
    document.querySelector("#content").style.display = "block";
    webguide.next({
      id: 2,
      status: "start",
    });
  });
  document.querySelector("#addInput").addEventListener("click", () => {
    document.querySelector("#input").style.display = "block";
    webguide.next({
      id: 3,
      status: "start",
    });
  });
  document.querySelector("#input").addEventListener("click", () => {
    webguide.end();
  });
  document.querySelector("#startGuide").addEventListener("click", () => {
    webguide.start();
  });

  webguide = new webGuide({
    target: document.querySelector("#app"),
    props: {
      settings: {
        immediate: false,
        stepArr: [
          {
            id: 1,
            element: () => document.querySelector("#addRole"),
            popover: {
              title: "点击这里",
              description: "点击这里可创建一个全新的div哦",
            },
          },
          {
            id: 2,
            element: () => document.querySelector("#addInput"),
            popover: {
              title: "点击这里",
              description: "点击这里可创建一个Input框哦！",
            },
          },
          {
            element: () => document.querySelector("#input"),
            id: 3,
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
