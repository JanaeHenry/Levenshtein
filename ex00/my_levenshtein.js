
/*function my_levenshtein(param_1, param_2){
    //check to see if the lengths of the words equal
    if (param_1.length != param_2.length){
        return -1;
}
    if(param_1.length == param_2.length){
        //let arr = param_1 && param_2;
        for(let i = 0; i < param_1.length; i++ )
        for(let j = 0; j < param_2.length; j++ ){

        }
    }
};
// extract each postion of given strings and compare if they are the same

// when a character is encountered that is not the same, return to a new string

//within the new string*/


    function my_levenshtein (s, t) {
        if (s.length != t.length){
            return -1;
    }   else if (s.length == t.length) {
        if (!s.length) return t.length;
        if (!t.length) return s.length;
        const arr = [];
        for (let i = 0; i <= t.length; i++) {
          arr[i] = [i];
          for (let j = 1; j <= s.length; j++) {
            arr[i][j] =
              i === 0
                ? j
                : Math.min(
                    arr[i - 1][j] + 1,
                    arr[i][j - 1] + 1,
                    arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
                  );
          }
        }
        return arr[t.length][s.length];
    }
      };
 

    /*if(param_1.length == param_2.length){
        while(){
            if(){
            if true write here
            }
            else{
            if false write here
            }
        }
        return count;
    }
    else{
        return -1;
    }*/
