function solution(arr, queries) {
    const addFn = (s,e) => {
        if(s <= e) {
       
            arr[s] += 1;
                  s += 1;  
            return addFn(s,e)
        }
    }
    queries.forEach((el) => addFn(...el));
    // for(const el of queries){
    //     addFn(...el);
    // }
    return arr
    //다른 방식은 없을까? 문제를 다르게 접근할 수 없나??
}