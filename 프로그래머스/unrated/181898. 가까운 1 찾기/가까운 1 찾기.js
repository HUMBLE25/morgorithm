function solution(arr, idx) {
    for(const id in arr){
        if(id >= idx && arr[id] === 1){
            return +id;
        }
    }
    return -1;
}