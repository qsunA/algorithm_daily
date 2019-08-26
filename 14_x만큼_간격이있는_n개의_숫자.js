/*
    14. x만큼 간격이 있는 n개의 숫자
    n개의 배열은 x만큼 간격이 있음. 

*/


function getNumberArray(x, n) {
    return Array(n).fill(x).map((v,idx)=>{return v+v*idx});
}

getNumberArray(-4,5); //[-4,-8,-16,-20,-24]