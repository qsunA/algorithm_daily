/*
    09. 하샤드수
    양의 정수 x가 하샤드 수이기 위해서 x의 자리수의 합으로 x가 나누어 떨어져야함 
    12의 경우 12가 1+2의 합인 3으로 나누어떨어져야함
*/

function getAllHarshadNumber(x) {
    var answer = true;
    var arr = x.toString().split('').map(Number);
    answer = x%arr.reduce((ac,val)=>{return ac+val;},0) ===0 ? true:false;
    return answer;
}

getAllHarshadNumber(12);//true