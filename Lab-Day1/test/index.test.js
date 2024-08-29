import { capitalizeText, createArray } from "../index.js";
import assertMocha from "assert";
import { expect, should, assert } from "chai";
should();

// Testing problem 1
describe("capitalizeText", function () {
  it("output should be string when put string", function () {
    expect(capitalizeText("iti")).to.be.a("string");
  });

  it("should return the string capitalized", function () {
    assertMocha.equal(capitalizeText("iti"), "ITI");
  });

  it("should throw a TypeError if the input is not a string", function () {
    expect(capitalizeText(90)).to.throw(
      TypeError,
      "parameter should be string"
    );
  });

  it("should return the output dont like input", function () {
    expect(capitalizeText("iti")).to.not.equal("hello");
  });
});

// #####################################
// Tasting Problem 2
describe("createArray", function () {
  it("should return an array", function () {
    expect(createArray(3)).to.be.an("array");
  });

  it("input should = length of array", function () {
    const result = createArray(3);
    result.should.have.lengthOf(3);
  });

  it("should include the number 1 in the array", function () {
    const result = createArray(3);
    assert.include(result, 25);
  });
// >>
  it("should delay the testing process by 5 seconds", function (done) {
    setTimeout(() => {
      const result = createArray(3);
      expect(result).to.include(1);
      done();
    }, 5000);
  });
});
