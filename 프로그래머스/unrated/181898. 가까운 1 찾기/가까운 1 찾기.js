function solution(arr, idx) {
    //     for(const id in arr){
    //     if(id >= idx && arr[id]){
    //         return +id;
    //     }
    // }
    // return -1;
    // return arr.findIndex((el,id)=> el && id >= idx);
    return arr.indexOf(1,idx);
    
}