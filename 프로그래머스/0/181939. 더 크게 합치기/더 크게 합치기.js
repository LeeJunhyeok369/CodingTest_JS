function solution(a, b) {
    let answer1 = String(a) + String(b);
    let answer2 = String(b) + String(a);
    if(answer1 > answer2){
      return Number(answer1); 
    }else {
      return Number(answer2);
    }   
}