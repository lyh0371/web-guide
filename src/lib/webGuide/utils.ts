// 验证传进来的 element
export const getEle = (
  ele: string | { (): HTMLElement },
): Promise<HTMLElement> => {
  return new Promise((res, req) => {
    setTimeout(() => {
      if (typeof ele === "string") {
        if (document.querySelector(ele))
          res(document.querySelector(ele) as HTMLElement);
        else throw new Error("未获取到element");

        return;
      }
      if (typeof ele === "function") {
        if (ele()) res(ele());
        else throw new Error("未获取到element");

        return;
      }
      throw new Error("未获取到element");
    }, 0);
  });
};

// 设置元素的css
export const setStyle = (ele: HTMLElement, style: CSSStyleDeclaration) => {
  for (const key in style) {
    ele.style[key] = style[key];
  }
};
