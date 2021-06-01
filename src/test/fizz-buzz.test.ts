import { fizzBuzz } from "../main/fizz-buzz";

describe("fizzBuzz", () => {
  it("should return an error message when less than 1", () => {
    expect(fizzBuzz(0)).toBe("Invalid integer");
  });

  it.each([
    [1, "1"],
    [2, "2"],
    [3, "Fizz"],
    [4, "4"],
    [5, "Buzz"],
    [6, "Fizz"],
    [7, "7"],
    [8, "8"],
    [9, "Fizz"],
    [10, "Buzz"],
    [11, "11"],
    [12, "Fizz"],
    [13, "13"],
    [14, "14"],
    [15, "FizzBuzz"],
  ])(
    "should return '%i' for %s when fizzbuzz converts",
    (input: number, expected: string) => {
      expect(fizzBuzz(input)).toBe(expected);
    }
  );
});
