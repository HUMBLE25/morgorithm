function solution(numLog) {
    const ops = {
        "1":"w",
        "-1":"s",
        "10":"d",
        "-10":"a"
    }
    let answer = ''
    for(let i = 1; i < numLog.length; i++){
        const op = numLog[i] - numLog[i-1];
        answer += ops[op];
    }
    return answer
}