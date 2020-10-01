const randomName = require("./randomName");
const allName = require("./allName");

test("name is exist in allName", function () {
  const nameRandom = randomName();
  const actual = allName().filter((name) => {
    return name === nameRandom;
  });
  expect(actual.length).toBe(1);
});
