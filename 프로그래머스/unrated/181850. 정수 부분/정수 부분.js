function solution(flo) {
    const str =flo + '';
    const arr = [...str];
    let answer = '';
    for(let el of arr){
        if(el !== '.'){
            answer += el;
        }else{
            break;
        }
    };
    return Number(answer);
    // return Math.trunc(flo)
    
    
    
}