const index = require("./index");

jest.mock("./index");

describe("weird object", () => {
  it("should have a weird prototype", () => {
    expect(index.prototype).toBe(1);
  });
});
