/*
   10. 정수 내림차순으로 배치
    정수N의 각자리수를 큰것부터 작은 수로 정렬
*/

function getDescendingNumber(n) {
    let arr = n.toString().split("").map(Number);
    arr.sort((a,b)=>b-a);
    return parseInt(arr.join(''));
}

getDescendingNumber(2378);//8732