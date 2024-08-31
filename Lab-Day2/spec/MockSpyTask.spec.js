var counter = {
  currentValues: function () {
    return 1;
  },
};
function sumOfValues() {
  return counter.currentValues();
}

describe("mock and spy", function () {
  it("spying", function () {
    //test case
    spyOn(counter, "currentValues").and.returnValue(100);
    const result = sumOfValues(); // fun use spy

    expect(result).toBe(100); // result mocked value

    expect(counter.currentValues).toHaveBeenCalledTimes(1);
  });

  it("mocking", function () {
    //mock function
    const mockFunction = jasmine.createSpy().and.callFake((str) => {
      return str.length;
    });

    // call it
    mockFunction("test");
    mockFunction("mocking");

    //make sure it called 2
    expect(mockFunction).toHaveBeenCalledTimes(2);

    expect(mockFunction("test")).toBe(4);
    expect(mockFunction("mocking")).toBe(7);
  });
});
