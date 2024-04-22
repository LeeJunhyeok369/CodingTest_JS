function solution(absolutes, signs) {
    let answer = 0;
    
    for(i=0; absolutes.length>i; i++){
        if(signs[i]){
            answer +=absolutes[i];
        }else {
            answer -=absolutes[i];
        }
    }
    return answer;
}