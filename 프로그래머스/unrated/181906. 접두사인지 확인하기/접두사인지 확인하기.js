function solution(my_string, is_prefix) {
    //접두사는 특정 인덱스까지의 문자열을 의미한다.
    const length = is_prefix.length;
    return +(my_string.slice(0,length) === is_prefix);
}