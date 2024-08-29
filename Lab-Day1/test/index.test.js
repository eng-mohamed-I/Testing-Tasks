const { capitalizeText, createArray } = require("../index");

var assertMocha = require("assert");
var expect = require("chai").expect;
var should = require("chai").should;
var assert = require("chai").assert;
should();

// Test that the function takes a string and returns a string
// Test that the function takes a string and returns it after capitalizing it
// Test that if the function takes a number, it throws a TypeError saying "parameter should be string"
// Test that if the input is "iti", the returned value will not equal "hello"

describe("capitalizeText", function () {
  it("should return a string when given a string", function () {
    expect(capitalizeText("iti")).to.be.a("string");
  });

  it("should return the string capitalized", function () {
    assertMocha.equal(capitalizeText("iti"), "Iti");
  });

  it("should throw a TypeError if the input is not a string", function () {
    expect(() => capitalizeText(12)).to.throw(
      TypeError,
      "parameter should be string"
    );
  });

  it('should not return "hello" when the input is "iti"', function () {
    expect(capitalizeText("iti")).to.not.equal("hello");
  });
});

// #####################################
//create array
// Problem
// input number 3 ==> output should be [0,1,2]
//test that the return value of type array
//test if we pass 3 it will return array of length 3 and test it's include 1
//make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call
//Bonus-->//try to delay the testing process 5 seconds
//try to use different styles (expect , should , assert)
//Bonus--> //after finishing your test process try to  run it on a browser
//make pending test case

describe("createArray", function () {
  let variable = 1;

  beforeEach(function () {
    variable++;
  });

  it("should return an array", function () {
    expect(createArray(variable)).to.be.an("array");
  });

  it("should return an array of length equal to the input number", function () {
    const result = createArray(variable);
    result.should.have.lengthOf(variable);
  });

  it("should include the number 1 in the array", function () {
    const result = createArray(variable);
    assert.include(result, 1);
  });

  it("should delay the testing process by 5 seconds", function (done) {
    this.timeout(6000); // Set timeout to 6 seconds
    setTimeout(() => {
      const result = createArray(variable);
      expect(result).to.include(1);
      done();
    }, 5000);
  });
});
