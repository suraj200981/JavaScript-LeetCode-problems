
/**
 * https://leetcode.com/problems/longest-common-prefix/submissions/
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

    if(strs.length ==0){
        return "";
    }
     if(strs.length ==1){
        return strs[0];

     }
    var preFixFound = "";
    var temp = "";
    var count=0;

    for(var i=0; i<strs.length; i++){
        if(strs[i].length == 0){
            return "";
        }
        if(i>=strs.length){
            break;
        }
        var currentWord = strs[i];
        preFixFound = temp;
        temp= "";
        for(var j=0; j < currentWord.length; j++){
            if(i>0){
                if(currentWord[j]==preFixFound[j]){
                   // count++;
                    temp += preFixFound[j];
                   // console.log(temp);
                    
                }
               
            }else{
                if(i+1>=strs.length){
                     break;
                    }
                if(currentWord[j] == strs[i+1][j]){
                    preFixFound += strs[i+1][j];
                    temp = preFixFound;
                    console.log(preFixFound);
                }
            }
        }
            
    }

    return temp;
    
};