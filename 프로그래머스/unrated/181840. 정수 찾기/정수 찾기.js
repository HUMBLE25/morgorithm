function solution(num_list, n) {
    // return + num_list.includes(n);
    for(let el of num_list){
        if(el === n) return 1;
    };
    return 0;
}