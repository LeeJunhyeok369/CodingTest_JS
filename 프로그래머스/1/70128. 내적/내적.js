function solution(a, b) {
    var answer = 0;
    a.forEach((e, i) => {
        answer += e * b[i]; 
    })
    return answer;
}