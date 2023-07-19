function solution(my_string) {
    const arr = [];
    for(let id = my_string.length - 1; id >= 0; id --){
        !arr[arr.length - 1] 
            ? arr[arr.length] = '' + my_string[id] 
            : arr[arr.length] = my_string[id]+ arr[arr.length - 1] 
    }
    return arr.sort();
}