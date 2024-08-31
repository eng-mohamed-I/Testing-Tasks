const { sum, positive } = require("../index");

describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  beforeAll(() => {
    pos_vals = [1, 2, 3]; //fill +vals
    neg_vals = [-1, -2, -3]; //fill -vals
    vals = pos_vals.concat(neg_vals); //+vals + -vals
    sum_of_vals = vals.reduce((x, y) => x + y, 0); //sum
  });
  beforeEach(() => {
    console.log("vals:", vals); //print vals
  });

  afterEach(() => {
    console.log("done"); //Done
  });

  //reset all
  afterAll(() => {
    pos_vals = 0;
    neg_vals = 0;
    vals = 0;
    sum_of_vals = 0;
  });

  it("sum should equal to sum of the values", () => {
    expect(sum(vals)).toEqual(sum_of_vals);
  });

  it("positive should equal to positive values", () => {
    expect(positive(vals)).toEqual(pos_vals);
  });
});
