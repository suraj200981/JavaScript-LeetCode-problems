/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {

    var numsDup = nums

   //add numsDup array to end of nums array
    nums.push(...numsDup);

    return nums;    
};

console.log(getConcatenation([1,2,1]));