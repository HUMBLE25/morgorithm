function solution(start, end) {
    // const answer = []
    // for(let i = start; i <= end; i++){
    //     answer[answer.length] = i;
    // }
    // return answer
    const nums = new Array(end-start+1);
    const handelMap = (_,id) => {
        return id + start;
    };
    return [...nums].map(handelMap);

}