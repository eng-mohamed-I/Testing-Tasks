var MathUtils = require("../index");
// import { MathUtils } from "../index.js";

describe("unit test for prototype MathUtils", function () {
  var calc;
  beforeEach(function () {
    calc = new MathUtils();
  });

  it("test sum function", function () {
    expect(calc.sum(2, 3)).toEqual(5);
  });
});
