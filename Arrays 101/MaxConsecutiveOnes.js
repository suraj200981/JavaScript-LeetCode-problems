var findMaxConsecutiveOnes = function (nums) {
  var count = 1;

  var newArr = [];

  if (nums.length == 1) {
    return nums[0];
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i + 1] != nums[i] && i != nums.length) {
      if (count > 1) {
        newArr.push(count);
      }
      count = 1;
    }
    if (nums[i + 1] == nums[i] && nums[i] != 0) {
      count++;
    }
  }

  if (newArr.length == 0) {
    return 0;
  }
  var sortedArr = newArr.sort();

  if (sortedArr.length > 1) {
    return sortedArr[sortedArr.length - 1];
  }

  return sortedArr[0];
};

console.log(findMaxConsecutiveOnes([0, 0]));
