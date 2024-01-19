function solution(t, p) {
    var answer = 0;
    const len = p.length-1; 
    for(let i = len; i< t.length; i++){
        if(t.substr(i-len, len+1) <= p){
            ++answer;
        }
    }
    
    return answer;
}