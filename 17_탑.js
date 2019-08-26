/*
    17. 탑 
    탑 n대를 세운 후에 송/수신 장치 설치
    발신한 신호는 신호를 보낸 탑보다 높은 탑에서만 수색. 한번 수신된 신호는 다른 탑으로 송신되지 않음. 
    
*/

function getSignalTower(heights) {
    var answer = [];
    
    for(var i =0; i<heights.length;i++){
        for(var j=i-1; j>=0;j--){
            if(heights[i]<heights[j]){
                answer[i] = j+1;
                break;
            }else{
                answer[i] = 0;
            }            
        }
    }
    return answer;
}

getSignalTower([6,9,5,7,4]);//	[0,0,2,2,4]