declare type NumberConsumer = (dpr: number) => void;
declare function browserZoomListener(fn: NumberConsumer): void;
export = browserZoomListener;
