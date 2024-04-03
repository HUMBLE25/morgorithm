function solution(my_string, n) {
    //수도코드
    //각문자를 n번씩 반복해야 한다.
    //문자열을 입력받고 이를 각 문자열을 n번씩 반복한 문자열을 반환한다.
    
    let answer = ""
    for(let el of my_string){
          answer += el.repeat(n)
    }
    return answer
}