function solution(s){
    let pLen = s.match(/p/gi)?.length;
    let yLen = s.match(/y/gi)?.length;
    
    if(pLen === undefined && yLen === undefined) return true;
    return pLen === yLen ? true : false 
}