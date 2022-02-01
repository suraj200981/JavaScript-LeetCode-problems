/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each
 * number sorted in non-decreasing order.
 * 
 * 
 * 
 * 
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {

    var newArray =[];

    for(var i = 0; i < nums.length; i++){
        newArray.push(Math.pow(nums[i],2));
    }
    
    return newArray.sort(function(a,b){return a-b});
};

console.log(sortedSquares([-4,-1,0,3,10]))