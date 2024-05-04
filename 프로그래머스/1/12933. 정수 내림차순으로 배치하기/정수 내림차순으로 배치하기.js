function solution(n) {
    var answer = 0;
    let arr = String(n).split('').map((e) => e);
    arr.sort((a,b) => b - a).forEach((a) => answer+=a);
    return Number(answer);
}