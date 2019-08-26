/*
    05. 자리수 더하기
    자연수 n의 각자리 수를 더해서 합하는 함수 
*/
function sumDigit(n)
{
    let arr = n.toString().split("").map(Number);
    return arr.reduce((ac,val)=>{return ac+val;},0);
}

sumDigit(123);//6
