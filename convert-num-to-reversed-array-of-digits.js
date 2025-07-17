



function convertNumToReversedArrayOfDigits(num) {
  return num.toString().split("").reverse().map((item) => Number(item));
}

console.log(convertNumToReversedArrayOfDigits(987654));
