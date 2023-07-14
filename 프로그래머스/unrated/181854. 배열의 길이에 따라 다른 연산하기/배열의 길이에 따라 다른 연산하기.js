function solution(arr, n) {
    const oddFn = (el,id) => {
        return id % 2 ? el : el + n;
    };
    const evenFn = (el,id) => {
        return id % 2 ? el + n : el;
    };
    return arr.length % 2 ? arr.map(oddFn) : arr.map(evenFn);
}