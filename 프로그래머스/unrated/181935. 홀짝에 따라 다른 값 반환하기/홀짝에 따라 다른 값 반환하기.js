function solution(n) {
    const reducer = (acc,cur) => {
        return acc + cur ** 2;
    }
    //홀수
    if(n % 2){
        return (1+n) / 2 * Math.ceil(n/2);
    }else{
    //짝수
        return 4 * Array.from(Array(n/2),(_,id)=>+id+1).reduce(reducer,0);
    }
}