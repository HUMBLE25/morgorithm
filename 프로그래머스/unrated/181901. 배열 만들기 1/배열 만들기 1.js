function solution(n, k) {
 
    const root = Math.trunc(n/k);
    const arr = new Array(root);
    const handleMap = (_,id) =>{
        return (+id +1) * k;    
    }
    return [...arr].map(handleMap);
}