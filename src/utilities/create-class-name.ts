import { isNullOrUndefined } from './type-guards';

interface IKeyedObject {
  [key: string]: any;
}
interface IBemObj {
  block: string;
}
export const createClassName = (obj: IKeyedObject, bem: IBemObj): string[] => {
  if (isNullOrUndefined(obj)) {
    return [];
  }
  const objKeys = Object.keys(obj);
  return objKeys.reduce((classes, key) => {
    if (isNullOrUndefined(obj[key])) {
      return classes;
    }
    return classes.concat(`${bem.block}--${obj[key]}`);
  }, [] as string[]);
};