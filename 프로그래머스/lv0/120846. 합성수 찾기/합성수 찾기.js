function solution(n) {
    //수도코드
    //약수의갯수는 나머지 연산자로 연산했을때 나머지가 0인 수의 갯수이다.
    //n이하의 모든수마다 1부터 해당수까지 나머지연산자로 연산해야 하나?

    let isvalid = 0;
    let answer =0;
    for(let i=1;i<=n;i++){
        for(let j=1; j<=i; j++){
            if(i%j === 0){
                isvalid ++
            }
        }
        if(isvalid >=3){
            answer ++
        }
        isvalid = 0;
    }
    
    return answer
}