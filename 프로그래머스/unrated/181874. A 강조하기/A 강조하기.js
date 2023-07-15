function solution(myString) {
    const reducer = (acc,cur) => {
        return cur === 'a' || cur === 'A' 
            ? acc + cur.toUpperCase() 
            : acc + cur.toLowerCase();
    };
    return [...myString].reduce(reducer,'');
}