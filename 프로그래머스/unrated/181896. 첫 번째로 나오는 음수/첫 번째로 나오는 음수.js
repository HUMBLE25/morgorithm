function solution(num_list) {
    // for(let id in num_list){
    //     if(num_list[id] < 0){
    //         return +id;
    //     }
    // }
    // return -1;
    const isNegative = (el) => {
        return el < 0;
    }
    return num_list.findIndex(isNegative);
}