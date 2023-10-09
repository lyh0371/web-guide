<script lang="ts">
  import { onMount } from "svelte";
  import WebGuide from "./lib/webGuide/index.svelte";
  import type { Settings } from "./lib/webGuide/types";
  let inx = 0;
  let child;
  let inpVal = "1111";
  let inputRef;
  const settings: Settings = {
    immediate: false,
    logo: "//oss-my-official-website.oss-cn-beijing.aliyuncs.com/upload/20230731/dbf62e6a5acf5e7da04b444bb04727d0.png",
    stepArr: [
      {
        element: () => document.querySelector("#addDiv"),
        trigger: "click",
        id: 1,
        speech: "很好,您点击了这个按钮!",
        popover: {
          title: "请点击div请点击div",
          description:
            "点击div有惊喜哦点击div有惊喜哦点击div有惊喜哦点击div有点击div有惊喜哦点击div有惊喜哦点击div有惊喜哦点击div有点击div有惊喜哦点击div有惊喜哦点击div有惊喜哦点击div有",
        },
      },
      {
        element: () => document.querySelector("#idDivBtn"),
        id: 2,
        delayed: 0,
        trigger: "click",
        speech: "很好,您点击了这个按钮!",
        popover: {
          title: "请点击这里可以改变颜色",
          description: "点击这里可以改变颜色",
        },
      },
    ],
  };

  let showDiv = false;
  const handleClickDiv = () => {
    showDiv = true;
    child.next({
      id: 1,
      status: "pause",
    });
  };
  const textHandle = () => {
    child.start();
  };

  const divBtnClick = () => {
    const div = document.querySelector("#isDiv") as HTMLElement;
    div.style.backgroundColor = "red";
    child.next({
      id: 2,
      status: "finish",
    });
  };

  const inputHandle = (e) => {
    console.log("e.target.value", e.target.value);

    inpVal = e.target.value;
  };

  onMount(() => {
    inputRef = document.querySelector("#inputElement");
  });
</script>

<div>
  <div>
    <button
      id="addDiv"
      on:click={handleClickDiv}
      class="w-100px bg-hex-0170fe h-40px text-hex-fff m-0px absolute top-0px left-100px"
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
        {#key showDiv}
          <input
            id="inputElement"
            type="text"
            on:input={inputHandle}
            bind:value={inpVal}
            bind:this={inputRef}
          />
        {/key}
      </div>
    {/if}
  </div>
  <WebGuide {settings} bind:this={child} />

  <button on:click={textHandle}>测试分步控制</button>
</div>
