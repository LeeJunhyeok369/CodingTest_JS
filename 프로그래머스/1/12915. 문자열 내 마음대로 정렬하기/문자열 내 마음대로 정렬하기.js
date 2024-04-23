function solution(strings, n) {
    var answer = [];
    let arrSort = [];
    
    strings.forEach((e, i) => {
        arrSort.push([e.slice(n, n+1), e]);
    })
    console.log(arrSort);
    arrSort.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1].localeCompare(b[1]);
      } else {
        return a[0].localeCompare(b[0]);
      };
    });
    console.log(arrSort);
    
    arrSort.forEach((e) => {
        answer.push(e[1]);
    })
    
    
    return answer;
}