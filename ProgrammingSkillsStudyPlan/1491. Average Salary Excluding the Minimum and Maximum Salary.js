/*

https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/submissions/

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. 
Answers within 10-5 of the actual answer will be accepted.

 
*/

/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {

        //find biggest number in array
        var max = Math.max.apply(null, salary);
        //find smallest number in array
        var min = Math.min.apply(null, salary);
        //remove biggest and smallest number from array
        salary.splice(salary.indexOf(max), 1);
        salary.splice(salary.indexOf(min), 1);
        //find average of remaining numbers (add all numbers and then divide by the sum)
        var sum = 0;
        for(var i = 0; i < salary.length; i++){
            sum += salary[i];
        }
        return sum/salary.length;


    
};

console.log(average([1000, 2000, 3000]));