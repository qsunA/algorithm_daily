/*
    19.최대값과 최소값
    s에는 공백으로 구분된 숫자들이 저장되어있으며 이 중 최대값과 최소값을 찾아라. 
*/

function getMaxNumAndMinNum(s) {
    var arr = s.split(" ").map((data)=>{return parseInt(data)});

    return `${Math.min.apply(null,arr)} ${Math.max.apply(null,arr)}`;
}

getMaxNumAndMinNum('-1 -2 -3 -4');// 4 -1