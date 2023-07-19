function solution(my_string) {
    // const arr = [];
    // for(let id = my_string.length - 1; id >= 0; id --){
    //     const length = arr.length;
    //     !arr[length - 1] 
    //         ? arr[length] = my_string[id] 
    //         : arr[length] = my_string[id]+ arr[length - 1];
    // }
    // return arr.sort();
    
    const arr = [];
    const reducer = (acc,cur,id) => {
        arr[arr.length] = acc;
        return cur + acc;
    }
    [...my_string].reduceRight(reducer);
    return [...arr,my_string].sort();
    
}