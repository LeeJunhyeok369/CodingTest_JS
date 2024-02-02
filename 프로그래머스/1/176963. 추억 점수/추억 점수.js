function solution(name, yearning, photo) {
    var answer = [];
    photo.forEach((e) => {
        let score = 0;
        for(i = 0; i < name.length; i++){
            if(e.indexOf(name[i]) != -1){
                score += yearning[i];
            }
        }
        answer.push(score);
    })
    return answer;
}