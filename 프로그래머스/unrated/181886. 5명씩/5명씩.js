function solution(names) {
    // const answer = [];
    // for(let i = 0; i < names.length; i += 5){
    //     answer[answer.length] = names[i];
    // };
    // return answer;
    
    return Array.from(Array(Math.ceil(names.length/5)),(_,id) => names[+id*5])
}