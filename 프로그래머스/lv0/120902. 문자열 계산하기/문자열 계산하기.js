function solution(my_string) {
    //수도코드
  
    //공백을 기준으로 나눠진 배열을 arr에 할당한다.
    const arr = my_string.split(' ');
    //0번쨰 인덱스의 값을 반환할 answer에 할당한다.
    //여기에 누산을 진행한다.
    let answer = Number(arr[0])
    for(let id =0; id<arr.length; id++){
        //Number를 사용했을떄 숫자가 아니면 NaN이 반환된다.
        //NaN은 falsy 값이므로 !연산자를 사용하여 +,-연산자 일때만을 고려한다.
        if(!Number(arr[id])){   
            //+이면 더하길 할당 연산자를 사용하고
            //-이면 빼기 할당 연산자를 사용한다.
            arr[id] === '+'  ?  answer += Number(arr[id+1])
                             :  answer -= Number(arr[id+1])
        }
    }
    //누산된 answer를 반환한다.
    return answer
}