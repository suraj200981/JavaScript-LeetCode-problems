/**
 * 
 * Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 
 * 
https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/submissions/
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
     
    var count = 0;

    for(var i = low; i<=high; i++){
        if(i%2 != 0){
            count++;
        }
    }
    return count;
};


console.log(countOdds(3, 7));