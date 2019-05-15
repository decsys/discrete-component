/**
 * Parse all items in an array as floats
 * else return NaN
 * @param {number[]} numbers an array of items to parse
 */
const allFloats = numbers => {
  if (!numbers instanceof Array) return NaN;
  const values = numbers.map(n => parseFloat(n));
  if (values.some(n => n === NaN)) return NaN;
  return values;
};

/**
 * Calculate the mean of several numbers
 * @param {number[]} numbers An array of numbers
 * @returns {number} The mean value of the numbers,
 * or `NaN` if the calculation was unsuccessful
 */
export const mean = numbers => {
  const values = allFloats(numbers);
  if (values === NaN) return NaN;
  return values.reduce((sum, v) => sum + v) / values.length;
};

/**
 * Calculate the standard deviation of several numbers
 * @param {number[]} numbers An array of numbers
 * @returns {number} The standard deviation of the numbers,
 * or `NaN` if the calculation was unsuccessful
 */
export const sd = numbers => {
  const values = allFloats(numbers);
  if (values === NaN) return NaN;
  const meanValue = mean(values);
  const adjusted = values.map(v => (v - meanValue) * (v - meanValue));
  const adjustedMean = mean(adjusted);
  return Math.sqrt(adjustedMean);
};

/**
 * Wrap a function that could return NaN in a handler
 * which returns "N/A" if the result is NaN
 * @param {*} f The function to wrap
 * @param  {...any} args Arguments for the function
 */
export const nanWrap = f => (...args) => {
  const result = f(args);
  if (result === NaN) return "N/A";
  return result;
};
