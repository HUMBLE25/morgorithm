function solution(n, control) {
    const fns ={
        "w":(n)=>{return n+=1;},
        "s":(n)=>{return n-=1;},
        "d":(n)=>{return n += 10;},
        "a":(n)=>{return n -= 10;}
    }
    for(let el of control){
        n = fns[el](n);
    }
    return n
}