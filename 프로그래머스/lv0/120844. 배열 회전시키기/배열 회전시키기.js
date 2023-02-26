function solution(numbers, direction) {
    //수도코드
    //방향에따라 한칸씩 회전시킨다.
    //right의 경우 마지막 인덱스의 요소를 0번쨰 인덱스자리로 옮긴다.
     //=>pop()매소드로 마지막 인덱스를 제거하고,
     //unshift()매소드로 그요소를 0번째인데스자리로 옮긴다.
    //left의 경우 첫번째 인덱스를 마지막 인덱스 요소로 옮긴다.
     //=>shift()매소드로 첫번쨰 인덱스를 제거하고,
     //push()매소드로 마지막 인덱스자리에 넣어준다.
    direction === 'right' 
        ? numbers.unshift(numbers.pop())
        : numbers.push(numbers.shift())
        return numbers
}