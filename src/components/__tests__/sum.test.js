import { sum } from "../Sum"

test("check for two positive numbers", () => {
    //assertion
    expect(sum(2, 5)).toBe(7)
    expect(sum(5, 4)).toBe(9)
})