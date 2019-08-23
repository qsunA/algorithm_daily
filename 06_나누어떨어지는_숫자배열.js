/*
    arr중 divisor 로 나누어떨어지는 값을 오름차순으로 정렬
*/

function getDividingArray(arr, divisor) {
    var answer = [];
    arr.map((data)=>{
       data%divisor ===0 ? answer.push(data) : null; 
    });
    
    answer.length===0? answer.push(-1):answer.sort((a,b)=> {return a-b});
    return answer;
};

getDividingArray([5, 9, 7, 10], 5);//[5,10]