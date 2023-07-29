<script lang="ts">
  import { onMount } from "svelte";
  import type { Options } from "./types";
  import { getEle, setStyle } from "./utils";
  export let options: Options[];

  const step = 0; // 当前步骤
  const optItem = options[step];

  const start = async () => {
    let ele = await getEle(optItem.element); // 当前操作的Dom对象

    // 给 ele 设置样式
    setStyle(ele, {
      position: "fixed",
      zIndex: "9999998",
      boxShadow: `rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px`,
    } as CSSStyleDeclaration);

    ele.addEventListener(optItem.trigger, () => {
      // 判断用户有没有点击

      console.log("click");
    });
  };
  onMount(start);
</script>

<div style="">
  <div class="web-guide__overlay"></div>
</div>

<style>
  .web-guide__overlay {
    inset: 0px;
    position: fixed;
    cursor: pointer;
    box-sizing: content-box;
    z-index: 999999;
    opacity: 0;
    transition: all 0.3s ease-out;
  }
</style>
