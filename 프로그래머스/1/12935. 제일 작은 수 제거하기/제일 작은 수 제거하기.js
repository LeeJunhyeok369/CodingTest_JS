function solution(arr) {
    let answer = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < answer) answer = arr[i];
    }
    array = arr.filter((e) => (e !== answer));    

    return array.length !== 0 ? array : [-1];
}