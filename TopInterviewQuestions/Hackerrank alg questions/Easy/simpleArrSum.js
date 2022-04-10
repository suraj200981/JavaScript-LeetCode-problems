function simpleArraySum(ar) {


    var sum = 0;
    //loop through ar
    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;

}

console.log([1,2,3])