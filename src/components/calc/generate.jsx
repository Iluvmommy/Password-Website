function fromLowToHigh(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, index) => start + index);
}

export default (pwLen, s, n, u, l) => {
  var uppercase = fromLowToHigh(65, 90);
  var lowercase = fromLowToHigh(97, 122);
  var numbers = fromLowToHigh(48, 57);
  var symbols = fromLowToHigh(33, 38)
    .concat(fromLowToHigh(40, 43))
    .concat(fromLowToHigh(58, 64))
    .concat(fromLowToHigh(91, 93))
    .concat(fromLowToHigh(123, 126));
    
    var arrayOfPossibleCodes = [];
    if (s) arrayOfPossibleCodes = arrayOfPossibleCodes.concat(symbols);
    if (n) arrayOfPossibleCodes = arrayOfPossibleCodes.concat(numbers);
    if (u) arrayOfPossibleCodes = arrayOfPossibleCodes.concat(uppercase);
    if (l) arrayOfPossibleCodes = arrayOfPossibleCodes.concat(lowercase);
    
  var arrayOfPwLetters = [];
  var ranIndex;
  for (let i = 0; i < pwLen; i++) {
    ranIndex = Math.floor(Math.random() * arrayOfPossibleCodes.length);
    arrayOfPwLetters.push(String.fromCharCode(arrayOfPossibleCodes[ranIndex]));
  }

  return arrayOfPwLetters.join("");
};
