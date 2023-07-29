export interface Options {
  element: string | { (): HTMLElement }; // 发生在哪个元素上
  trigger?: "click" | "hover" | "focus" | "blur"; // 事件类型
  speech?: string; // 音频 可以是链接 也是可以是字，如果是子的话 会自己读
  popover?: {
    // 标题和描述
    title: string;
    description?: string;
  };
  isFinish?: () => boolean; //  步骤完成的标识，如果为true就代表完成，进行下一个步骤
}
