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

// 获取元素距离屏幕的位置
export const getDomDiection = (myDiv: HTMLElement) => {
  const rect = myDiv.getBoundingClientRect();
  const topDistance = rect.top;
  const bottomDistance = window.innerHeight - rect.bottom;
  const leftDistance = rect.left;
  const rightDistance = window.innerWidth - rect.right;
  return {
    top: topDistance,
    bottom: bottomDistance,
    left: leftDistance,
    right: rightDistance,
    width: rect.width,
    height: rect.height,
  };
};

// 获取元素原来的样式

export const getStyles = (ele: HTMLElement) => {
  const position = ele.style.position;
  const zIndex = ele.style.zIndex;
  const boxShadow = ele.style.boxShadow;

  return {
    position,
    zIndex,
    boxShadow,
  } as CSSStyleDeclaration;
};

// 给元素添加类名
export const addClassName = (ele: HTMLElement, name: string) => {
  ele.classList.add(name);
};

// 移除元素类名
export const removeClassName = (ele: HTMLElement, name: string) => {
  ele.classList.remove(name);
};
