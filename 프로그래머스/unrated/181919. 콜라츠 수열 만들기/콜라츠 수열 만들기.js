function solution(n) {
    const answer = [n];
    while(n !== 1){
        if( n % 2 ){
            //홀수
            n = 3 * n + 1;
            answer[answer.length] = n;
        }else{
            //짝수
            n = n / 2;
            answer[answer.length] = n;
        }
    }
    return answer;
}