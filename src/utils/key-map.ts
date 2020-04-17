import { isNullOrUndefined } from './type-guards';

export interface IKeyedObject<T = {}> {
  [key: string]: T;
}
export const getKeys = <T>(
  obj: IKeyedObject<T>,
  keys: string[] = [],
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
