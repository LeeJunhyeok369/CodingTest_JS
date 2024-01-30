function solution(a, b) {
    let answer1 = 0;
    let answer2 = 0;
    answer1 = 2 * a * b;
    answer2 = Number(a.toString() + b.toString());
    if(answer1 > answer2){
        return answer1;
    }else {
        return answer2;
    }
    
}