function solution(arr, queries) {
    queries.forEach(([i,j]) => {
        const a = arr[i];
        const b = arr[j];
        arr[i] = b;
        arr[j] = a;
    })
    return arr
 
}