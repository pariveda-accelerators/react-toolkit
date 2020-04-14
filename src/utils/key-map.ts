import { isNullOrUndefined } from './type-guards';

interface IKeyedObject {
  [key: string]: any;
}
export const getKeys = <T extends object>(
  obj: IKeyedObject,
  keys: string[] = [],
  defaultValue: any = undefined
): T => {
  if (isNullOrUndefined(obj) || keys.length === 0) {
    return {} as T;
  }
  return keys.reduce((mappedObject, currKey) => {
    if (isNullOrUndefined(obj[currKey])) {
      return !isNullOrUndefined(defaultValue)
        ? {
            ...mappedObject,
            [currKey]: defaultValue,
          }
        : mappedObject;
    }
    return {
      ...mappedObject,
      [currKey]: obj[currKey],
    };
  }, {} as T);
};
