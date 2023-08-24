function solution(arr, queries) {
    queries.forEach((el) => {
        const [i,j] = el
        const a = arr[i];
        const b = arr[j];
        arr[i] = b;
        arr[j] = a;
    })
    return arr
}