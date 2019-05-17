/**
 * Parse all items in an array as floats,
 * throws a `TypeError` if any inputs can't be parsed to floats.
 * @param {number[]} numbers an array of items to parse
 */
const allFloats = numbers => {
  if (!(numbers instanceof Array))
    throw new TypeError("Expected an Array of numbers");
  const values = numbers.map(n => parseFloat(n));
  if (values.some(n => isNaN(n)))
    throw new TypeError("Expected an Array of numbers");
  return values;
};

/**
 * Calculate the mean of several numbers
 * @param {number[]} numbers An array of numbers
 * @returns {number} The mean value of the numbers,
 * throws a `TypeError` if any inputs can't be parsed to floats.
 */
export const mean = numbers =>
  allFloats(numbers).reduce((sum, v) => sum + v) / numbers.length;

/**
 * Calculate the standard deviation of several numbers
 * @param {number[]} numbers An array of numbers
 * @returns {number} The standard deviation of the numbers,
 * throws a `TypeError` if any inputs can't be parsed to floats.
 */
export const sd = numbers => {
  const values = allFloats(numbers);
  const meanValue = mean(values);
  const adjusted = values.map(v => (v - meanValue) * (v - meanValue));
  const adjustedMean = mean(adjusted);
  return Math.sqrt(adjustedMean);
};
