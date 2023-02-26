function solution(numbers, k) {
    //수도코드
    //정수배열과 숫자를 입력받고 숫자를 반환해야한다.
    //정수배열을 1부터 시작하여 오름차순으로 정렬되어있다.
    //공을 오른쪽으로 한명을 건너뛰고 그다음 사람에게만 던질수 있다.
    //원형으로 서있다. 1번째와 마지막은 바로 옆에 있다.
    //시계방향으로 번호가 증가하는 순서로 서있다.
    //최종적으로 마지막에 공을 던지는 사람의 번호를 반환해야한다.
    
    // 0번째 인덱스에서 시작하여 1회마다 인덱스가 2씩 증가하는 상황과 같다.
    // 2씩 증가하기에 k가 numbers의 길이의 절반보다 크게되면 다시 0번째 인덱스로 돌아가야한다.
    // 2*k를 배열의 길이 만
    // 마지막에 공을 던진 사람을 구해야한다는것이다.
    
    console.log(numbers[2*(k-1)%numbers.length])
    return numbers[2*(k-1)%numbers.length]
}