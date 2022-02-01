/**
 * Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. 
Do the above modifications to the input array in place and do not return anything.


Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

 
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
   
    var orginalLength = arr.length;
    var count=0;
    
    for (var i = 0; i < arr.length; i++) {

        if(count==arr.length-1) {
           arr = arr.splice(orginalLength,arr.length);
        }
        count++;
        if(arr[i] == 0) {
            count++;
            arr.push.apply(arr, arr.splice(i+1,0,0));
            i++;
        }

    }
};



 
console.log(duplicateZeros([1,0,2,3,0,4,5,0]))