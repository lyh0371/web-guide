<script lang="ts">
  import { onMount } from "svelte";
  import type { Options } from "./types";
  import { getEle, getStyles, setStyle } from "./utils";
  import Tip from "./Tip.svelte";
  export let options: Options[];
  let finish = false; // 是否结束

  let step = 0; // 当前步骤
  $: optItem = options[step];
  let ele: HTMLElement;
  let oldStyles = {} as CSSStyleDeclaration;

  const start = async () => {
    ele = await getEle(optItem.element); // 当前操作的Dom对象

    const { width } = ele.getBoundingClientRect();
    // 给 ele 设置样式

    oldStyles = getStyles(ele);

    console.log("oldStyles", oldStyles);

    setStyle(ele, {
      position: "fixed",
      zIndex: "9999998",
      width: width + "px",
      boxShadow: `rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px`,
    } as CSSStyleDeclaration);

    ele.addEventListener(optItem.trigger, async () => {
      // 把样式重置回来
      setStyle(ele, oldStyles);

      ele.removeEventListener(optItem.trigger, () => {});
      step = step + 1;

      console.log(step, options.length);

      if (step >= options.length) {
        isFinish();
        return false;
      }
      setTimeout(() => {
        start();
      }, 10);
    });
  };

  const isFinish = () => {
    console.log("结束");
    finish = true;
  };
  onMount(start);
</script>

<div style="">
  {#if !finish}
    <div class="web-guide__overlay"></div>
    <Tip {optItem}></Tip>
  {/if}
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
