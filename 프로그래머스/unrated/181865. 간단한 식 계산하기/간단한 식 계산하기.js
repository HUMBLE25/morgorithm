function solution(binomial) {
    // eval 사용 하지만 절대 사용하면 안된다
    // return eval(binomial);
    // const arr = binomial.split(" ");
    // if(arr[1] === "+"){
    //     return (+ arr[0]) + (+ arr[2]);
    // }else if(arr[1] === "-"){
    //     return (+ arr[0]) - (+ arr[2]);
    // }else if(arr[1] === "*"){
    //     return (+ arr[0]) * (+ arr[2]);
    // }
    const ops ={
        "+":(a,b) => a + b,
        "-":(a,b) => a - b,
        "*":(a,b) => a * b
    }
    const [a,op,b] = binomial.split(" ");
    return ops[op](+a,+b)
    
    
}