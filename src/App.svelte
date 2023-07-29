<script lang="ts">
  import WebGuide from "./lib/webGuide/index.svelte";
  import type { Options } from "./lib/webGuide/types";

  const options: Options[] = [
    {
      element: () => document.querySelector("#addDiv"),
      trigger: "click",
      speech: "很好,您点击了这个按钮!",
      popover: {
        title: "请点击div",
        description: "点击div有惊喜哦",
      },
      isFinish: () => {
        if (document.querySelector("#isDiv")) {
          return true;
        }
        return false;
      },
    },
  ];
  let showDiv = false;
  const handleClickDiv = () => {
    showDiv = true;
  };
</script>

<div>
  <div>
    <button
      id="addDiv"
      on:click={handleClickDiv}
      class="w-100px bg-hex-0170fe h-40px text-hex-fff m-20px">新增DIV</button
    >
    {#if showDiv}
      <div
        id="isDiv"
        class="h-200px bg-hex-287 flex justify-center items-center text-hex-fff"
      >
        <button class=" bg-hex-0170fe h-40px text-hex-fff m-20px px-10px"
          >给DIV添加点颜色瞧瞧</button
        >
      </div>
    {/if}
  </div>
  <WebGuide {options} />
</div>

<style>
  /* #addDiv{
  box-shadow: rgba(33, 33, 33, 0.8) 0px 0px 1px 2px, rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px;
    opacity: 1;
    position: relative;
    z-index: 9999998;
} */
</style>
