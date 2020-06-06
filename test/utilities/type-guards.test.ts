import {
  isString,
  isNullOrUndefined,
  isNull,
  isUndefined,
} from '../../src/utilities';

describe('Utils - Type Guards', () => {
  describe('isString', () => {
    it('Handles empty string', () => {
      expect(isString('')).toBe(true);
    });
    it('Handles non-empty string', () => {
      expect(isString('non-empty string')).toBe(true);
    });
    it('Handles non-string', () => {
      expect(isString(1)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString({})).toBe(false);
    });
  });
  describe('isNull', () => {
    it('Handles null', () => {
      expect(isNull(null)).toBe(true);
    });
    it('Handles non-null', () => {
      expect(isNull('')).toBe(false);
      expect(isNull(1)).toBe(false);
      expect(isNull(undefined)).toBe(false);
      expect(isNull({})).toBe(false);
    });
  });
  describe('isUndefined', () => {
    it('Handles undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });
    it('Handles non-undefined', () => {
      expect(isUndefined('')).toBe(false);
      expect(isUndefined(1)).toBe(false);
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined({})).toBe(false);
    });
  });
  describe('isNullOrUndefined', () => {
    it('Handles null or undefined', () => {
      expect(isNullOrUndefined(null)).toBe(true);
      expect(isNullOrUndefined(undefined)).toBe(true);
    });
    it('Handles non-null or undefined', () => {
      expect(isNullOrUndefined('')).toBe(false);
      expect(isNullOrUndefined(1)).toBe(false);
      expect(isNullOrUndefined({})).toBe(false);
    });
  });
});
