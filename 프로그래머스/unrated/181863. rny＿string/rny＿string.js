function solution(rny_string) {
    const reducer = (acc,cur) => {
        return cur === 'm' ? acc + 'rn': acc + cur;
    }
    return [...rny_string].reduce(reducer,'');
}