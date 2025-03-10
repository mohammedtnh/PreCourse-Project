/**
 * generateIntegersArray(firstNumber, lastNumber):
 * - receives two numbers
 * - returns an array with the integers between the two numbers
 *
 * e.g.
 * generateIntegersArray(2, 5) -> [2, 3, 4, 5]
 * generateIntegersArray(4, 9) -> [4, 5, 6, 7, 8, 9]
 *
 */
function generateIntegersArray(firstNumber, lastNumber) {
  const integersArray = [];

  while (firstNumber < lastNumber + 1) {
    integersArray.push(firstNumber);
    firstNumber++;
  }

  return integersArray;
}

/**
 * noZeroes(numberString):
 * - receives a number as a string
 * - removes any zeroes at the beginning and the end of the number string
 * - returns the resulting number string without zeroes at the beginning or the end
 *
 * e.g.
 * noZeroes("0011000") -> "11"
 * noZeroes("0130401431400") -> "1304014314"
 *
 */
function noZeroes(numberString) {
  while (numberString.startsWith("0")) {
    numberString = numberString.slice(
      numberString.indexOf("0") + 1,
      numberString.length
    );
  }

  while (numberString.endsWith("0")) {
    numberString = numberString.slice(0, numberString.charAt(-1) - 1);
  }

  return numberString;
}

console.log(generateIntegersArray(3, 7));
console.log(noZeroes("0010100"));

module.exports = {
  generateIntegersArray,
  noZeroes,
};
