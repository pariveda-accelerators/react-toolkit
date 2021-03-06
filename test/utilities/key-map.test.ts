import { getKeys, getProps } from '../../src/utilities';

describe('Utils - Key Map', () => {
  describe('getKeys', () => {
    it('Returns empty object for null or undefined', () =>
      expect(getKeys(null as any)).toEqual({}));
    it('Takes array of strings and pulls matching keys from object', () => {
      const keyedObj = {
        first: 'first',
        second: 'second',
        third: 'third',
      } as any;
      const keys = ['first', 'second'];
      const newObj = getKeys<any>(keyedObj, keys);
      const newObjKeys = Object.keys(newObj);
      expect(newObjKeys.length).toBe(2);
      newObjKeys.forEach(key => {
        expect(keys.includes(key)).toBe(true);
        expect(newObj[key]).toEqual(keyedObj[key]);
      });
    });
    it('Skips keys with undefined values', () => {
      const keyedObj = {
        first: 'first',
        third: 'third',
      };
      const keys = ['first', 'second'];
      const newObj = getKeys(keyedObj, keys);
      const newObjKeys = Object.keys(newObj);
      expect(newObjKeys.length).toBe(1);
      newObjKeys.forEach(key => expect(keys.includes(key)).toBe(true));
    });
    it('Applies default value for undefined keys', () => {
      const keyedObj = {
        first: 'first',
        third: 'third',
      };
      const keys = ['first', 'second'];
      const newObj = getKeys(keyedObj, keys, { second: 'default' });
      const newObjKeys = Object.keys(newObj);
      expect(newObjKeys.length).toBe(2);
      newObjKeys.forEach(key => expect(keys.includes(key)).toBe(true));
    });
  });
  describe('getProps', () => {
    it('Returns empty object for null or undefined', () =>
      expect(getProps(null as any, [])).toEqual({}));
    it('Takes array of strings and pulls matching keys from object', () => {
      const keyedObj = {
        first: 'first',
        second: 'second',
        third: 'third',
      } as any;
      const keys = ['first', 'second'];
      const newObj = getProps<any>(keyedObj, keys);
      const newObjKeys = Object.keys(newObj);
      expect(newObjKeys.length).toBe(2);
      newObjKeys.forEach(key => {
        expect(keys.includes(key)).toBe(true);
        expect(newObj[key]).toEqual(keyedObj[key]);
      });
    });
  });
});
