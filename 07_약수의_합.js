/*
    07. 약수의 합 
    자연수 n의 약수를 모두 더한 값을 리턴 
*/

function getDivisorSum(n) {
    var answer = 0;
    var arr = Array.from({length:n},(val,idx)=> idx+1);
    
    answer = arr.reduce((ac,val)=>{ var sum =n%val===0 ? ac+val : ac; return sum;}, 0);
    
    return answer;
    
}

getDivisorSum(10);//18