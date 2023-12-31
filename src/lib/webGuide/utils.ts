// 验证传进来的 element
export const getEle = (ele: string | { (): HTMLElement }): HTMLElement => {
  if (typeof ele === "string") {
    if (document.querySelector(ele))
      return document.querySelector(ele) as HTMLElement;
    else throw new Error(`未获取到${ele}元素`);

    return;
  }
  if (typeof ele === "function") {
    if (ele()) return ele() as HTMLElement;
    else throw new Error(`未获取到${ele}元素`);

    return;
  } else throw new Error(`未获取到${ele}元素`);
};

// 设置元素的css
export const setStyle = (ele: HTMLElement, style: CSSStyleDeclaration) => {
  if (!ele) return false;
  for (const key in style) {
    ele.style[key] = style[key];
  }
};

// 获取元素距离屏幕的位置
export const getDomDiection = (myDiv: HTMLElement) => {
  if (!myDiv) return {};
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

export const getStyles = (ele: HTMLElement): CSSStyleDeclaration => {
  if (!ele) return {} as CSSStyleDeclaration;
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
  if (!ele) return false;
  ele.classList.add(name);
};

// 移除元素类名
export const removeClassName = (ele: HTMLElement, name: string) => {
  if (!ele) return false;
  ele.classList.remove(name);
};
