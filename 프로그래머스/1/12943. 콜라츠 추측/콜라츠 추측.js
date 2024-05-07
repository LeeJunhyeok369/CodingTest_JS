let cnt = 0;
function solution(num) {
    if(num === 1) return cnt;
    if(cnt === 500) return -1;
    ++cnt;
    if(num % 2 === 0) return solution(num / 2);
    if(num % 2 === 1) return solution(num * 3 + 1);
}
