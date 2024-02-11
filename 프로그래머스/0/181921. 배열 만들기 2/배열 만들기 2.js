function solution(l, r) {
    const result = []
    
    for(let i=l; i<=r; i++ ){
      if(/^[05]+$/.test(String(i))){
        result.push(i)
       } 
    }
    
    return result.length === 0? [-1] : result
}