function solution(numbers, n) {
    let answer = 0;
    for(let el of numbers){
        answer += el;
        if(answer > n) return answer;
    }
    // const reducer = (acc,cur)=>{
    //     return acc > n ? acc + 0 : acc + cur ;
    // }
    // return numbers.reduce(reducer,0);
}