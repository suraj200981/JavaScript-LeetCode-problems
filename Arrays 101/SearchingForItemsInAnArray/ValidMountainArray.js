/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        if(arr.length>=3){
           for (var j = 0; j < arr.length; j++) {
               if(arr)
           }
        }
    }
};



console.log(validMountainArray([0,3,2,1]));