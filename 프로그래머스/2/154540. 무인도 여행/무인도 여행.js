function solution(maps) {
    let answer = [];
    let mapInfo =[];
    let mapChks = [];
    
    for(e of maps){
        mapInfo.push(e.split(""));
    }
    
    const mapChk = (x, y) => {
        if(-1 !== mapChks.indexOf(`[${x}, ${y}]`))return 0;
        let value = Number(mapInfo[x][y]);
        mapChks.push(`[${x}, ${y}]`);
        if(x !== 0 && mapInfo[x-1][y] !== "X"){
            value += mapChk(x-1, y);
        }
        if(x !== mapInfo.length - 1 && mapInfo[x+1][y] !== "X"){
            value += mapChk(x+1, y);
        }
        if(y !== 0 && mapInfo[x][y-1] !== "X"){
            value += mapChk(x, y-1);   
        }
        if(y !== mapInfo[0].length - 1 && mapInfo[x][y+1] !== "X"){
            value += mapChk(x, y+1);        
        }
        return value;
    }

    for(let i = 0; i < mapInfo.length; i++){
        for(let j = 0; j < mapInfo[i].length; j++){
            if(mapInfo[i][j] !== "X"){
                let value = mapChk(i, j);
                if(value !== 0){
                    answer.push(value);
                }
            }
        }
    }
    answer.sort((a, b) => a - b);
    if(answer.length !== 0){
        return answer; 
    }else {
        return [-1]; 
    }
}