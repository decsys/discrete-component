/**
 * Wrap a function that could throw a `TypeError`
 * in a handler which returns "N/A" instead
 * @param {function} f The function to wrap
 * @param {...any} args Arguments for the function
 */
export const handleTypeErrors = f => (...args) => {
  try {
    return f(...args);
  } catch (e) {
    if (e instanceof TypeError) return "N/A";
  }
};
