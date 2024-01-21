function solution(s) {
    var answer = [];
    let chk_arr = [];
    for(let i = 0; i < s.length; i++){
        if(!chk_arr.includes(s[i])){
            answer.push(-1);
            chk_arr.push(s[i]);
        } else if(chk_arr.includes(s[i])){
            answer.push(i - chk_arr.lastIndexOf(s[i]));
            chk_arr.push(s[i]);
        }
    }
 	return answer;
}