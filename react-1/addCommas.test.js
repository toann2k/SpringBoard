const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it works for positive small integers", () => {
    expect(addCommas(6)).toBe("6");
    expect(addCommas(10)).toBe("10");
    expect(addCommas(999)).toBe("999");
  });

  test("it works for positive large integers", () => {
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1000000)).toBe("1,000,000");
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  test("it works for negative small integers", () => {
    expect(addCommas(-6)).toBe("-6");
    expect(addCommas(-10)).toBe("-10");
    expect(addCommas(-999)).toBe("-999");
  });

  test("it works for negative large integers", () => {
    expect(addCommas(-5678)).toBe("-5,678");
    expect(addCommas(-1000000)).toBe("-1,000,000");
    expect(addCommas(-9876543210)).toBe("-9,876,543,210");
  });

  test("it works for small positive decimals", () => {
    expect(addCommas(1.234)).toBe("1.234");
    expect(addCommas(8.9)).toBe("8.9");
    expect(addCommas(999.99999)).toBe("999.99999");
    expect(addCommas(0.12345)).toBe("0.12345");
  });

  test("it works for large positive decimals", () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
    expect(addCommas(3141592.65)).toBe("3,141,592.65");
  });

  test("it works for small negative decimals", () => {
    expect(addCommas(-1.234)).toBe("-1.234");
    expect(addCommas(-8.9)).toBe("-8.9");
    expect(addCommas(-999.99999)).toBe("-999.99999");
    expect(addCommas(-0.12345)).toBe("-0.12345");
  });

  test("it works for large negative deicmals", () => {
    expect(addCommas(-12345.678)).toBe("-12,345.678");
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });
});