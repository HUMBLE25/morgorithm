function solution(my_string, alp) {
    const upper = alp.toUpperCase();
    const reducer = (acc,cur) =>{
        return cur === alp ? acc + upper : acc + cur;
    }
    return [...my_string].reduce(reducer,'');
}