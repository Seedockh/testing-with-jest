import { toRna } from './Translate';

// HAPPY CODES
describe('Translate Arg (DNA) to RNA strand', () => {
  test('Params ACGTGGTCTTAA returns UGCACCAGAAUU', () => {
    expect(toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
});

// ERROR
describe('Errors : ', () => {
  // if undefined
  test('When param is undefined, raises an exception and returns error', () => {
    expect( ()=> toRna(undefined) ).toThrow(Error);
  });

  // if null
  test('When param is null, raises an exception and returns error', () => {
    expect( ()=> toRna(null) ).toThrow(Error);
  });

  // if not a string
  test("When param is not a String 123, raises an exception and returns error", () => {
    expect( ()=> toRna(123) ).toThrow(Error);
  });

  // if boolean
  test("When param is Boolean, raises an exception and returns error", () => {
    expect( ()=> toRna(true) ).toThrow(Error);
  });

  // wrong character
  test("When param has wrong letters, raises an exception and returns error", () => {
    expect( ()=> toRna('U') ).toThrow(Error);
  });
  test("When param has wrong letters, raises an exception and returns error", () => {
    expect( ()=> toRna('ACGTXXXCTTAA') ).toThrow(Error);
  });


  // different size's parameters
  /*test("When param and return are not same sizes, raises an exception and returns error", () => {
    expect( ()=> toRna('CCCATGTA') ).toThrow(Error);
  });*/
});
