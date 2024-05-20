function solution(s) {
    if(s.match(/[a-zA-Z]/g) === null && (s.length === 6 || s.length === 4)) return true;
    return false;
                
}