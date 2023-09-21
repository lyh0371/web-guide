import Theme from "vitepress/theme";
import "./styles/vars.css";
import "./styles/font.css";
import "../../../dist/index.css";
import "./styles/demo1.css";
import init from "./demo";
//@ts-ignore
// import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
//@ts-ignore
// import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

// import VpApp from '../../vitepress/index'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.mixin({
      async mounted() {
        //你自己的插件地址
        init();
      },
    });
  },
};
