function solution(phone_number) {
    var answer = '';
    //slice,padstart를 이용해보자.
    //slice의 기준은 length가 되어야 겠다.
    //뒷자리 4자리를 제외한 모든부분에 *처리
    
//     const num =phone_number
//     return String(num.slice(-4)).padStart(num.length,"*")
    
    //other
    // for(let i=0; i<phone_number.length;i++){
    //     if(i<phone_number.length-4){ 
    //         //뒷 4자리를 제외한 앞의 번호들은 *로 처리
    //         //answer=answer+"*"
    //         answer +="*"
    //     }else {
    //         answer +=phone_number[i]
    //     }
    // }
    // return answer
    
    for(let i=0; i<phone_number.length;i++){
        i<phone_number.length-4 ? answer +="*"
                                : answer +=phone_number[i]
    }
    return answer
    
    //another padstart 사용
    // answer = answer.padStart(phone_number.length-4,"*")
    // answer += phone_number.slice(phone_number.length-4)
    // return answer
    
    
}