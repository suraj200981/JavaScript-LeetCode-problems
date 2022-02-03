/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 
*/

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    

    for (var i = 0; i <arr.length; i++) {

        for (var j = 0; j < arr.length-1; j++) {
                if(arr[i] ==2* arr[j] && i!==j){
                    return true;
            }
        }
    }
    return false;
};


console.log(checkIfExist([-2,0,10,-19,4,6,-8]));