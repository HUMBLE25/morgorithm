function solution(my_string, is_suffix) {
//     const length1 = my_string.length;
//     const length2 = is_suffix.length;
//     return +(my_string.slice(length1-length2) === is_suffix);
    
    return + my_string.endsWith(is_suffix);
}