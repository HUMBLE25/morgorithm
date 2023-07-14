function solution(arr) {
   const answer = [];
    for(let el of arr){
        for(let i = 0; i < el; i++){
            answer[answer.length] = el;
        }
    };
    return answer;
}