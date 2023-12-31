import "../../../dist/index.css";
import webGuide from "../../../dist/index.es.js";

function init() {
  setTimeout(() => {
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
              speech: "很好,您点击了这个按钮!",
              popover: {
                title: "点击这里",
                description: "点击这里可创建一个全新的div哦",
              },
            },
            {
              element: () => document.querySelector("#addInput"),
              trigger: "click",
              speech: "很好,您点击了这个按钮!",
              popover: {
                title: "点击这里",
                description: "点击这里可创建一个Input框哦！",
              },
            },
            {
              element: () => document.querySelector("#input"),
              trigger: "click",
              speech: "很好,您点击了这个按钮!",
              popover: {
                title: "输入姓名",
                description: "请输入姓名，以便系统可以找到您！",
              },
            },
          ],
        },
      },
    });
  }, 500);
}

export default init;
