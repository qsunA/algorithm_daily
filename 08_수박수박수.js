/*
    08. 수박수박수

    "수박수박수.."로 유지하는 텍스트에서 인자에 자리수가 있을때 글자를 리턴 
*/


function getTemplateText(n) {
    var answer = '';
    for(var idx=0; idx<n;idx++){
        answer+= idx%2 ===0 ? '수' : '박';
    }
    return answer;
}

getTemplateText(5);//"수박수박수"