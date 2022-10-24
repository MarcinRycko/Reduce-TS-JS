import { mapFn, filterFn, someFn, everyFn } from './reduce';

describe('test', () => {
  let numberArray: number[] = [];
  let stringArray: string[] = [];
  let objectArray: { [key: string]: string }[] = [];

  beforeEach(() => {
    numberArray = [2, 5, 7, 8];
    stringArray = ['cat', 'dog', 'lion', 'bird'];
    objectArray = [
      { item: 'cat' },
      { item: 'dog' },
      { item: 'lion' },
      { item: 'bird' },
    ];
  });

  describe('test mapFn', () => {
    test('with numberArray', () => {
      const callback = (val: number) => val * 2;
      const expectedResult = numberArray.map(callback);
      const result = mapFn(numberArray, callback);
      expect(result).toEqual(expectedResult);
    });
    test('with stringArray', () => {
      const callback = (val: string) => val + 's';
      const expectedResult = stringArray.map(callback);
      const result = mapFn(stringArray, callback);
      expect(result).toEqual(expectedResult);
    });
    test('with objectArray', () => {
      const callback = <T>(value: { [key: string]: T }) => value.item + 's';
      const expectedResult = objectArray.map(callback);
      const result = mapFn(objectArray, callback);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('test filterFn', () => {
    test('with numberArray', () => {
      const callback = (val: number) => val < 6;
      const expectedResult = numberArray.filter(callback);
      const result = filterFn(numberArray, callback);
      expect(result).toEqual(expectedResult);
    });
    test('with stringArray', () => {
      const callback = (val: string) => val === stringArray[0];
      const expectedResult = stringArray.filter(callback);
      const result = filterFn(stringArray, callback);
      expect(result).toEqual(expectedResult);
    });
    test('with objectArray', () => {
      const callback = <T>(value: { [key: string]: T }) =>
        value.item === objectArray[0].item;
      const expectedResult = objectArray.filter(callback);
      const result = filterFn(objectArray, callback);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('test someFn', () => {
    test('with numberArray', () => {
      const callback = (val: number) => val === 8;
      const expectedResult = numberArray.some(callback);
      const result = someFn(numberArray, callback);
      expect(result).toEqual(expectedResult);
    });
    test('with stringArray', () => {
      const callback = (val: string) => val.includes('r');
      const expectedResult = stringArray.some(callback);
      const result = someFn(stringArray, callback);
      expect(result).toEqual(expectedResult);
    });
    test('with objectArray', () => {
      const callback = (value: { [key: string]: string }) =>
        value.item.includes('r');
      const expectedResult = objectArray.some(callback);
      const result = someFn(objectArray, callback);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('test everyFn', () => {
    test('with numberArray', () => {
      const callback = (val: number) => val === 6;
      const expectedResult = numberArray.every(callback);
      const result = everyFn(numberArray, callback);
      expect(result).toEqual(expectedResult);
    });
    test('with stringArray', () => {
      const callback = (val: string) => val.includes('r');
      const expectedResult = stringArray.every(callback);
      const result = everyFn(stringArray, callback);
      expect(result).toEqual(expectedResult);
    });
    test('with objectArray', () => {
      const callback = (value: { [key: string]: string }) =>
        value.item.includes('r');
      const expectedResult = objectArray.every(callback);
      const result = everyFn(objectArray, callback);
      expect(result).toEqual(expectedResult);
    });
  });
});
