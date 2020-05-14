import { isNullOrUndefined } from './type-guards';

export interface IKeyedObject<T extends any = undefined> {
  [key: string]: T;
}

export const getKeys = <T>(
  obj: IKeyedObject<T>,
  keys: any[] | readonly any[] = [],
  defaultValue: IKeyedObject<T> | undefined = undefined
): T => {
  if (isNullOrUndefined(obj) || keys.length === 0) {
    return {} as T;
  }
  return keys.reduce((mappedObject, currKey) => {
    if (isNullOrUndefined(obj[currKey])) {
      if (
        !isNullOrUndefined(defaultValue) &&
        !isNullOrUndefined(defaultValue[currKey])
      ) {
        return {
          ...mappedObject,
          [currKey]: defaultValue[currKey],
        };
      }
      return mappedObject;
    }
    return {
      ...mappedObject,
      [currKey]: obj[currKey],
    };
  }, {} as T);
};

export const getProps = <T extends object>(
  obj: T,
  keys: (keyof T)[] | readonly (keyof T)[]
): T => {
  if (isNullOrUndefined(obj) || keys.length === 0) {
    return {} as T;
  }
  return Object.keys(obj).reduce((mappedObject, currKey) => {
    if (keys.includes(currKey as keyof T)) {
      return {
        ...mappedObject,
        [currKey]: (obj as T)[currKey as keyof T],
      };
    }
    return mappedObject;
  }, {} as T);
};
