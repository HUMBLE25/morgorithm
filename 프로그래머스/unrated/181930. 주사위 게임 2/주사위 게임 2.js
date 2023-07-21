function solution(a, b, c) {
    if(  a === b && a === c && b === c){
        // 모두 같은 경우
        return 27 * (a ** 6);
    }else if(a === b || a === c || b === c  ){
        // 적어도 하나만 같은 경우
       return (a + b + c)*(a ** 2 + b ** 2 + c ** 2);
    }else{
        // 모두 다른 경우
        return a + b + c;
    }
}