function solution(numbers) {
    //수도코드
    //숫자를 영어로나타낸 문자열을 입력바도 이를 숫자로 바꿔서 반환한다.
    //소문자로만 구성되고,공백없이 조합되어 있다.
    //정규표현식을 사용해볼수 있지 않을까?
    
    //숫자크기 순서대로 영어를 배열에 담는다.
    // const en =['zero','one','two','three','four','five','six','seven','eight','nine']
//     for(let id in en){
//         //배열의 각 요소를 정규표현식으로 바꿔준다.
//         // const regExp = new RegExp(en[id],'g')
//         //replace매소드를 사용하여 이를 해당 인덱스로 바꿔주고 재할당해준다.
//         // numbers = numbers.replace(regExp,id)

//         //replace매소드가 아닌 split으로 해당단어를 기준으로 쪼개고 join으로 붙일때 해당단어의 숫자로 붙인다.
//         numbers = numbers.split(en[id]).join(id)
        
//     }
    
//     //문자열이므로 Number매소드를 적용하여 숫자로 바꾼후 반환한다.
//     return Number(numbers)
    
    // const en =['zero','one','two','three','four','five','six','seven','eight','nine']
    // const answer = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
    //     return en.indexOf(v);
    // });
    // return Number(answer)

    
    //reduce 매소드를 사용해보자.
    const en =['zero','one','two','three','four','five','six','seven','eight','nine']
    const answer = en.reduce((acc,cur,id)=>{
        return numbers = numbers.split(en[id]).join(id)
    },'')
    return Number(answer)

}