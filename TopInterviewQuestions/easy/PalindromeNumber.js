var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var num = x;
  var reverse = 0;
  while (num > 0) {
    var digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return x === reverse;
};
