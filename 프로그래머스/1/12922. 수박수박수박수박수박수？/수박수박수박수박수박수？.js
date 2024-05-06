function solution(n) {
    // 1번째 풀이
    // let answer = '수'
    // for(let i = 2; i <= n; i++){
    //     i%2 === 0 ? answer += '박' : answer += '수'
    // }
    // return answer
    
    // 2번째 풀이
    // n길이 만큼의 배열을 생성한다.
    // 인덱스가 짝수일 경우 수, 홀수일 경우 박을 배열에 담는다.
    // join()을통해 배열을 문자열로 바꾼다.
    return Array.from({length: n}, (_,id)=>{
        return id%2 == 0 ? '수' : '박'
    }).join('')
}