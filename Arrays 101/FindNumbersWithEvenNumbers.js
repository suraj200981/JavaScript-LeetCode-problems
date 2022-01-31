//Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  var totalEven = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      totalEven++;
    }
  }

  return totalEven;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
