function solution(price, money, count) {
    // 수도 코드
    // 이용하는 만큼 price가 증가한다.
    // count번 타게 되었을때 얼마가 모자라는지 반환하라.
    // 필요한 금액을 구하고 가지고 있는 금액과의 차액을 구하면 되겠다.
    // 이용금액 3짜리 4번이라면 3,6,9,12 이므로 30이다. 
    // 규칙이 존재한다. 처음 금액과 마지막 금액을 더하고 2으로 나눈후 다시 총 갯수만큼 곱하면 된다.
    // 식으로 풀어 쓴다면 총 필요금액 : (price + price * count)/2*count 이렇게 된가는 것이다.
    // 금액 부족하지 않다면 0을 반환한다. 
    // 삼항 연산자를 이용하면 될 것이다.
    const total = (price + price * count)/2*count
    return total - money > 0 
                ? total - money
                : 0
}