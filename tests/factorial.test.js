const factorial = require("../index");

test("calculates factorial of 0", () => {
    expect(factorial(0)).toBe(1);
});

test("calculates factorial of 1", () => {
    expect(factorial(1)).toBe(1);
});

test("calculates factorial of 5", () => {
    expect(factorial(5)).toBe(120);
});

test("returns error message for negative input", () => {
    expect(factorial(-5)).toBe("Input must be a non-negative integer");
});
