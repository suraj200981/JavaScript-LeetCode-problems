/**
 *
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  if(nums.length == 0){
    return 0;
  }
  if(nums.length == 1){
    return nums[0];
  }
  var biggestFound = 0;
  for (var x = 0; x < nums.length; x++) {
    var tempBiggestFound = 0;
    tempBiggestFound += nums[x];
    if (tempBiggestFound > biggestFound || biggestFound == 0) {
      if(tempBiggestFound > biggestFound){
        biggestFound = tempBiggestFound;
      }
    }
    for (var i = x + 1; i < nums.length; i++) {
      console.log(nums[i]);
      tempBiggestFound += nums[i];
      if (tempBiggestFound > biggestFound || biggestFound == 0) {
        if(tempBiggestFound > biggestFound){
          biggestFound = tempBiggestFound;
        }
      }
      }
    }
    if (tempBiggestFound > biggestFound) {
      biggestFound = tempBiggestFound;
    }
  return biggestFound;

};

console.log(maxSubArray([-1,0,-2]));
