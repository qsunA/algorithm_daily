/*
    13. 핸드폰번호 가르기
    전화번호 뒷자리를 제외한 나머지 숫자를 전부 *로 가린다. 
*/

function hidePhoneNumber(phone_number) {
    var answer = '';
  answer = phone_number.substring(0,phone_number.length-4).split("").fill('*').join("");
  answer += phone_number.substring(phone_number.length-4, phone_number.length);
  return answer;
}

hidePhoneNumber("027778888");//"******8888"