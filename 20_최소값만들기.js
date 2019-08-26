/*
    19.최대값과 최소값
    길이가 같은 배열 A,B의 각 하나의 숫자를 곱한다음 그 수들을 모두 더한다. 
    이때 나올 수 있는 가장 작은 수. 
*/


function getCalculateMinNumber(A,B){
    var answer = 0;

    
    A.sort((a,b)=>{return a-b;});
    B.sort((a,b)=>{return b-a;});

    for(var idx=0; idx<A.length;idx++){
        answer+=A[idx]*B[idx];
    }
    return answer;
}

getCalculateMinNumber([1, 4, 2],[5, 4, 4]);//29