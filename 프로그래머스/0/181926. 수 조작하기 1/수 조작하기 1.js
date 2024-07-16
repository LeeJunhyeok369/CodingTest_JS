function solution(n, control) {
    var answer = n;
    const arr = control.split('');
    arr.forEach((e)=>{
        if(e == "w"){
            answer = answer + 1;
        }else if(e == "s"){
            answer = answer - 1;
        }else if(e == "d"){
            answer = answer + 10;
        }else if(e == "a"){
            answer = answer - 10;
        }
    })
    return answer;
}