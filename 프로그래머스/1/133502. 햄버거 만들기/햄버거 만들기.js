        function solution(ingredient) {
            
            var answer = 0;
            var num = 0;
            var nums = 0;
            
            while (ingredient.indexOf(1 , num) != -1) {
                
                nums = ingredient.indexOf(1 , num);
                
                if(ingredient[nums+1] == 2){
                    if(ingredient[nums+2] == 3){
                        if(ingredient[nums+3] == 1){
                            answer++;
                            ingredient.splice(nums, 4);
                            
                            if(nums < 1) {
                                num = nums;                                 
                            }else if(nums < 2) {
                                num = nums-1;                                
                            }else if(nums < 3) {
                                num = nums-2;                                
                            }else {
                                num = nums-3;                                 
                            }
                            
                        }else {
                            num = nums+4;
                        }
                    }else {
                        num = nums+2;
                    }
                }else {
                    num = nums+1;
                }
                
            }

            
            return answer;
            
        }