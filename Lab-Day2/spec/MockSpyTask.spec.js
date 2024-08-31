var counter = {
  currentValues: function () {
    return 1;
  },
};
function sumOfValues() {
  return counter.currentValues();
}

//test cases
describe("mock and spy", function () {
  //test case
  it("spying", function () {
    spyOn(counter, "currentValues").and.returnValue(100);
    const result = sumOfValues(); // fun use spy

    expect(result).toBe(100); // result mocked value

    expect(counter.currentValues).toHaveBeenCalledTimes(1);
  });

  // test case
  it("mocking", function () {
    //mock that take string and return length of it
    const mockFunction = jasmine.createSpy().and.callFake((str) => {
      return str.length;
    });

    mockFunction("test"); // call 1
    mockFunction("mocking"); // call 2

    //make sure it called 2
    expect(mockFunction).toHaveBeenCalledTimes(2);

    expect(mockFunction("test")).toBe(4);
    expect(mockFunction("mocking")).toBe(7);
  });
});
