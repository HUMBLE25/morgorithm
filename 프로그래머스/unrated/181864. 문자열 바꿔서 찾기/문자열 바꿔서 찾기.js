function solution(myString, pat) {
    //1.reduece이용
    const reducer = (acc,cur) => {
        return cur === "A" ? acc + "B" : acc + "A";
    }
    return +[...myString].reduce(reducer,'').includes(pat);
    //2.replace이용
    return +myString.replace(/A|B/g,(el) => {
        return el === "A" ? "B" : "A";
    }).includes(pat)
}