import { hello } from './HelloWorld';

describe('hello',()=>{
  test("it says Hello, World!",()=>{
    expect(hello()).toEqual("Hello, World!");
  });

  test("it says Hello, Ben! when passed 'Ben' as first parameter",()=>{
    expect(hello('Ben')).toEqual("Hello, Ben!");
  })
})
