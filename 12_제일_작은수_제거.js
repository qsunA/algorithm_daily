/*
    12. 제일 작은 수 제거 
    인자인 배열에서 제일 작은 수를 제거해서 배열 리턴
    수가 하나일때는 -1 리턴
*/

function removeMinValueInArray(arr) {
    var answer = [];
    answer = arr.filter((data)=>{
        return data>Math.min.apply(null,arr);
    });
    answer.length===0&&answer.push(-1);
    return answer;
}

removeMinValueInArray([4,3,2,1]) //[4,3,2]