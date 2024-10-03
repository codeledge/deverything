export type VoidFn = () => void;

export type AsyncVoidFn = Awaited<VoidFn>;

export const noop: VoidFn = () => void 0;
