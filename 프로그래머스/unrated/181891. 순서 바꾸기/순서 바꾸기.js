function solution(num_list, n) {
    for(let i = 1; i <= num_list.length - n; i++){
        const poped = num_list.pop();
        num_list = [poped,...num_list];
    };
    return num_list
}