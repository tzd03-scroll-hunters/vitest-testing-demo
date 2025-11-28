import { test, expect, describe } from "vitest";
import { divide, multiply, sum } from "./index.js";


// test suite 
describe("teste meine calculator functions", () => {

  // test case
  test("ob meine summe function funktioniert", () => {
    // expectation
    expect(sum(3, 4)).toBe(7);
  })
  
  // test case
  test("ob meine multiply function funzt", () => {
    expect(multiply(2,5)).toBe(10)
  })

  test("ob divide klappt", () => {
    expect(divide(4,2)).toBe(2)
    expect(divide(9,3)).toBe(3)
    expect(divide(10,2)).toBe(5)
  })
})
