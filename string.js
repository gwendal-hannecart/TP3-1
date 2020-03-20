function repeat(s, n){
    return s.repeat(n);
}

function truncate(s, n){
    let k= s.length ;
    if(n >= k){
        return s;
    }
    else{
        let result="";
        for(i=0;i<n;i++){
            if(n-i >3){
                result=result+s[i];
            }
            else{
                result[i]=result+".";
            }
        } 
         return result;
    }
      
}
