function solution(arr, k) {    
    if(k % 2){
        for(let id in arr){
            arr[id] = arr[id] * k;
        }
       // return arr.map(el => el * k);
    } else {
         for(let id in arr){
            arr[id] = arr[id] + k;
        }
        // return arr.map(el => el + k);
    }
    return arr;
}