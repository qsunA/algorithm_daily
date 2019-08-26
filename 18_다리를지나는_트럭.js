/*
    18. 다리를 지나는 트럭
    일차선 다리를 모든 트럭이 건너려면 몇초가 걸리는지 알기
    1초에 1만큼 움직이며, 
    bridge_length: 다리길이 
    weight: 견딜수 있는 무게 
    truck_weights: 트럭 무게 
*/


function getTimeToCrossBridgeTruck(bridge_length, weight, truck_weights) {
    var sec = 0;
    let bridgeAr = new Array(bridge_length).fill(0); // 다리의 길이만큼 배열 생성 
    while(truck_weights.length>0|| bridgeAr.length >0 ){
        sec++; // 초 증가 
        let sum = bridgeAr.reduce((ac,val)=>{return ac+=val},0); // 다리 중량을 확인 
        if(sum<=weight){
             sum = sum-(bridgeAr[0] ? bridgeAr[0]: 0) + (truck_weights[0] ? truck_weights[0]: 0);// 앞으로 지나갈 트럭의 무게까지 합함
            bridgeAr.shift(); // 다리에서 지나간 트럭의 값을 뺌
            
            if(sum<=weight && truck_weights.length>0 ){ // 합이 한계 중량보다 적으면 하나의 트럭을 더 넣는다. 
                bridgeAr[bridge_length-1] = truck_weights.shift(); // 다리의 가장 마지막에 트럭을 놓음 
            }
            else if(truck_weights.length ===0 && sum ===0){
                break;
            }
        }       
    }
    return sec;
}

getTimeToCrossBridgeTruck(2,10,[7,4,5,6]);//8