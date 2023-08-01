<script lang="ts">
  import { onMount } from "svelte";
  import type { Options } from "./types";
  import { getEle, setStyle } from "./utils";
  import Tip from "./Tip.svelte";
  export let options: Options[];

  let step = 0; // 当前步骤
  $: optItem = options[step];
  let ele: HTMLElement;

  const start = async () => {
    ele = await getEle(optItem.element); // 当前操作的Dom对象
    // 给 ele 设置样式
    setStyle(ele, {
      position: "fixed",
      zIndex: "9999998",
      boxShadow: `rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px`,
    } as CSSStyleDeclaration);

    ele.addEventListener(optItem.trigger, async () => {
      // 判断用户有没有点击
      step++;

      ele = await getEle(options[step].element); // 当前操作的Dom对象

      const { width } = ele.getBoundingClientRect();

      // 给 ele 设置样式
      setStyle(ele, {
        position: "absolute",
        zIndex: "9999998",
        width: width + "px",
        boxShadow: `rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px`,
      } as CSSStyleDeclaration);
    });
  };
  onMount(start);
</script>

<div style="">
  <div class="web-guide__overlay"></div>
  <Tip {optItem}></Tip>
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
