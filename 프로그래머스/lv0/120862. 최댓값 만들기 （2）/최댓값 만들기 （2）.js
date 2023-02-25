function solution(numbers) {
    //수도코드
    //숫자 배열을 입력받고, 두수를 곱해서 만들수 있는 최댓값을 반환한다.
    
    //두수가 양수인경우와 두수가 음수인 경우가 있다.
    //두가지 경우를 비교하면 되지 않을까?
    
    numbers.sort((a,b)=>b-a)
    if(numbers[0]*numbers[1] > numbers[numbers.length-1]*numbers[numbers.length-2]){
        return numbers[0]*numbers[1]
    }else{
        return numbers[numbers.length-1]*numbers[numbers.length-2]
    }
}