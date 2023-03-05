function solution(s) {
    //수도코드
    //한번만 등장한 문자를 확인하는 방법
    
    //정답을 담아줄 변수를 선언하고 ''를 할당한다.
    let answer =''
    //문자를 사전순서대로 정렬해야 하기 때문에 배열로 만들고 미리 정렬시킨다.
    for(let el of [...s].sort()){
        //matcha매소드를 사용하기 위해 정규표현식 생성자로 각 요소를 찾을수 있도록 인스턴스를 생성한다.
        const regExp = new RegExp(el,'g')
        //길이가 1이 아니라면 두개이상이라는것 이므로 1인 경우에만 answer에 담아준다.
        if(s.match(regExp).length === 1){
            answer += el;
        }
    }

    return answer
}