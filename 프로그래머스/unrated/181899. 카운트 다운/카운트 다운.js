function solution(start, end) {
    const root = start - end + 1;
    const arr = new Array(root);
    
    const handleMap = (_,id) => {
        return -id + start;
    };
    
    return [...arr].map(handleMap);
}