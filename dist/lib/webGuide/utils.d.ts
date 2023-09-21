export declare const getEle: (ele: string | {
    (): HTMLElement;
}) => Promise<HTMLElement>;
export declare const setStyle: (ele: HTMLElement, style: CSSStyleDeclaration) => boolean;
export declare const getDomDiection: (myDiv: HTMLElement) => {
    top?: undefined;
    bottom?: undefined;
    left?: undefined;
    right?: undefined;
    width?: undefined;
    height?: undefined;
} | {
    top: number;
    bottom: number;
    left: number;
    right: number;
    width: number;
    height: number;
};
export declare const getStyles: (ele: HTMLElement) => CSSStyleDeclaration;
export declare const addClassName: (ele: HTMLElement, name: string) => boolean;
export declare const removeClassName: (ele: HTMLElement, name: string) => boolean;
