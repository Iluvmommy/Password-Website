function fromLowToHigh(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, index) => start + index);
}

export default (pwLen, s, n, u, l) => {

  var lowercase = fromLowToHigh(97, 122);
  var uppercase = fromLowToHigh(65, 90);
  var numbers = fromLowToHigh(48, 57);
  var symbols = fromLowToHigh(33, 38)
    .concat(fromLowToHigh(40, 43))
    .concat(fromLowToHigh(58, 64))
    .concat(fromLowToHigh(91, 93))
    .concat(fromLowToHigh(123, 126));

    var arrayOfPossibleCodes = [];
    if (s) arrayOfPossibleCodes.concat(symbols);
    if (n) arrayOfPossibleCodes.concat(numbers);
    if (u) arrayOfPossibleCodes.concat(uppercase);
    if (l) arrayOfPossibleCodes.concat(lowercase);
    console.log(arrayOfPossibleCodes);

    var arrayOfPwCodes = [];
    for (let i = 0; i < pwLen.length; i++) {
        arrayOfPwCodes.push(Math.floor(Math.random(arrayOfPossibleCodes)));
    }
    // console.log(arrayOfPwCodes);
}

