<script lang="ts">
  import { createPopper } from "@popperjs/core";
  import type { Options } from "@popperjs/core";
  import { createEventDispatcher } from "svelte";
  import type { StepArr, Settings } from "./types";
  import { getEle } from "./utils";
  import { defaultDelayed } from "../const";

  const dispatch = createEventDispatcher();
  let showContent = false;
  export let optItem: StepArr;
  export let settings: Settings;
  const piglogo = settings.logo;
  // 设置位置
  const setTipPosition = async (optItem: StepArr) => {
    const tagetDom = await getEle(optItem.element);
    // x轴
    const tooltip = document.querySelector(
      "#web-guide__tooltip",
    ) as HTMLElement;
    createPopper(tagetDom, tooltip, {
      placement: "top",
      strategy: "fixed",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [15, 15],
          },
        },
      ],
    } as Options);
  };
  setTipPosition(optItem);
  $: {
    setTimeout(() => {
      setTipPosition(optItem);
    }, optItem.delayed ?? defaultDelayed);
  }
  const endHandle = () => {
    dispatch("guideFinish");
  };
</script>

<div class="web-guide__tip" id="web-guide__tooltip" role="tooltip">
  <div class="p-15px">
    <div class="tip__wapper flex items-start">
      {#if piglogo}
        <img src={piglogo} class="w-80px" alt="" />
      {/if}
      <div class="pl-10px">
        <h2 class="font-700 text-18px leading-24px text-hex-000">
          {optItem.popover.title}
        </h2>
        <p
          class="text-14px mt-8px tracking-2px leading-20px text-hex-666 max-h-200px overflow-y-auto"
        >
          {optItem.popover.description}
        </p>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        on:click={endHandle}
        class="text-12px text-hex-888 cursor-pointer pt-10px">结束引导</button
      >
    </div>
  </div>
  <div id="arrow" data-popper-arrow></div>
</div>

<style lang="scss">
  .web-guide__tip {
    background-color: #fff;
    z-index: 9999999;
    border-radius: 10px;
    max-width: 340px;
  }

  #arrow,
  #arrow::before {
    position: absolute;
    width: 20px;
    height: 20px;
    background: inherit;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }
</style>
