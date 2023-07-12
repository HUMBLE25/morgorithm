function solution(num_list) {
    for(let id in num_list){
        if(num_list[id] < 0){
            return +id;
        };
    }
    return -1;
}