function solution(num_list, n) {
    // for(let i = 1; i <= num_list.length - n; i++){
    //     const poped = num_list.pop();
    //     num_list = [poped,...num_list];
    // };
    // return num_list;
    
    //이 코드가 더 빠르다.
    // const arr1 = [];
    // const arr2 = [];
    // for(let id in num_list){
    //     id < n 
    //         ? arr1[arr1.length] = num_list[id]
    //         :  arr2[arr2.length] = num_list[id];
    // }
    // return [...arr2,...arr1]
    
     num_list.push(...num_list.splice(0, n));
    return num_list
}