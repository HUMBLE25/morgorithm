function solution(arr, queries) {
    const addFn = (s,e) => {
        if(s <= e){
            arr[s] += 1;
            s++;
            return addFn(s,e);
        }
    }
    queries.forEach((el) => addFn(...el));
    return arr
}