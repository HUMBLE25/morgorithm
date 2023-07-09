function solution(my_string, n) {
    // console.log(my_string.length,n)
    // console.log(my_string[my_string.length-n])
    //n번 반복하여 문자를 더하면 되지않을까?
    //반복문을 활용하면 가능하다.
    const length = my_string.length;
    let answer = ''
    for(let i = n; i > 0 ;i-- ){
        answer += my_string[length-i];
    }
    return answer;
}