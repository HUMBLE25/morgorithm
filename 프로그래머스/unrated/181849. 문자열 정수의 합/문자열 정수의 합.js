function solution(num_str) {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const accumulator = (acc,cur) => {
        return acc + numbers[cur];
    }
    const answer = [...num_str].reduce(accumulator,0);
    return answer;
    
}