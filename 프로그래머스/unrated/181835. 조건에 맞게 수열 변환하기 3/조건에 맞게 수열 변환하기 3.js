function solution(arr, k) {
    // return k % 2  
    //         ? arr.map(el => el * k) 
    //         : arr.map(el => el + k);
    const handleMap = (el) => {
        return k % 2 ? el * k : el + k;
    }
    return arr.map(handleMap)
}