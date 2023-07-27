function solution(numLog) {
    // const ops = {
    //     "1":"w",
    //     "-1":"s",
    //     "10":"d",
    //     "-10":"a"
    // }
    const ops = {
        "1":() => { return answer += "w" },
        "-1":() => { return answer += "s" },
        "10":() => { return answer += "d" },
        "-10":() => { return answer += "a" }
    }
    
    let answer = ''
    for(let i = 1; i < numLog.length; i++){
        const op = numLog[i] - numLog[i-1];
        ops[op](answer);
        // answer += ops[op]
    }
    return answer
}