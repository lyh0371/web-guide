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
        return true;
      },
    },
    {
      element: () => document.querySelector("#idDivBtn"),
      trigger: "click",
      speech: "很好,您点击了这个按钮!",
      popover: {
        title: "请点击这里可以改变颜色",
        description: "点击这里可以改变颜色",
      },
      isFinish: () => {
        return true;
      },
    },
  ];
  let showDiv = false;
  const handleClickDiv = () => {
    showDiv = true;
  };

  const divBtnClick = () => {
    const div = document.querySelector("#isDiv") as HTMLElement;
    div.style.backgroundColor = "red";
  };
</script>

<div>
  <div>
    <button
      id="addDiv"
      on:click={handleClickDiv}
      class="w-100px bg-hex-0170fe h-40px text-hex-fff m-0px absolute left-200px"
      >新增DIV</button
    >
    {#if showDiv}
      <div
        id="isDiv"
        class="h-200px bg-hex-287 flex justify-center items-center text-hex-fff"
      >
        <button
          id="idDivBtn"
          on:click={divBtnClick}
          class=" bg-hex-0170fe h-40px text-hex-fff m-20px px-10px"
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
