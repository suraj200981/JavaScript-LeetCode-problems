/**
 *
 * https://leetcode.com/problems/implement-strstr/submissions/
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack == "" && needle == "") {
    return 0;
  }
  if (haystack != "" && needle == "") {
    return 0;
  }
  if (haystack.length == 0) {
    return -1;
  }
  if (needle.length == 0) {
    return -1;
  }
  if (needle.length > haystack.length) {
    return -1;
  }
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

console.log(strStr("a", ""));
