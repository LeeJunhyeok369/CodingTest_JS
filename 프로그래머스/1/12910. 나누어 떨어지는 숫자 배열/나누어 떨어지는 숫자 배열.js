function solution(arr, divisor) {
    var answer = arr.filter((e) => (e%divisor === 0));
    return answer.length === 0 ? [-1] : answer.sort((a,b) => a - b);
}