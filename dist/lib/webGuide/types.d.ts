export interface StepArr {
    element: string | {
        (): HTMLElement;
    };
    trigger?: "click" | "hover" | "focus" | "blur";
    speech?: string;
    popover?: {
        title: string;
        description?: string;
    };
    delayed?: number;
}
export interface Settings {
    stepArr: StepArr[];
    immediate?: boolean;
    logo?: string;
}
export interface Next {
    step: number | "finish";
}
