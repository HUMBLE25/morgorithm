function solution(chicken) {
    // chicken을 10으로 나누었을떄 몫은 서비스 치킨의 수이자, 쿠폰의 수이다.
    // 이때의 나머지는 쿠폰의 수를 의미한다. 
    // chicken을 나누기 연산자로 연산후 서비스 치킨의 수를 담는 변수에 더하기 할당해준다.
    // chicken을 나머지 연산자로 연산하고, 나누기 연산자로 나눈 값을 더하여 쿠폰수를 담는 변수에 할당해준다.
    // 연산의 반복은 언제까지 하지? 몫이 0인 경우 그만둔다.

    let service = 0;
    let coupon = chicken;
    while(coupon >= 10){
        const value = Math.trunc(coupon / 10);
        service += value;
        coupon = value + coupon % 10;
    }
    return service
}