function solution(num_list, n) {
    const answer = [];
    for(let id in num_list){
        if(id < n){
            const length = answer.length ;
            answer[length] = num_list[id];
        }else{
            break;   
        }
    };
    // let i = 0;
    // while(i <= n -1){
    //     const length = answer.length ;
    //     answer[length] = num_list[i];
    //     i++;
    // }
    return answer;
}