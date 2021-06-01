const fizzBuzz = (integer: number): string => {
  if (integer < 1) {
    return "Invalid integer";
  }

  if (integer % 3 === 0) {
    return "Fizz";
  }

  if (integer % 5 === 0) {
    return "Buzz";
  }

  return `${integer}`;
};

export { fizzBuzz };
