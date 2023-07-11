function solution(num_list) {
    const length = num_list.length;
    const last1 = num_list[length -1];
    const last2 = num_list[length-2] ;
    last1 > last2
    ? num_list[length] = last1 - last2
    : num_list[length] = last1 * 2;
    return num_list;
}