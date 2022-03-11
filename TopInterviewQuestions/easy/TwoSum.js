// see problem statement at: https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    var diff = target - nums[i];
    if (hash[diff] !== undefined) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
