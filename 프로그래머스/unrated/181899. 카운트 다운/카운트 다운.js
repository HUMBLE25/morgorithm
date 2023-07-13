function solution(start, end) {
    const root = start - end + 1;
    const arr = new Array(root);
    
    const mapFn = (_,id) => {
        return -id + start;
    };
    
    return [...arr].map(mapFn);
    // return Array.from(Array(start - end + 1),mapFn)
   
}