export type DeepPartial<T> = T extends (...args: unknown[]) => unknown
    ? T
    : T extends object
      ? { [P in keyof T]?: DeepPartial<T[P]> }
      : T;
