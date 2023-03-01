function solution(n) {
    //수도코드

    //정답을 담아 반환할 변수를 선언하고 빈배열을 할당한다.
    let answer = [];
    //1부터 n이하의 수중에서 n을 나누어 떨어지게 하는 수를 answer에 담아준다.
    for(let i = 1; i <= n; i++){
        if(n%i === 0){
            answer.push(i);
        }
    };    
    //조건을 충족하는 값들이 담겨있는 배열이므로 반환한다.
    return answer;
}