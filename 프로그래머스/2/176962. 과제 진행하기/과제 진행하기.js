function solution(plans) {
    let endPlans = [];
    let stopPlans = [];
    let nowTime = [];
    for(i = 0; i< plans.length; i++){
        plans[i][1] = plans[i][1].split(":"); 
        plans[i][1][0] = Number(plans[i][1][0]);
        plans[i][1][1] = Number(plans[i][1][1]);
        plans[i][2] = Number(plans[i][2]);
    }
    
    plans.sort((a, b) => {
      if (a[1][0] === b[1][0]) {
        return a[1][1] - b[1][1];
      } else {
        return a[1][0] - b[1][0];
      };
    });
    plans.forEach((e, i) => {
        
            let minPlus = e[1][1] + e[2];
            let hour = e[1][0];
            if(stopPlans.length){
                if(hour != nowTime[0] || e[1][1] != nowTime[1]){
                    let remainTime = 0;


                    for(let j=0; j < stopPlans.length; j++){

                        if(hour > nowTime[0]){
                            remainTime =  60 * (hour - nowTime[0]) + e[1][1] - nowTime[1];
                        }else {
                            remainTime =  e[1][1] - nowTime[1];
                        }
                        reTime = remainTime - stopPlans[j][1];
                        
                        if(reTime >= 0){
                            endPlans.push(stopPlans[j][0]);
                            nowTime=timePlus(nowTime[0],nowTime[1]+stopPlans[j][1]);
                            stopPlans.shift();
                            if(reTime == 0){
                                j = stopPlans.length + 1;
                            }
                            j--;

                        }else {
                            stopPlans[j][1] = stopPlans[j][1] - remainTime;
                            j = stopPlans.length;

                        }
                    }
                }


                
            }

            nowTime = [hour, e[1][1]];

            hour = timePlus(hour, minPlus)[0];
            minPlus = timePlus(hour, minPlus)[1];
            if(i != plans.length - 1){
                let nextHour = plans[i+1][1][0];
                let nextMin = plans[i+1][1][1];

                if(hour < nextHour){
                    endPlans.push(e[0]);
                    nowTime = [hour, minPlus];
                }else if(hour == nextHour){
                    if(minPlus > nextMin){
                        
                        stopPlans.unshift([e[0], minPlus - nextMin])
                        nowTime = [nextHour, nextMin];
                    }else {
                        
                        endPlans.push(e[0]);
                        nowTime = [hour, minPlus];
                    }
                }else {
                    
                    stopPlans.unshift([e[0], minPlus + 60 * (hour-nextHour) - nextMin])
                    nowTime = [nextHour, nextMin];
                }

            }else {
                endPlans.push(e[0]);
            }
        



    });
    
    stopPlans.forEach((e,i) => endPlans.push(e[0]));
    
        
    return endPlans;
}



function timePlus(hour, minPlus){
    if(minPlus >= 60){
        let num = 1;
        if(minPlus >= 120){
            num = 2;
        }
        minPlus = minPlus - num * 60;
        hour = hour + num;
    }
    
    return [hour, minPlus];
}

