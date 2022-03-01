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