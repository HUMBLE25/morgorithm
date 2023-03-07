function solution(my_str, n) {
    //수도코드



    // let i = 0;
    // let answer=[]
    // //i*n은 slice매소드에 첫번째 인자로 들어갈 값이다.
    // //이 값은 slice매소드의 시작점이 되는데 이떄 값이 입력받은 문자열의 길이보다 작으면 반복문 중단한다.
    // while(i*n <= my_str.length){
    //     answer.push(my_str.slice(i*n,(i+1)*n))
    //     //i의 값을 매반복의 종료지점마다 1씩 증가시켜준다.
    //     i++
    // }
    // //마지막 인덱스의 값이 ''일경우 pop매소드를 이용하여 없애준다.
    // if(answer[answer.length-1]===''){
    //     answer.pop()
    // }
    // //배열에 담아 반환한다.
    // return answer
    
    //정규표현식을 이용한 방법
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}