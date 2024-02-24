function solution(a, d, included) {
    let num = a;
    let numAll = 0;
    for(let bol of included){
        if(bol){
            numAll +=num;
        }
        num+= d;
    }
    return numAll;
}