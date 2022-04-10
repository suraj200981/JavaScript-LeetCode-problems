/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    var currentNum = 0;

    for (var i = 0; i < nums.length; i++){
        currentNum = nums[currentNum];

        for(var j = i+1; j < nums.length; j++){
            if(currentNum == nums[j]){
                return true;
            }
        }
    
    }
        return false;
    };

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));