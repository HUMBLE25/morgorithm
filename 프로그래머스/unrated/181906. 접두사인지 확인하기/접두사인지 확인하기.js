function solution(my_string, is_prefix) {
    // const length = is_prefix.length;
    // return +(my_string.slice(0,length) === is_prefix);
    return +my_string.startsWith(is_prefix);
}