<script lang="ts">
  import { onMount } from "svelte";
  import type { NextProps, Settings } from "./types";
  import { getEle, getStyles, setStyle } from "./utils";
  import Tip from "./Tip.svelte";
  import pkg from "../../../build/package.json";
  import { defaultDelayed } from "../const";
  export let settings: Settings;
  const stepArr = settings.stepArr;
  let showGuide = false; // 是否显示
  let finishFlag = false; // 是否点击了完成
  let startIng = false; // 是否点击开始
  let playGuide = settings.immediate; // 是否立即执行
  let step = 0; // 当前步骤
  let oldStyles = {} as CSSStyleDeclaration;
  async function getTargetEle() {
    let optItem = stepArr[step];
    return getEle(optItem.element); // 当前操作的Dom对象
  }
  const _init = async () => {
    showGuide = true;
    try {
      const ele = await getTargetEle();
      const { width } = ele.getBoundingClientRect();
      oldStyles = getStyles(ele);
      setStyle(ele, {
        position: "relative",
        zIndex: "9999998",
        width: width + "px",
        boxShadow: `rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px`,
      } as CSSStyleDeclaration);

      const goNextCore = async () => {
        // 把样式重置回来
        setStyle(ele, oldStyles);
        ele.removeEventListener(stepArr[step]?.trigger, () => {});

        if (!addStep()) return false;
        showGuide = false;
        setTimeout(async () => {
          oldStyles = {} as CSSStyleDeclaration;
          await _init();
        }, stepArr[step]?.delayed ?? defaultDelayed);
      };

      // 如果是立即执行，则直接执行，并监听点击事件
      if (settings.immediate) {
        ele.addEventListener(stepArr[step]?.trigger, goNextCore);
      }
    } catch (error) {
      showGuide = false;
      step = 0;
      removeAll();
    }
  };

  const addStep = () => {
    if (!showGuide) return false;
    // 结束
    if (step >= stepArr.length - 1) {
      // step = step - 1;
      isFinish();
      return false;
    }
    step = step + 1;
    return true;
  };

  const removeAll = () => {
    const webguides = document.querySelectorAll("#web-guide");
    if (webguides) {
      webguides.forEach((item, index) => {
        if (index >= 1) {
          item.remove();
        }
      });
    }
  };

  const isFinish = async () => {
    showGuide = false;
    finishFlag = true;
    const ele = await getTargetEle();
    setStyle(ele, oldStyles);
    step = 0;
    removeAll();
  };

  // 是否立即执行
  if (playGuide) {
    onMount(() => {
      setTimeout(async () => {
        await _init();
      }, stepArr[step].delayed ?? defaultDelayed);
    });
  }

  // 开始分步执行
  // 分步函数

  export async function next(props: NextProps) {
    if (!startIng) return false;
    if (!props.id || !props.status) {
      console.warn("id or status is not exist");
      return false;
    }
    if (finishFlag) return false;
    showGuide = false;
    const index = stepArr.findIndex((item) => item.id === props.id);
    // 彻底完成
    if (props.status === "finish") {
      isFinish();
      return false;
    }
    // 暂停

    if (props.status === "pause") {
      const ele = await getTargetEle();

      setStyle(ele, oldStyles);
      return false;
    }

    // 开始

    const ele = await getTargetEle();
    if (index > 0) {
      const oele = getEle(stepArr[index - 1].element);
      setStyle(oele, oldStyles);
    }
    step = index;
    oldStyles = getStyles(ele);
    setTimeout(async () => {
      await _init();
    }, stepArr[step].delayed ?? defaultDelayed);
  }

  // 手动控制开始
  export function start() {
    showGuide = false;
    step = 0;
    startIng = true;

    setTimeout(async () => {
      await _init();
    }, stepArr[step].delayed ?? defaultDelayed);
  }

  console.info("web-guide当前使用版本", pkg.version);
</script>

<div id="web-guide">
  {#if showGuide}
    <div class="web-guide__overlay"></div>
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
