function solution(s) {
    let array = s.split(" ");
    let max = Number(array[0]);
    let min = Number(array[0]);
    array.map((e) => {
        let num = Number(e);
        max = max > num ? max : num;
        min = min < num ? min : num; 
    })
    return `${min} ${max}`;
}