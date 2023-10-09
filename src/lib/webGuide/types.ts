export interface StepArr {
  element: string | { (): HTMLElement }; // 发生在哪个元素上
  trigger?: "click" | "hover" | "focus" | "blur"; // 事件类型
  name?: string; // 分步提示的名称
  id: number; // ID
  speech?: string; // 音频 可以是链接 也是可以是字，如果是子的话 会自己读
  popover?: {
    // 标题和描述
    title: string;
    description?: string;
  };
  delayed?: number; // 延时时间 如果不设置，默认为300 毫秒
}

export interface Settings {
  stepArr: StepArr[];
  immediate?: boolean; // 是否立即执行
  logo?: string; // 图片地址
}

export interface NextProps {
  name?: string;
  id: number;
  status: "start" | "finish" | "pause";
}
