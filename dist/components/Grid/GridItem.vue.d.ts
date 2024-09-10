import { PropsChild, Pos } from './GridItemProps';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PropsChild>, {
    isDraggable: null;
    isResizable: null;
    isBounded: null;
    static: boolean;
    minH: number;
    minW: number;
    maxH: number;
    maxW: number;
    dragIgnoreFrom: string;
    dragAllowFrom: null;
    resizeIgnoreFrom: string;
    preserveAspectRatio: boolean;
    dragOption: () => {};
    resizeOption: () => {};
}>>, {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string | number;
    isDraggable: boolean | null;
    isResizable: boolean | null;
    isBounded: boolean | null;
    static: boolean;
    minH: number;
    minW: number;
    maxH: number;
    maxW: number;
    dragIgnoreFrom: string;
    dragAllowFrom: string | null;
    resizeIgnoreFrom: string;
    preserveAspectRatio: boolean;
    dragOption: {
        [key: string]: any;
    };
    resizeOption: {
        [key: string]: any;
    };
    autoSize: () => void;
    calcXY: (top: number, left: number) => {
        x: number;
        y: number;
    };
    dragging: import('vue').Ref<{
        left?: number | undefined;
        right?: number | undefined;
        top: number;
        width: number;
        height: number;
    } | null, Pos | {
        left?: number | undefined;
        right?: number | undefined;
        top: number;
        width: number;
        height: number;
    } | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "container-resized": (i: string | number, h: number, w: number, height: number, width: number) => void;
    resize: (i: string | number, h: number, w: number, height: number, width: number) => void;
    resized: (i: string | number, h: number, w: number, height: number, width: number) => void;
    move: (i: string | number, x: number, y: number) => void;
    moved: (i: string | number, x: number, y: number) => void;
    dragging: (event: MouseEvent, i: string | number) => void;
    dragend: (event: MouseEvent, i: string | number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PropsChild>, {
    isDraggable: null;
    isResizable: null;
    isBounded: null;
    static: boolean;
    minH: number;
    minW: number;
    maxH: number;
    maxW: number;
    dragIgnoreFrom: string;
    dragAllowFrom: null;
    resizeIgnoreFrom: string;
    preserveAspectRatio: boolean;
    dragOption: () => {};
    resizeOption: () => {};
}>>> & Readonly<{
    onDragend?: ((event: MouseEvent, i: string | number) => any) | undefined;
    onResize?: ((i: string | number, h: number, w: number, height: number, width: number) => any) | undefined;
    "onContainer-resized"?: ((i: string | number, h: number, w: number, height: number, width: number) => any) | undefined;
    onResized?: ((i: string | number, h: number, w: number, height: number, width: number) => any) | undefined;
    onMove?: ((i: string | number, x: number, y: number) => any) | undefined;
    onMoved?: ((i: string | number, x: number, y: number) => any) | undefined;
    onDragging?: ((event: MouseEvent, i: string | number) => any) | undefined;
}>, {
    isDraggable: boolean | null;
    isResizable: boolean | null;
    isBounded: boolean | null;
    static: boolean;
    minH: number;
    minW: number;
    maxH: number;
    maxW: number;
    dragIgnoreFrom: string;
    dragAllowFrom: string | null;
    resizeIgnoreFrom: string;
    preserveAspectRatio: boolean;
    dragOption: {
        [key: string]: any;
    };
    resizeOption: {
        [key: string]: any;
    };
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    default?(_: {
        style: any;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
