function solution(a, b, n) {
    var answer = 0;
    
    var num1 =0;
    var num2 =0;

    while(n >= a){
        num1 = Math.floor(n / a);
        num2 = num1 * b;
        answer += num2;
        n = n % a;    
        n = num2 + n;
    }
    
    
    return answer;
}