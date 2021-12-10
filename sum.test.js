const {stringLength, reverseString, Calculator, capitalize} = require ('./sum.js');

describe('stringLength tests', () => {
  test('valid string length', () => {
    expect(stringLength('mytests1')).toEqual(8);
  });

  test('empty string', () => {
    expect(() => stringLength('')).toThrow();
  });

  test('string length more than 8', () => {
    expect(() => stringLength('Hello World!!!')).toThrow();
  });
});

describe('reverseString tests', () => {
  test('reversing a string (1)', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });

  test('reversing a string (2)', () => {
    expect(reverseString('ABCDEFG')).toBe('GFEDCBA');
  });
});

describe('Calculator tests', () => {
  test('adding two numbers', () => {
    expect(Calculator.add(2, 4)).toEqual(6);
  });

  test('substracting two numbers', () => {
    expect(Calculator.substract(2, 4)).toEqual(-2);
  });

  test('multiplying two numbers', () => {
    expect(Calculator.multiply(2, 4)).toEqual(8);
  });

  test('dividing two numbers', () => {
    expect(Calculator.divide(4, 2)).toEqual(2);
  });

  test('dividing by zero', () => {
    expect(() => Calculator.divide(2, 0)).toThrow();
  });
});


describe('capitalize tests', () => {
  test('capitalizing a string', () => {
    expect(capitalize('angel')).toBe('Angel');
  });
});
