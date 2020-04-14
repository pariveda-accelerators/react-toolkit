import { createClassName } from 'utils/create-class-name';

describe('Utils - createClassName', () => {
  it('Converts keyed object to array of classes', () => {
    const keyedObj = {
      align: 'left',
      type: 'body',
    };
    const bem = {
      block: 'text',
    };
    const classes = createClassName(keyedObj, bem);
    const expectedClasses = ['text--left', 'text--body'];
    expect(classes.length).toBe(2);
    classes.forEach(className =>
      expect(expectedClasses.includes(className)).toBe(true)
    );
  });
});
