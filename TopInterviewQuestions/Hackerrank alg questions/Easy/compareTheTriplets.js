function compareTriplets(a, b) {
    if(a[0]>b[0]){
        return 1;
    }
    else if(a[0]<b[0]){
        return -1;
    }
    else{
        return 0;
    }

}


console.log(compareTriplets([1,2,3],[3,2,1]))