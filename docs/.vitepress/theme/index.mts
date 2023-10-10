import Theme from "vitepress/theme";
import "./styles/vars.css";
import "./styles/font.css";
import "../../../dist/index.css";
import "./styles/demo1.css";
import initDemo1 from "./demo";
import initDemo2 from "./demo2";

let flag = true;
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.mixin({
      async mounted() {
        //你自己的插件地址

        if (flag) {
          if (window.location.pathname === "/example/demo1.html") {
            initDemo1();
          }
          if (window.location.pathname === "/example/demo2.html") {
            initDemo2();
          }

          flag = false;
          setTimeout(() => {
            flag = true;
          }, 500);
        }
      },
    });
  },
};
