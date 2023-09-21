import Theme from "vitepress/theme";
import "./styles/vars.css";
import "./styles/font.css";
import "../../../dist/index.css";
import "./styles/demo1.css";
import init from "./demo";

let flag = true;
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.mixin({
      async mounted() {
        //你自己的插件地址
        if (flag) {
          init();
          flag = false;
          setTimeout(() => {
            flag = true;
          }, 500);
        }
      },
    });
  },
};
