function solution(my_string, k) {
    //입려받은 문자열을 k번 더하여 반환하면 된다.
    let answer = '';
    while(k>0){
        k--;
        answer += my_string;
    }
    return answer;
}