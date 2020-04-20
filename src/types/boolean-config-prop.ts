export type TBooleanConfigProp<T extends string> = {
  [P in T]?: boolean;
};
