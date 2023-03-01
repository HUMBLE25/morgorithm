function solution(n) {
    //수도코드

    // //정답을 담아 반환할 변수를 선언하고 빈배열을 할당한다.
    // let answer = [];
    // //1부터 n이하의 수중에서 n을 나누어 떨어지게 하는 수를 answer에 담아준다.
    // for(let i = 1; i <= n; i++){
    //     if(n%i === 0){
    //         answer.push(i);
    //     }
    // };    
    // //조건을 충족하는 값들이 담겨있는 배열이므로 반환한다.
    // return answer;
    
    //함수형 프로그래밍으로 접근했다.
    //new Array로 n만큼의 수를 요소로 가지는 배열을 만들고,
    //요소들의 값을 1씩 증가시켜준다. //1부터 n까지의 수를 검증하기 위함이다.
    //filter매소드로 이중에서 n을 나누어 떨어뜨리는 수를 뽑아 온다.
    //그리고 바로 반환한다.
    return Array.from(new Array(n), (_, i) => { return i+1 }).filter(
            (el) => n % el === 0
        );
}