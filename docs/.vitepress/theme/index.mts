import Theme from "vitepress/theme";
import "./styles/vars.css";
import "./styles/demoblock.scss";
import "./styles/font.css";
import "../../../dist/index.css";
//@ts-ignore
// import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
//@ts-ignore
// import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

// import VpApp from '../../vitepress/index'
export default {
  ...Theme,
  enhanceApp({ app }) {},
};
