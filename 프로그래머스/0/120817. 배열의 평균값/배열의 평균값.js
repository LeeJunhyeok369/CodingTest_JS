function solution(numbers) {
    var answer = 0;
    
    numbers.forEach((e) => {
        answer+=e;
    })
    
    return answer / numbers.length;
}