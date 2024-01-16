function solution(targets) {
    var answer = 0;
    targets.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      };
    });
    var count = 1;
    var num = 0;
    var num2 = 0;
    
    while (true) {
        if(num2+1 != targets.length){

            if(targets[num][0] == targets[num2+1][0]){
                num2++;
            }else if(targets[num][1] > targets[num2+1][0]){
                if(targets[num][1] > targets[num2+1][1]){
                    targets[num][1] = targets[num2+1][1];
                }
                num2++;
            }else {
                num = num2 + 1;
                count++;
            }
            
        }else {
            break;
        }
    }


    answer = count;

    return answer;
}


