function solution(book_time) {
    let answer = 1;
    
    for(let i = 0; i< book_time.length; i++){
        for(let j = 0; j< book_time[i].length; j++){
            time = book_time[i][j].split(":");
            book_time[i][j]= j === 0? Number(time[0]) * 60 + Number(time[1]) : Number(time[0]) * 60 + Number(time[1]) + 10;            
        }
    }
    book_time.sort((a, b) => {
        if(a[0] === b[0]){
            return a[1] - b[1];
        }else {
            return a[0] - b[0];
        }
    });

    let nowArr = [];
    
    for(let i = 0; i < book_time.length; i++){
        

        if(nowArr.length !== 0){
            nowArr.sort((a, b) => {
              if (b[0] === a[0]) {
                return b[1] - a[1];
              } else {
                return b[0] - a[0];
              };
            });

            if(nowArr[0][1] > book_time[i][0]){
                for(let j = 0; j < nowArr.length; j++){
                    if(nowArr[j][1] <= book_time[i][0]){
                        nowArr.splice(j, 1);     
                    }
                }
                nowArr.push(book_time[i]);
            }else {
                if(book_time.length-1 !== i){
                    nowArr[0][1] = book_time[i+1][1];
                    nowArr = [];
                }
            }
        }else {
            nowArr.push(book_time[i]);
        }
        
        if(answer < nowArr.length){
            answer = nowArr.length;
        }
    }
    
    
    return answer;
}