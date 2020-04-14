import { isNullOrUndefined } from './type-guards';

interface IKeyedObject {
  [key: string]: any;
}
export const getKeys = <T extends object>(
  obj: IKeyedObject,
  keys: string[] = [],
  defaultValue = undefined
): T => {
  if (isNullOrUndefined(obj) || keys.length === 0) {
    return {} as T;
  }
  const objKeys = Object.keys(obj);
  return objKeys.reduce((mappedObject, currKey) => {
    if (keys.includes(currKey)) {
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
    }
    return mappedObject;
  }, {} as T);
};
