function solution(number) {
    const acc = Array(...number).reduce((acc,cur) => {
       return +cur + acc 
    },0);
    return acc % 9;
}