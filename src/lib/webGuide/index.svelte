<script lang="ts">
  import { onMount } from "svelte";
  import type { Next, Settings } from "./types";
  import { getEle, getStyles, setStyle } from "./utils";
  import Tip from "./Tip.svelte";
  import { defaultDelayed } from "../const";
  export let settings: Settings;
  const stepArr = settings.stepArr;
  let finish = false; // 是否结束
  let playGuide = settings.immediate; // 是否执行
  let step = 0; // 当前步骤
  let oldStyles = {} as CSSStyleDeclaration;
  async function getTargetEle() {
    let optItem = stepArr[step];
    return await getEle(optItem.element); // 当前操作的Dom对象
  }
  const start = async () => {
    let optItem = stepArr[step];
    const ele = await getTargetEle();
    const { width } = ele.getBoundingClientRect();
    // 给 ele 设置样式
    oldStyles = getStyles(ele);
    setStyle(ele, {
      position: "relative",
      zIndex: "9999998",
      width: width + "px",
      boxShadow: `rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px`,
    } as CSSStyleDeclaration);

    ele.addEventListener(optItem.trigger, async () => {
      // 把样式重置回来
      setStyle(ele, oldStyles);
      ele.removeEventListener(optItem.trigger, () => {});
      step = step + 1;
      // 结束
      if (step >= stepArr.length) {
        step = step - 1;
        isFinish();
        return false;
      }

      setTimeout(() => {
        start();
      }, optItem.delayed ?? defaultDelayed);
    });
  };

  const isFinish = async () => {
    finish = true;
    const ele = await getTargetEle();
    setStyle(ele, oldStyles);
  };
  // 是否立即执行
  if (playGuide) {
    onMount(start);
  }
  // 分步函数
  export function next({ step: index }: Next) {
    playGuide = true;
    step = step;
    start();
  }
</script>

<div style="">
  {#if !finish && playGuide}
    <div class="web-guide__overlay">111</div>
    <Tip optItem={stepArr[step]} {settings} on:guideFinish={isFinish}></Tip>
  {/if}
</div>

<style>
  .web-guide__overlay {
    inset: 0px;
    position: fixed;
    cursor: pointer;
    box-sizing: content-box;
    z-index: 999990;
    opacity: 0;
    transition: all 0.3s ease-out;
  }
</style>
