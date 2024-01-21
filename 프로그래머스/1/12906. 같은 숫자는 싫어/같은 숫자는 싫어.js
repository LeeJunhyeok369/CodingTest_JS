function solution(arr)
{
    var answer = [arr[0]];

    let num = 0;
    arr.forEach(function(n) {
        if(answer[num] != n){
            answer.push(n);
            num++;
        }
    })
    
    return answer;
}