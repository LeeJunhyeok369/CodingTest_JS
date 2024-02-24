function solution(s){
    const stack = [];
    
    for(let char of s){
        if(char === "("){
            stack.push(char)
        }else {
            const lastChar = stack.pop();
            if(char === ")" && lastChar!=="("){
                return false;
            }
        }
    }
    
    
    return stack.length === 0;
}