function solution(s, skip, index) {
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    let answer = '';
    
    abc = abc.split('');
    skip = skip.split('');
    s = s.split('');
    
    for(e of skip){
        abc.splice(abc.indexOf(e), 1);
    }
    for(e of s){
        if(abc.indexOf(e) + index > abc.length-1){
            answer += abc[(abc.indexOf(e) + index) % abc.length];
        }else {
            answer += abc[abc.indexOf(e) + index];
        }
    }
    
    return answer;
}