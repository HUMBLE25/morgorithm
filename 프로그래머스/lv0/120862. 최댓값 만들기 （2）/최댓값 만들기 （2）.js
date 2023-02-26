function solution(numbers) {
    //수도코드
    //숫자 배열을 입력받고, 두수를 곱해서 만들수 있는 최댓값을 반환한다.
    
    //두수가 양수인경우와 두수가 음수인 경우가 있다.
    //두가지 경우를 비교하면 되지 않을까?
    
    // numbers.sort((a,b)=>b-a)
    // if(numbers[0]*numbers[1] > numbers[numbers.length-1]*numbers[numbers.length-2]){
    //     return numbers[0]*numbers[1]
    // }else{
    //     return numbers[numbers.length-1]*numbers[numbers.length-2]
    // }
    
    //=> 리팩토링 if~else문을 삼항연산자로 리팩토링 하자.
    // Conditional (ternary) operator(조건(삼항)연산자)
    // numbers.length를 자주 사용하므로 변수에 담아서 사용하자.
    // numbers.sort((a,b)=>b-a)
    // const L = numbers.length
    // return numbers[0]*numbers[1] > numbers[L-1]*numbers[L-2] 
    //        ? numbers[0]*numbers[1] 
    //        : numbers[L-1]*numbers[L-2]
    
    //두수중에서 큰수를 골라내는것이니 Math.max()매소드를 사용할수 있다.
    numbers.sort((a,b)=>b-a)
    const L = numbers.length
    return Math.max(numbers[0]*numbers[1],numbers[L-1]*numbers[L-2])

    
    
}