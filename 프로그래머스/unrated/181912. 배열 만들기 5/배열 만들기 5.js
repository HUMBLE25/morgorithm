function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc,cur) => {
        const num = +cur.slice(s,s + l);
        return num > k ?  [...acc,num] : acc;
    },[])
}