/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 
*/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 var merge = function(nums1, m, nums2, n) {
    
    var subtractNum = m+n;
    var breakOff =false;

    if(m==0 && n ==1) {
        nums1[0] = nums2[0];
    }
    else if(m==0 && n >=1) {
        for(var i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    }
    else{

    for(var i = 0; i < n; i++) {
      if(breakOff==true){
            break;
      }
        for(var j = 0; j < n; j++) {
            if(nums1[i] <= nums2[j] || nums2[j] <= nums1[i]) {
                nums1.push.apply(nums1, nums1.splice(i+1,1,nums2[j]));
                i++;
                if(n==1){
                    breakOff= true;
                }
                }
            }
        }
       if(nums1.length != subtractNum) {
           console.log(nums1.length);
           console.log(subtractNum);
           console.log(nums1.sort());
           var newLen = nums1.length-subtractNum;


           if(nums1[0]!=0){
               for (let index = 0; index < nums1.length; index++) {
                    console.log(nums1[index]);
                     if(nums1[index]==0) {
                          nums1.splice(index,1);
                          index++;
                          console.log(nums1);

                     }
                   
               }
               console.log(nums1);

           }
           else {
           console.log(nums1);
           console.log(nums1.sort());

           nums1.sort().splice(0, newLen);
           }
           console.log(nums1.sort());
           nums1;

       }else{
          nums1.sort();
       }
    }
};

console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3));