import { hamming } from './Hamming';

// HAPPY CODES
describe('Get number of (ADN) differences between Arg1 and Arg2', () => {
  test('Params AA and AA returns 0', () => {
    expect(hamming('AA','AA')).toEqual(0);
  });
  test('Params AA and AT returns 1', () => {
    expect(hamming('AA','AT')).toEqual(1);
  });
  test('Params CCCATGTAAAC and CCAATGTAACC returns 2', () => {
    expect(hamming('CCCATGTAAAC','CCAATGTAACC')).toEqual(2);
  });
});

// ERROR
describe('Errors : ', () => {
  // if undefined
  test('When param1 is undefined, raises an exception and returns error', () => {
    expect( ()=> hamming(undefined,'CCAATGTAACC') ).toThrow(Error);
  });
  test('When param2 is undefined, raises an exception and returns error', () => {
    expect( ()=> hamming('CCCATGTAAAC',undefined) ).toThrow(Error);
  });
  test('When both params are undefined, raises an exception and returns error', () => {
    expect( ()=> hamming(undefined,undefined) ).toThrow(Error);
  });

  // if null
  test('When param1 is null, raises an exception and returns error', () => {
    expect( ()=> hamming(null,'CCAATGTAACC') ).toThrow(Error);
  });
  test('When param2 is null, raises an exception and returns error', () => {
    expect( ()=> hamming('CCCATGTAAAC',null) ).toThrow(Error);
  });
  test('When both params are null, raises an exception and returns error', () => {
    expect( ()=> hamming(null,null) ).toThrow(Error);
  });

  // if not a string
  test("When param1 is not a String 123, raises an exception and returns error", () => {
    expect( ()=> hamming(123,'CCAATGTAACC') ).toThrow(Error);
  });
  test("When param2 is not a String 123, raises an exception and returns error", () => {
    expect( ()=> hamming('CCCATGTAAAC',123) ).toThrow(Error);
  });
  test("When both params are not String, raises an exception and returns error", () => {
    expect( ()=> hamming(456,123) ).toThrow(Error);
  });

  // if boolean
  test("When param1 is Boolean, raises an exception and returns error", () => {
    expect( ()=> hamming(true,'CCAATGTAACC') ).toThrow(Error);
  });
  test("When param2 is Boolean, raises an exception and returns error", () => {
    expect( ()=> hamming('CCCATGTAAAC',false) ).toThrow(Error);
  });
  test("When both params are Boolean, raises an exception and returns error", () => {
    expect( ()=> hamming(false,true) ).toThrow(Error);
  });

  // wrong character
  test("When param1 has wrong letters, raises an exception and returns error", () => {
    expect( ()=> hamming('CCCATBTAAAC','CCAATGTAACC') ).toThrow(Error);
  });
  test("When param2 has wrong letters, raises an exception and returns error", () => {
    expect( ()=> hamming('CCCATBTAAAC','CCAATRTAACC') ).toThrow(Error);
  });
  test("When both params have wrong letters, raises an exception and returns error", () => {
    expect( ()=> hamming('CCCATBTAAAC','CCAATRTAACC') ).toThrow(Error);
  });

  // different size's parameters
  test("When params have different sizes(1), raises an exception and returns error", () => {
    expect( ()=> hamming('CCCATGTA','CAATGTAACC') ).toThrow(Error);
  });
  test("When params have different sizes(2), raises an exception and returns error", () => {
    expect( ()=> hamming('CCCATGTAAAC','CCAATGT') ).toThrow(Error);
  });
});
