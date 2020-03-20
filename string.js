function repeat(s, n){
    return s.repeat(n);
}

function truncate(s, n){
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
