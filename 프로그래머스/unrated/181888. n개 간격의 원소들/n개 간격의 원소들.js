function solution(num_list, n) {
    // const answer = [];
    // const length = num_list.length;
    // for(let i = 0; i <length; i += n){
    //     answer[answer.length] = num_list[i];
    // };
    // return answer;
    return num_list.filter((_,i) => !(i%n));
}