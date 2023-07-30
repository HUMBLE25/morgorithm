function solution(arr, queries) {
    // const addFn = (s,e) => {
    //     if(s <= e) {
    //         arr[s++] ++;
    //         return addFn(s,e)
    //     }
    // }
    // queries.forEach(([s,e]) => addFn(s,e));
    // return arr
    
     queries.forEach(([s,e]) =>{
         while(s<=e) arr[s++] ++;
     });
    return arr
}