<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { StepArr } from "./types";
  import { getDomDiection, getEle, setStyle } from "./utils";
  import { defaultDelayed } from "../const";
  const dispatch = createEventDispatcher();
  let showContent = false;
  const top: string = "";
  const left: string = "";
  export let optItem: StepArr;

  const piglogo =
    "//oss-my-official-website.oss-cn-beijing.aliyuncs.com/upload/20230731/dbf62e6a5acf5e7da04b444bb04727d0.png";

  // 设置位置
  const setTipPosition = async (optItem: StepArr) => {
    const tagetDom = await getEle(optItem.element);

    const tipDom = document.querySelector(".web-guide__tip") as HTMLElement;

    // x轴
    let xData: {
      dir: "left" | "right";
      value: number;
    } = {
      dir: "left",
      value: 0,
    };

    // y轴
    let yData: {
      dir: "top" | "bottom";
      value: number;
    } = {
      dir: "top",
      value: 0,
    };

    const { left, right, width, bottom, top, height } =
      getDomDiection(tagetDom);
    const {
      left: tipLeft,
      right: tipRight,
      width: tipWidth,
    } = getDomDiection(tipDom);
    // 判断目标是距离左边近还是右边近
    xData.dir = "left";
    xData.value = left;

    if (bottom > top) {
      yData.dir = "top";
      yData.value = top + height + 10;
    }
    // 使用远的那一边放提示框，如何还放不下 就吧提示框放下面
    // 如果下面也放不下，那就把提示框放上面

    // @ts-ignore
    setStyle(tipDom, {
      [xData.dir]: xData.value + "px",
      [yData.dir]: yData.value + "px",
    } as CSSStyleDeclaration);
  };
  setTipPosition(optItem);
  $: {
    showContent = false;
    setTimeout(() => {
      setTipPosition(optItem);
      showContent = true;
    }, optItem.delayed ?? defaultDelayed);
  }

  const endHandle = () => {
    dispatch("guideFinish");
  };
</script>

{#if showContent}
  <div class="web-guide__tip" id="guide__tip">
    <div class="tip__wapper flex items-center">
      <img src={piglogo} class="w-80px" alt="" />
      <div class="pl-10px">
        <h2 class="font-700 text-18px">{optItem.popover.title}</h2>
        <p
          class="text-14px mt-8px tracking-2px leading-18px text-hex-666 max-h-200px overflow-y-auto"
        >
          {optItem.popover.description}
        </p>
      </div>
    </div>
    <div class="flex justify-end">
      <button on:click={endHandle} class="text-12px text-hex-888 cursor-pointer"
        >结束引导</button
      >
    </div>
    <div class="introjs-arrow"></div>
  </div>
{/if}

<style lang="scss">
  .web-guide__tip {
    position: absolute;
    padding: 20px;
    padding-bottom: 10px;
    background-color: #fff;
    z-index: 9999998;
    border-radius: 10px;
    max-width: 340px;
    max-height: 200px;
    top: 80px;
    left: 0px;
    .introjs-arrow {
      border: 18px solid transparent;
      border-bottom-color: #fff;
      display: inline-block;
      position: absolute;
      left: 20px;
      top: -26px;
    }
  }
</style>
