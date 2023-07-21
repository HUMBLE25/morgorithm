function solution(n,arr = []) {
    // const answer = [n];
    // while(n !== 1){
    //     n % 2 ?  n = 3 * n + 1 : n = n / 2;
    //     answer[answer.length] = n;
    // };
    // return answer;
    arr[arr.length] = n;
    if(n === 1) return arr;
    // if( n % 2 ){
    //     return solution(3 * n + 1, arr);
    // }else{
    //     return solution(n/2, arr);
    // }
    return n % 2 ? solution(3 * n + 1, arr) : solution(n/2, arr); 
    //재귀 함수로 풀어보자
}