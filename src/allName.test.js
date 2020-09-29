const allName = require("./allName");

test("all Name is String", function () {
  const names = allName();
  const actual = names.every((name) => {
    return typeof name === "string";
  });
  expect(actual).toBe(true);
});

test("count name is 100", function () {
  const countNames = allName().length;
  expect(countNames).toBe(100);
});
