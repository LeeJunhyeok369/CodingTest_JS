function solution(n, m, section) {
    let answer = 0
    
    let arrChk = new Array(n).fill(true)
    section.forEach(e => arrChk[e-1] = false)
    
    for(let i = 0 ; i < arrChk.length ; i++) {
        if(!arrChk[i]) {
            answer += 1
            i += m-1
        }    
    }
    
    return answer
}