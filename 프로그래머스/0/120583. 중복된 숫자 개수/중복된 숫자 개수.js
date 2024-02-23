function solution(array, n) {
    var count = 0;
    array.forEach((e, i) => {
        if(e === n) {
            count++;
        }
    })
    return count;
}