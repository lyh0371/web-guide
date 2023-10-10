import "../../../dist/index.css";
import webGuide from "../../../dist/index.es.js";

function init() {
  let webguide;
  setTimeout(() => {
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
  }, 500);
}

export default init;
