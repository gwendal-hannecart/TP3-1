function repeat(s, n){
    return s.repeat(n);
}

function truncate(s, n){
    if(s !=undefined){
    let k= s.length ;
    let result="";
    if(n >= k){
        return s;
    }
    else{
        let a=".";
        for(i=0;i<n;i++){
            if(n-i >3){
                result=result+s[i];
            }
            else{
                    result=result+a;
                }
            } 
            return result   ;
        }
      
    }
}

function isPalindrome(s){
    if(s !=undefined){
        let k=s.length;
        let i=0;
        for(i=0;i<Math.trunc(k/2);i++){
            if(s[i] !=s[k-1-i]){
                return false;
            }
        }
    return true;
    }
}

function swapCase(s){
    if(s !=undefined){
        let k=s.length;
        let i=0;
        let result="";
        for(i=0;i<k;i++){
            sequence=s[i];
            if(sequence>="A" && sequence<="Z"){
                    result=result+sequence.toLowerCase();
            }
            else{
                result=result+sequence.toUpperCase();
            }
            
        }
    return result;
    }
}
