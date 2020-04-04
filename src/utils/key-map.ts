import { isNullOrUndefined } from './type-guards';

interface IKeyedObject {
  [key: string]: any;
}
export const getKeys = (
  obj: IKeyedObject,
  keys: string[] = [],
  defaultValue = undefined
) => {
  if (isNullOrUndefined(obj) || keys.length === 0) {
    return {};
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
  }, {});
};
