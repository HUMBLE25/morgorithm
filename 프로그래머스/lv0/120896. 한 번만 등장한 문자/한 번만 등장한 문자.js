function solution(s) {
    //수도코드
    //한번만 등장한 문자를 확인하는 방법
    
    // //정답을 담아줄 변수를 선언하고 ''를 할당한다.
    // let answer =''
    // //문자를 사전순서대로 정렬해야 하기 때문에 배열로 만들고 미리 정렬시킨다.
    // for(let el of [...s].sort()){
    //     //matcha매소드를 사용하기 위해 정규표현식 생성자로 각 요소를 찾을수 있도록 인스턴스를 생성한다.
    //     const regExp = new RegExp(el,'g')
    //     //길이가 1이 아니라면 두개이상이라는것 이므로 1인 경우에만 answer에 담아준다.
    //     if(s.match(regExp).length === 1){
    //         answer += el;
    //     }
    // }
    // return answer
    
    // //다른 매서드 활용 indecOf,lastIndecOf매소드를 이용했다.
    // let answer = ''
    // for(let el of s){
    //     //indexOf는 첫번쨰 인덱스를 찾고 lastIndexOf는 마지막 인덱스를 찾는다.
    //     if(s.indexOf(el) === s.lastIndexOf(el)){
    //         answer +=el
    //     }
    // }
    // //문자를 사전 순서대로 정렬해야 하므로 스프레드 연산자로 배열로 만들고,
    // //sort매서드로 정렬을 시킨다. 그리고 join매서드로 모아준다.
    // return [...answer].sort().join('')
    
    //filter매서드를 활용한 풀이
    const answer = [...s].sort()
                         .filter((el)=>{
                            const regExp = new RegExp(el,'g')
                            return s.match(regExp).length === 1
                           })
                         .join('')
    return answer
    
}