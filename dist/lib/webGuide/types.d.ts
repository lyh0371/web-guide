export interface StepArr {
    element: string | {
        (): HTMLElement;
    };
    trigger?: "click" | "hover" | "focus" | "blur";
    name?: string;
    id: number;
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
export interface NextProps {
    name?: string;
    id: number;
    status: "start" | "end";
}
export interface WebGuide {
    start: () => void;
    end: () => void;
    next: (nextProps: NextProps) => void;
}
