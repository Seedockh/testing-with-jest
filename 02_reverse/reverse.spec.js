import { reverseString } from './Reverse';

// HAPPY CODES
describe('Reverses a String in param', () => {
  test('Returns curT with param Truc', () => {
    expect(reverseString('Truc')).toEqual('curT');
  });
});

// ERRORS
describe('Handles exception error : ', () => {
  test('When param is undefined, raises an exception and return error', () => {
    expect( ()=> reverseString(undefined) ).toThrow(Error);
  });

  test('When param is null, raises an exception and return error', () => {
    expect( ()=> reverseString(null) ).toThrow(Error);
  });

  test("When param is not a String 123, returns '321'", () => {
    expect( ()=> reverseString(123) ).toThrow(Error);
  });

  test("When param is not a String 123, returns '321'", () => {
    expect( ()=> reverseString(true) ).toThrow(Error);
  });
});
