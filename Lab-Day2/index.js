MathUtils = function () {};

MathUtils.prototype.sum = function (x, y) {
  return x + y;
};

MathUtils.prototype.factiorial = function (num1) {
  if (num1 < 0) {
    throw new Error("there is no factorial for negative numbers");
  } else if (num1 == 0 || num1 == 1) {
    return 1;
  } else {
    return num1 * this.factiorial(num1 - 1);
  }
};

// export { MathUtils };
module.exports = MathUtils;
