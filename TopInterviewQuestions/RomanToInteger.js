var romanToInt = function (s) {
  var symbolMap = new Map();

  symbolMap.set("I", 1);
  symbolMap.set("V", 5);
  symbolMap.set("X", 10);
  symbolMap.set("L", 50);
  symbolMap.set("C", 100);
  symbolMap.set("D", 500);
  symbolMap.set("M", 1000);

  var str = String(s);
  var romanValue = 0;

  for (var i = 0; i < str.length; i++) {
    if (symbolMap.has(str.charAt(i))) {
      if (romanValue != 0 && romanValue < symbolMap.get(str.charAt(i))) {
        romanValue = symbolMap.get(str.charAt(i)) - romanValue;
        continue;
      }
      romanValue = romanValue + symbolMap.get(str.charAt(i));
      continue;
    }
  }
  return romanValue;
};

console.log(romanToInt("MC"));
