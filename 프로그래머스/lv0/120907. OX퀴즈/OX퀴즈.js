function solution(quiz) {
    //수도코드
    //입력받은 배열의 각요소에 접근하여 연산을 진행하면 되겠다.
    //x,y,z가 3개로 한정되어 있으니 분리시키고 연산자만 생각하면 되겠다.
    
    let answer=[]
    for(let el of quiz){
        //공백을 기준으로 나눠준다.
        const operate = el.split(' ')
        
        operate[1] === '+' 
        //연산자가 + 일경우 숫자타입으로 변경후 더한값이 입력받은 결과 값과 같은지 확인한다.
                        ? operate[4] == Number(operate[0]) + Number(operate[2])
        //같으면 'O'아니면 'X'를 answer에 넣어준다.
                                                             ? answer.push("O")
                                                             : answer.push("X")
        //연산자가 + 가아닌 경우,즉 -인 경우 의 연산 값이 입력받은 결과 값과 같은지 확인하다.
                        : operate[4] == Number(operate[0]) - Number(operate[2])
        //같으면 'O'아니면 'X'를 answer에 넣어준다.
                                                             ? answer.push("O")
                                                             : answer.push("X")
     
    }
    //O,X를 담은 배열을 반환한다.
    return answer

}