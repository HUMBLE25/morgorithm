function solution(n) {
    //수도코드
    //입력받은 숫자에 ''을 더하여 문자로 만들고 내림차순으로 정렬 후 join매소드를 사용하여 문자열로 바꿔준다.
    // 그리고 Number를 사용하여 문자형을 숫자형으로 바꿔준다.
    return Number([...n+''].sort((a,b)=>b-a).join(''))
}