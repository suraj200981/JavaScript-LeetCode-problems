/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
  //remove all spaces in the string and split into array elements
    var arr = s.split(" ");

    //loop through the array and find the last element
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != "") {
            return arr[i].length;
        }
    }
    return 0;
    
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));