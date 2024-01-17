function solution(array, commands) {
    var answer = [];
    
    commands.filter(function(cdata){
        let j = cdata[1] - cdata[0];
        let arra = [...array]; 
        let arr = arra.splice(cdata[0]-1, j+1)
        let arr_sort = arr.sort(function(a,b){return a-b;});
        let ans = arr_sort.splice(cdata[2]-1 , 1);
        answer.push(ans[0]);

    })
    
    
    
    return answer;
}